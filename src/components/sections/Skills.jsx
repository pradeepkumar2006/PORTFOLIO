import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaServer, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql, SiOracle, SiBootstrap, SiFlutter, SiStreamlit, SiGooglecloud, SiPostman } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            technologies: [
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "React", icon: <FaReact /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            ],
        },
        {
            category: "Backend",
            technologies: [
                { name: "Java / Core Java", icon: <FaJava /> },
                { name: "Spring Boot", icon: <SiSpringboot /> },
                { name: "REST API", icon: <FaServer /> },
            ],
        },
        {
            category: "Database",
            technologies: [
                { name: "MySQL", icon: <SiMysql /> },
                { name: "Oracle", icon: <SiOracle /> },
            ],
        },
        {
            category: "Tools & Others",
            technologies: [
                { name: "Figma", icon: <FiFigma /> },
                { name: "Flutter", icon: <SiFlutter /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Streamlit", icon: <SiStreamlit /> },
                { name: "Vertex AI", icon: <SiGooglecloud /> },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 border-b border-zinc-300 dark:border-zinc-800 pb-4 flex items-end justify-between"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-black dark:text-white">Technical Skills</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white dark:bg-black p-8 border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors duration-300 group shadow-sm dark:shadow-none"
                        >
                            <h3 className="text-xl font-bold mb-8 text-black dark:text-white uppercase tracking-wider border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {category.technologies.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center p-4 rounded-none border border-zinc-100 dark:border-zinc-900 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors"
                                    >
                                        <div className="text-3xl mb-3 text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">{tech.icon}</div>
                                        <span className="text-sm text-zinc-600 dark:text-zinc-500 font-mono uppercase">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
