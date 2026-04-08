import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
    const education = [
        {
            degree: "Bachelor of Information Technology",
            institution: "A.V.C College of Engineering, Mannampandal",
            year: "2023 - 2027",
            description: "CGPA: 8.1 / 10",
        },
        {
            degree: "Grade - 12",
            institution: "Guru Gnana Sambandar Mission Matriculation Higher Secondary School, Mayiladuthurai",
            year: "2020 - 2023",
            description: "Percentage: 82%",
        },
    ];

    return (
        <section id="about" className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">About Me</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-normal mb-8 text-zinc-700 dark:text-zinc-300 leading-normal">
                            Entry-level Developer specializing in Information Technology.
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-500 text-lg leading-relaxed mb-6 font-light">
                            I am looking for an entry-level developer position where I can utilize my coding and problem-solving capabilities.
                            I'm deeply interested in developing skills in new technologies through projects and constant learning.
                            My aim is to grow as a professional while contributing to the organization's success with dedicated effort and technical proficiency.
                        </p>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border-l border-zinc-200 dark:border-zinc-800 pl-8"
                    >
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 w-full border-b border-zinc-100 dark:border-zinc-900 pb-4 uppercase tracking-widest">
                            <FaGraduationCap className="text-black dark:text-white text-2xl" />
                            Education
                        </h3>
                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute top-1 left-[-41px] w-4 h-4 bg-white dark:bg-black border border-zinc-400 dark:border-zinc-500 rounded-full box-content"></div>
                                    <h4 className="text-xl font-bold text-black dark:text-white mb-1">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">{edu.institution}</p>
                                    <p className="text-zinc-500 text-xs font-mono mb-3">{edu.year}</p>
                                    <p className="text-zinc-500 dark:text-zinc-400">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
