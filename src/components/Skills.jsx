import { useState } from 'react';
import { skills, skillCategories } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const categoryColors = {
    core: 'text-sky-400 border-sky-400/30 bg-sky-400/10 hover:bg-sky-400/20',
    architecture: 'text-violet-400 border-violet-400/30 bg-violet-400/10 hover:bg-violet-400/20',
    cloud: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20',
    devops: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20',
    observability: 'text-amber-400 border-amber-400/30 bg-amber-400/10 hover:bg-amber-400/20',
    database: 'text-orange-400 border-orange-400/30 bg-orange-400/10 hover:bg-orange-400/20',
    api: 'text-pink-400 border-pink-400/30 bg-pink-400/10 hover:bg-pink-400/20',
    security: 'text-red-400 border-red-400/30 bg-red-400/10 hover:bg-red-400/20',
    ai: 'text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/10 hover:bg-fuchsia-400/20',
    data: 'text-teal-400 border-teal-400/30 bg-teal-400/10 hover:bg-teal-400/20',
};

const defaultColor = 'text-slate-300 border-slate-500/30 bg-white/5 hover:bg-white/10';

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [ref, inView] = useInView();

    const filtered =
        activeCategory === 'all'
            ? skills
            : skills.filter((s) => s.category === activeCategory);

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" ref={ref}>
                    <p className="text-sky-400 font-semibold mb-2 tracking-widest text-sm uppercase">
                        Technical Arsenal
                    </p>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-violet-600 rounded-full mx-auto mt-4" />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {skillCategories.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${activeCategory === key
                                ? 'bg-gradient-to-r from-sky-500 to-violet-600 text-white border-transparent shadow-lg shadow-sky-500/25'
                                : 'glass glass-hover text-slate-400 border-white/10'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {filtered.map((skill, i) => (
                        <div
                            key={skill.name}
                            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 cursor-default
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                ${categoryColors[skill.category] || defaultColor}
              `}
                            style={{
                                transitionDelay: `${i * 40}ms`,
                            }}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>

                {/* Tech stack visual */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: '☕', name: 'Java', desc: 'Core Language', color: 'from-orange-500/20 to-amber-500/20 border-orange-500/20' },
                        { icon: '🌱', name: 'Spring Boot', desc: 'Framework', color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/20' },
                        { icon: '☁️', name: 'AWS / Azure', desc: 'Cloud Platform', color: 'from-sky-500/20 to-cyan-500/20 border-sky-500/20' },
                        { icon: '🐳', name: 'Docker / K8s', desc: 'Containerization', color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/20' },
                    ].map(({ icon, name, desc, color }) => (
                        <div
                            key={name}
                            className={`card bg-gradient-to-br ${color} border text-center hover:-translate-y-1 transition-transform duration-300`}
                        >
                            <div className="text-4xl mb-2">{icon}</div>
                            <div className="font-display font-bold text-white">{name}</div>
                            <div className="text-slate-400 text-sm">{desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
