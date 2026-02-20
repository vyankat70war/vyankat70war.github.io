import { profile } from '../data/portfolioData';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-xl gradient-text">VS.</span>
                        <span className="text-slate-500 text-sm">
                            {profile.name} · {profile.title}
                        </span>
                    </div>
                    <div className="text-slate-500 text-sm text-center">
                        © {year} {profile.name}. Built with React & Tailwind CSS.
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                        >
                            {profile.email}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
