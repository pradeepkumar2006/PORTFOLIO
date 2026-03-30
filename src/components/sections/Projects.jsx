import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "SmartBus (Travo) – Fleet Management",
            description:
                "A real-time transportation solution featuring GPS tracking, sub-second latency via Redis, and dedicated safety modules for students/parents. Modernizing commuting with high-performance event-driven telemetry.",
            techStack: ["NestJS", "Redis", "Socket.io", "React", "MySQL", "Tailwind"],
            github: "https://github.com/pradeepkumar2006/Travo",
            demo: "#",
        },
        {
            title: "NOMAD – AI Travel Assistant (RAG)",
            description:
                "Context-aware travel assistant for Tamil Nadu tourism built on RAG architecture. Uses Spring AI and Vector Stores to provide hyper-personalized guidance grounded in verified data.",
            techStack: ["Spring Boot 3", "Spring AI", "WebFlux", "React", "OpenAI", "Tailwind"],
            github: "#",
            demo: "#",
        },
        {
            title: "Multi-Platform System Hardening Tool",
            description:
                "Enterprise security tool for cross-platform system hardening. Automates security configurations and vulnerability patching for Windows and Linux environments.",
            techStack: ["Python", "Shell Scripting", "Linux", "Windows Security"],
            github: "#",
            demo: "#",
            
        },
        {
              title: "EnterpriseAI – Conversational CIO",
            description:
                "AI-powered platform converting enterprise data into actionable business insights. Implemented a RAG pipeline with ChromaDB and Gemma LLM for secure data querying.",
            techStack: ["React.js", "FastAPI", "ChromaDB", "Ollama", "Gemma LLM"],
            github: "https://github.com/pradeepkumar2006/AI-powered-Conversational-CIO",
            demo: "#",
           
        },
        {
           title: "AirConnect – Airline Reservation System",
            description:
                "Full-stack reservation system featuring real-time flight searches, interactive seating charts, and automated ticket generation with a professional responsive UI.",
            techStack: ["React", "Spring Boot", "MySQL", "REST API"],
            github: "#",
            demo: "#",
        },
        {
           title: "Smart Campus Management System",
            description:
                "Scalable backend system with secure JWT-based role authentication. Implements modules for attendance, marks, and administrative workflows using Spring Security.",
            techStack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "REST API"],
            github: "#",
            demo: "#",
        },

    ];

    return (
        <section id="projects" className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-4 flex items-end justify-between"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Featured Projects</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-black p-8 border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors duration-300 group shadow-sm dark:shadow-none flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between mb-6">
                                    <div className="h-12 w-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                                        <span className="font-mono font-bold text-lg">0{index + 1}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-zinc-400 hover:text-black dark:hover:text-white text-xl transition-colors"><FaGithub /></a>
                                        <a href={project.demo} className="text-zinc-400 hover:text-black dark:hover:text-white text-xl transition-colors"><FaExternalLinkAlt /></a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-base mb-8 leading-relaxed min-h-[5rem]">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 text-xs font-mono border border-zinc-200 dark:border-zinc-800 uppercase tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default Projects;
