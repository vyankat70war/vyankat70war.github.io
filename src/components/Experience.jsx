import { useState } from 'react';
import { experience } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Experience() {
    const [expanded, setExpanded] = useState(0);
    const [ref, inView] = useInView();

    return (
        <section id="experience" className="py-24 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/50 to-transparent pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" ref={ref}>
                    <p className="text-sky-400 font-semibold mb-2 tracking-widest text-sm uppercase">
                        Career Journey
                    </p>
                    <h2 className="section-title">Work Experience</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-violet-600 rounded-full mx-auto mt-4" />
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Company list */}
                    <div className="space-y-2">
                        {experience.map((exp, i) => (
                            <button
                                key={exp.company}
                                onClick={() => setExpanded(i)}
                                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 border ${expanded === i
                                        ? 'glass border-sky-500/40 shadow-lg shadow-sky-500/10'
                                        : 'border-transparent hover:bg-white/5'
                                    }`}
                                style={{
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                                    transition: `all 0.5s ease ${i * 100}ms`,
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{exp.icon}</span>
                                    <div>
                                        <div className={`font-semibold text-sm ${expanded === i ? 'text-white' : 'text-slate-300'}`}>
                                            {exp.company}
                                        </div>
                                        <div className="text-xs text-slate-500">{exp.period}</div>
                                    </div>
                                    {exp.current && (
                                        <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/30">
                                            Current
                                        </span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Detail panel */}
                    <div className="lg:col-span-2">
                        {experience.map((exp, i) => (
                            <div
                                key={exp.company}
                                className={`transition-all duration-300 ${expanded === i ? 'block' : 'hidden'
                                    }`}
                            >
                                <div className="card h-full">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-2xl">{exp.icon}</span>
                                                <h3
                                                    className={`font-display text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}
                                                >
                                                    {exp.company}
                                                </h3>
                                            </div>
                                            <p className="text-white font-semibold">{exp.role}</p>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-slate-400 text-sm flex items-center gap-1">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {exp.location}
                                                </span>
                                                <span className="text-slate-400 text-sm flex items-center gap-1">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>
                                        {exp.current && (
                                            <span className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/30">
                                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                                Current Role
                                            </span>
                                        )}
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-3">
                                        {exp.highlights.map((h, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 mt-2`}
                                                />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
