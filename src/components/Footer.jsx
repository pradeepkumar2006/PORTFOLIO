import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-zinc-100 dark:bg-black py-12 border-t border-zinc-200 dark:border-zinc-900 mt-auto transition-colors duration-300">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-zinc-500">
                <div className="mb-4 md:mb-0">
                    <p className="font-mono text-sm">&copy; {new Date().getFullYear()} Pradeep Kumar</p>
                </div>

                <div className="flex space-x-8">
                    <a href="https://github.com/pradeepkumar2006" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors text-xl">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/pradeep-kumar-b06855331" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors text-xl">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:pradeepkumarcb18s@gmail.com" className="hover:text-black dark:hover:text-white transition-colors text-xl">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
