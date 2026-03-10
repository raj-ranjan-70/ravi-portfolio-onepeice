import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-navy pt-16 pb-8 border-t-4 border-pirate-red relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">

                    <h2 className="font-pirate text-3xl md:text-4xl text-pirate-gold mb-6 tracking-widest drop-shadow-md">
                        "The ocean calls those who dare to explore data."
                    </h2>

                    <div className="flex space-x-6 mb-8">
                        <a
                            href="https://github.com/ravikantMishra10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f4e4bc] hover:text-white hover:-translate-y-1 transform transition-all duration-300"
                        >
                            <Github className="w-8 h-8" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/ravikant10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f4e4bc] hover:text-[#0a66c2] hover:-translate-y-1 transform transition-all duration-300 bg-white/10 hover:bg-white rounded-sm"
                        >
                            <Linkedin className="w-8 h-8 p-1" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="#contact"
                            className="text-[#f4e4bc] hover:text-pirate-red hover:-translate-y-1 transform transition-all duration-300"
                        >
                            <Mail className="w-8 h-8" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>

                    <div className="w-full max-w-md h-px bg-linear-to-r from-transparent via-pirate-gold/30 to-transparent mb-8"></div>

                    <p className="text-[#f4e4bc]/60 text-sm">
                        &copy; {currentYear} Ravi Kant Mishra. Built with React & Tailwind CSS.
                    </p>
                    <p className="text-[#f4e4bc]/40 text-xs mt-2 font-pirate tracking-wider">
                        All rights reserved on the Grand Line.
                    </p>
                </div>
            </div>
        </footer>
    );
}
