import React from "react";
import { motion } from "framer-motion";
import { PiCertificate } from "react-icons/pi";

const Certifications = () => {
    const certs = [
        {
            title: "Java Programming Certification",
            issuer: "Coursera",
            date: "2026",
            icon: <PiCertificate className="text-3xl" />,
            certificateLink: "https://www.coursera.org/account/accomplishments/verify/M06GGQVDG9S7",
        },
        {
            title: "LLM Application Development",
            issuer: "Claude API (Anthropic)",
            date: "2026",
            icon: <PiCertificate className="text-3xl" />,
            certificateLink: "https://verify.skilljar.com/c/ggasg4a5xwdu",
        },
    ];

    return (
        <section id="certifications" className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-4 flex items-end justify-between"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Certifications</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-8 hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors duration-300 group shadow-sm dark:shadow-none flex flex-col h-full"
                        >
                            <div className="mb-6 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors flex justify-between items-start">
                                {item.icon}
                                {item.certificateLink && (
                                    <a
                                        href={item.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold uppercase tracking-wider border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                    >
                                        Verify Credential
                                    </a>
                                )}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-1 underline-offset-4 text-black dark:text-white">
                                {item.title}
                            </h3>
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

export default Certifications;
