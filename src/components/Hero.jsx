import { profile } from '../data/portfolioData';

const floatingBadges = [
    { label: '12 Years', sub: 'Experience', pos: 'top-10 left-8' },
    { label: '5 Companies', sub: 'Top Firms', pos: 'bottom-16 left-[-20px]' },
    { label: 'AWS + Azure', sub: 'Cloud Expert', pos: 'top-24 right-[-10px]' },
];

export default function Hero() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center hero-bg grid-bg overflow-hidden"
        >
            {/* Blur orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="space-y-8 animate-slide-up">
                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-slate-300">Available for new opportunities</span>
                        </div>

                        <div>
                            <p className="text-sky-400 font-semibold text-lg mb-2 font-display tracking-wide">
                                Hello, I'm
                            </p>
                            <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                                <span className="gradient-text">{profile.name}</span>
                            </h1>
                            <p className="text-2xl md:text-3xl font-display font-semibold text-slate-300">
                                {profile.subtitle}
                            </p>
                        </div>

                        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                            {profile.summary}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="btn-primary flex items-center gap-2">
                                <span>Get In Touch</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#experience"
                                className="px-6 py-3 rounded-xl glass glass-hover text-slate-300 font-semibold flex items-center gap-2"
                            >
                                View Experience
                            </a>
                        </div>

                        {/* Quick stats */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {[
                                { value: '13+', label: 'Years Experience' },
                                { value: '5', label: 'Top Companies' },
                                { value: '2x', label: 'Hackathon Winner' },
                            ].map(({ value, label }) => (
                                <div key={label} className="text-center">
                                    <div className="font-display text-3xl font-bold gradient-text">{value}</div>
                                    <div className="text-slate-400 text-sm mt-0.5">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Avatar / visual side */}
                    <div className="relative flex items-center justify-center animate-fade-in">
                        {/* Main circle */}
                        <div className="relative animate-float">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-sky-500 to-violet-600 p-1 shadow-2xl animate-glow">
                                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl mb-2">👨‍💻</div>
                                        <div className="font-display font-bold text-xl gradient-text">13+ Yrs</div>
                                        <div className="text-slate-400 text-sm">Software Craftsman</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-16 glass rounded-xl px-3 py-2 text-sm shadow-lg">
                                <div className="font-bold text-sky-400">☁️ AWS + Azure</div>
                                <div className="text-slate-400 text-xs">Cloud Expert</div>
                            </div>
                            <div className="absolute -bottom-4 -left-12 glass rounded-xl px-3 py-2 text-sm shadow-lg">
                                <div className="font-bold text-violet-400">🏆 Hackathon</div>
                                <div className="text-slate-400 text-xs">2x Winner</div>
                            </div>
                            <div className="absolute top-1/2 -left-20 glass rounded-xl px-3 py-2 text-sm shadow-lg">
                                <div className="font-bold text-emerald-400">🔧 Microservices</div>
                                <div className="text-slate-400 text-xs">Architect</div>
                            </div>
                        </div>

                        {/* Decorative ring */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-sky-500/20 animate-spin" style={{ animationDuration: '15s' }} />
                            <div className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full border border-violet-500/10 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs animate-bounce">
                    <span>Scroll down</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
