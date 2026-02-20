import { useState } from 'react';
import { profile } from '../data/portfolioData';

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: profile.email,
            href: `mailto:${profile.email}`,
            color: 'from-sky-500 to-blue-600',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'linkedin.com/in/vyankat-sattarwar-9b854217',
            href: profile.linkedin,
            color: 'from-blue-600 to-indigo-600',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: 'Phone',
            value: profile.phone,
            href: `tel:${profile.phone}`,
            color: 'from-emerald-500 to-teal-600',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Location',
            value: profile.location,
            href: 'https://maps.google.com/?q=Pune,Maharashtra,India',
            color: 'from-violet-500 to-purple-600',
        },
    ];

    return (
        <section id="contact" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/30 to-dark-900/50 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sky-400 font-semibold mb-2 tracking-widest text-sm uppercase">
                        Let's Connect
                    </p>
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-violet-600 rounded-full mx-auto mt-4" />
                    <p className="text-slate-400 mt-6 max-w-xl mx-auto">
                        I'm open to new opportunities, collaborations, and conversations. Feel free to reach out!
                    </p>
                </div>

                {/* Main CTA */}
                <div className="card text-center mb-12 bg-gradient-to-br from-sky-500/10 to-violet-500/10 border-sky-500/20">
                    <div className="text-5xl mb-4">👋</div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                        Let's build something amazing together
                    </h3>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        Whether you have a project in mind, a job opportunity, or just want to chat about tech — my inbox is always open.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href={`mailto:${profile.email}`}
                            className="btn-primary flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send an Email
                        </a>
                        <button
                            onClick={copyEmail}
                            className="px-6 py-3 rounded-xl glass glass-hover text-slate-300 font-semibold flex items-center gap-2 transition-all"
                        >
                            {copied ? (
                                <>
                                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-emerald-400">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy Email
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Contact methods */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contactMethods.map(({ icon, label, value, href, color }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="card text-center group hover:-translate-y-1 transition-all duration-300"
                        >
                            <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}
                            >
                                {icon}
                            </div>
                            <div className="font-semibold text-slate-300 text-sm mb-1">{label}</div>
                            <div className="text-slate-500 text-xs truncate">{value}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
