import { useState, useEffect } from 'react';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = navItems.map(i => i.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) setActiveSection(e.target.id);
                });
            },
            { threshold: 0.5 }
        );
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="font-display font-bold text-lg gradient-text tracking-tight">
                        VS<span className="text-slate-400">.</span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className={`nav-link transition-all duration-200 ${activeSection === href.slice(1)
                                        ? 'text-sky-400 font-semibold'
                                        : ''
                                    }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="mailto:sattarwar.vyankat@gmail.com"
                        className="hidden md:block btn-primary text-sm py-2 px-4"
                    >
                        Hire Me
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 flex flex-col gap-1">
                            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                            <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="md:hidden glass rounded-xl mb-4 p-4 flex flex-col gap-3">
                        {navItems.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="nav-link py-1"
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="mailto:sattarwar.vyankat@gmail.com"
                            className="btn-primary text-sm text-center mt-2"
                        >
                            Hire Me
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
