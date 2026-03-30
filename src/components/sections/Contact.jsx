import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 px-6 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tighter text-black dark:text-white">Get In Touch</h2>
                    <p className="text-zinc-600 dark:text-zinc-500 text-lg max-w-2xl mx-auto font-light">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-black p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-lg dark:shadow-none"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-zinc-500 dark:text-zinc-400 mb-2 text-xs font-mono uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-300 dark:border-zinc-800 focus:border-black dark:focus:border-white px-0 py-3 text-black dark:text-white focus:outline-none transition-colors rounded-none placeholder-zinc-400 dark:placeholder-zinc-700"
                                    placeholder="YOUR NAME"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-zinc-500 dark:text-zinc-400 mb-2 text-xs font-mono uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-300 dark:border-zinc-800 focus:border-black dark:focus:border-white px-0 py-3 text-black dark:text-white focus:outline-none transition-colors rounded-none placeholder-zinc-400 dark:placeholder-zinc-700"
                                    placeholder="Youremail@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-zinc-500 dark:text-zinc-400 mb-2 text-xs font-mono uppercase tracking-widest">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-300 dark:border-zinc-800 focus:border-black dark:focus:border-white px-0 py-3 text-black dark:text-white focus:outline-none transition-colors resize-none rounded-none placeholder-zinc-400 dark:placeholder-zinc-700"
                                placeholder="HELLO, I'D LIKE TO TALK ABOUT..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-auto px-12 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:opacity-80 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
