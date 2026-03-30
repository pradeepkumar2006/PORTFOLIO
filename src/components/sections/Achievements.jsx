import React from "react";
import { motion } from "framer-motion";
import { GiTrophyCup } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";

const Achievements = () => {
    const items = [
        {
            type: "Award",
            title: "Smart India Hackathon Finalist",
            issuer: "IIM Lucknow Noida",
            date: "2025",
            description: "Developed a multi-platform system hardening tool for Windows and Linux that automates security checks, identifies misconfigurations, and improves system security while reducing manual effort.",
            icon: <GiTrophyCup className="text-3xl" />,
            certificateLink: "",
        },
        {
            type: "Hackathon",
            title: "Cyberthon",
            issuer: "SRM College (Ramapuram)",
            date: "2026",
            description: "Built an AI-Powered Conversational CIO that acts as a decision interface, translating technical metrics into business-level insights, detecting anomalies, and highlighting risks in natural language.",
            icon: <GiTrophyCup className="text-3xl" />,
            certificateLink: "",
        }
    ];

    return (
        <section id="achievements" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950 text-black dark:text-white border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 border-b border-zinc-300 dark:border-zinc-800 pb-4 flex items-end justify-between"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Achievements</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-8 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-300 group shadow-sm dark:shadow-none flex flex-col h-full"
                        >
                            <div className="mb-6 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors flex justify-between items-start">
                                {item.icon}
                                {item.certificateLink && (
                                    <a
                                        href={item.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold uppercase tracking-wider border border-zinc-300 dark:border-zinc-700 px-3 py-1 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                    >
                                        View Cert
                                    </a>
                                )}
                            </div>
                            <div className="mb-2">
                                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded-md">
                                    {item.type}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 mt-4 group-hover:underline decoration-1 underline-offset-4 text-black dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-900">
                                <span>{item.issuer}</span>
                                <span className="font-mono">{item.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
