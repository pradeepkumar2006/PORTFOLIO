import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 bg-white dark:bg-black transition-colors duration-300"
        >
            <div className="max-w-4xl w-full text-center z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl font-medium mb-4 uppercase tracking-widest"
                >
                    Hi there, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-6 text-black dark:text-white tracking-tighter"
                >
                    Pradeep Kumar
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-2xl md:text-4xl text-zinc-600 dark:text-zinc-500 mb-12 font-light"
                >
                    I am an{" "}
                    <span className="text-black dark:text-white font-normal uppercase tracking-tighter">
                        IT Student & Aspiring Developer
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-none bg-black dark:bg-white text-white dark:text-black font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors uppercase tracking-wider"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-none border border-zinc-300 dark:border-zinc-700 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase tracking-wider"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
