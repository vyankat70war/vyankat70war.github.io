import { useState } from 'react';
import { achievements, education, languages, hobbies } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const CompanyLogo = ({ logo, icon, name, className = "" }) => {
    const [error, setError] = useState(false);

    if (logo && !error) {
        return (
            <div className={`relative flex items-center justify-center bg-white p-1 rounded-lg ${className}`}>
                <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-full h-full object-contain"
                    onError={() => setError(true)}
                />
            </div>
        );
    }

    return <span className={`text-3xl flex-shrink-0 ${className}`}>{icon}</span>;
};

export default function Achievements() {
    const [ref, inView] = useInView();

    return (
        <section id="achievements" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" ref={ref}>
                    <p className="text-sky-400 font-semibold mb-2 tracking-widest text-sm uppercase">
                        Recognition & More
                    </p>
                    <h2 className="section-title">Achievements & Beyond</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-violet-600 rounded-full mx-auto mt-4" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Achievements card */}
                    <div className="card md:col-span-2 lg:col-span-1">
                        <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
                            <span>🏆</span> Achievements
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((ach, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                                    style={{
                                        opacity: inView ? 1 : 0,
                                        transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                                        transition: `all 0.5s ease ${i * 150}ms`,
                                    }}
                                >
                                    <CompanyLogo
                                        logo={ach.logo}
                                        icon={ach.icon}
                                        name={ach.org}
                                        className="w-12 h-12"
                                    />
                                    <div>
                                        <div className="font-semibold text-white text-sm">{ach.title}</div>
                                        <div className="text-slate-400 text-xs">{ach.org} · {ach.year}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education card */}
                    <div className="card">
                        <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
                            <span>🎓</span> Education
                        </h3>
                        <div className="p-4 rounded-xl bg-gradient-to-br from-sky-500/10 to-violet-500/10 border border-sky-500/20">
                            <div className="flex items-center gap-3 mb-3">
                                <CompanyLogo
                                    logo={education.logo}
                                    icon="🎓"
                                    name={education.institution}
                                    className="w-12 h-12"
                                />
                                <div className="font-bold text-white text-sm">{education.degree}</div>
                            </div>
                            <div className="text-sky-400 text-sm font-medium mb-2">{education.institution}</div>
                            <div className="text-slate-400 text-sm flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {education.period}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="mt-6">
                            <h4 className="font-semibold text-slate-300 mb-3 text-sm">Languages Spoken</h4>
                            <div className="flex gap-2 flex-wrap">
                                {languages.map((lang) => (
                                    <span
                                        key={lang}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-violet-400/10 text-violet-300 border border-violet-400/20"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hobbies card */}
                    <div className="card">
                        <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
                            <span>✨</span> Interests
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {hobbies.map((h) => (
                                <div
                                    key={h.label}
                                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-center"
                                >
                                    <span className="text-2xl">{h.icon}</span>
                                    <span className="text-xs text-slate-300 font-medium">{h.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
