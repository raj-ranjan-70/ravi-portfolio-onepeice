import { Download, Mail, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 z-0 bg-dark-navy">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Simple ocean gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-ocean-blue/50 to-transparent"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#e8dcb8] p-4 md:p-8 rounded-sm shadow-2xl relative mx-auto max-w-3xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border-12 border-[#3e2723]"
                >
                    {/* Poster Paper Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-60 mix-blend-multiply pointer-events-none"></div>

                    {/* Poster Header */}
                    <div className="text-center mb-8 border-b-4 border-double border-dark-navy/60 pb-4">
                        <h2 className="font-pirate text-5xl md:text-7xl text-dark-navy tracking-widest drop-shadow-sm">
                            WANTED
                        </h2>
                        <p className="font-pirate text-xl md:text-2xl text-pirate-red tracking-widest mt-2">
                            DEAD OR ALIVE
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* Image Frame */}
                        <div className="w-56 h-72 md:w-64 md:h-88 border-4 border-dark-navy/80 bg-[#c2b280] shadow-inner mb-6 relative overflow-hidden group">
                            <img src="/assets/portrait.jpg" alt="Ravi Kant Mishra" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <h1 className="font-pirate text-4xl md:text-6xl text-dark-navy mb-2 tracking-wide text-center">
                            Ravi Kant Mishra
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-pirate-red mb-1 text-center">
                            Data Analyst & Developer
                        </p>
                        <p className="text-lg text-dark-navy/80 italic mb-8 text-center max-w-md">
                            "Turning Data into Treasure"
                        </p>

                        {/* Bounty */}
                        <div className="flex items-center gap-2 mb-10">
                            <span className="font-pirate text-3xl md:text-4xl text-dark-navy">Beli</span>
                            <span className="font-pirate text-4xl md:text-5xl text-dark-navy">1,500,000,000</span>
                            <span className="font-pirate text-3xl md:text-4xl text-dark-navy">-</span>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
                            <a
                                href="#projects"
                                className="flex items-center justify-center gap-2 bg-pirate-red text-[#f4e4bc] px-6 py-3 rounded-md font-bold text-lg hover:bg-red-800 hover:shadow-[0_0_15px_rgba(139,0,0,0.6)] transition-all duration-300"
                            >
                                <Eye size={20} /> View Projects
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1UQrVqRXSR9vkq_MNclZWmDNmPrQkZmSD/edit?usp=drive_link&ouid=100883905459414425254&rtpof=true&sd=true"
                                className="flex items-center justify-center gap-2 bg-pirate-gold text-dark-navy px-6 py-3 rounded-md font-bold text-lg hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300"
                            >
                                <Download size={20} /> Download CV
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center justify-center gap-2 bg-dark-navy text-pirate-gold px-6 py-3 rounded-md font-bold text-lg border border-pirate-gold hover:bg-[#061530] hover:shadow-[0_0_15px_rgba(10,31,68,0.6)] transition-all duration-300"
                            >
                                <Mail size={20} /> Contact
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}
