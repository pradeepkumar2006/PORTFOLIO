import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            role: "Web Development Intern",
            company: "Tech Solutions Inc.",
            duration: "June 2024 - Aug 2024",
            description: "Assisted in building responsive frontend interfaces using React.js and optimized website performance.",
        },
        {
            role: "Frontend Developer Trainee",
            company: "Startup Hub",
            duration: "Jan 2024 - May 2024",
            description: "Collaborated with designers to implement pixel-perfect UI components and integrated REST APIs.",
        },
    ];

    return (
        <section id="experience" className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Experience</h2>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative pl-8 border-l border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors duration-300"
                        >
                            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-white dark:bg-black border border-zinc-400 dark:border-zinc-600 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300 rounded-full"></div>

                            <h3 className="text-2xl font-semibold mb-1 group-hover:translate-x-2 transition-transform duration-300 text-black dark:text-white">{exp.role}</h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 text-zinc-500">
                                <span className="font-medium text-zinc-600 dark:text-zinc-400">{exp.company}</span>
                                <span className="hidden md:block">•</span>
                                <span className="text-sm font-mono">{exp.duration}</span>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
