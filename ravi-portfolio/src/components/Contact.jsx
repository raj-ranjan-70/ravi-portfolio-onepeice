import { motion } from "framer-motion";
import { Send, Phone, User, Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative bg-dark-navy z-10">
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#f4e4bc] to-transparent pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-pirate text-5xl md:text-6xl text-pirate-gold mb-4 flex items-center justify-center gap-4"
                    >
                        <Phone className="w-10 h-10 text-pirate-red animate-pulse" />
                        DEN DEN MUSHI
                    </motion.h2>
                    <div className="w-24 h-1 bg-[#f4e4bc] mx-auto mb-4 rounded-full opacity-50"></div>
                    <p className="text-xl text-[#f4e4bc] max-w-2xl mx-auto opacity-90">
                        Establish a connection across the Grand Line.
                    </p>
                </div>

                <div className="bg-[#e8dcb8] rounded-xl shadow-2xl overflow-hidden border-4 border-[#3e2723] relative">
                    {/* Wood Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-multiply pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 relative z-10">

                        {/* Contact Info Side */}
                        <div className="md:col-span-2 bg-linear-to-br from-dark-navy to-[#061530] p-8 text-[#f4e4bc] flex flex-col justify-between">
                            <div>
                                <h3 className="font-pirate text-3xl text-pirate-gold mb-6 border-b border-pirate-gold/20 pb-4">
                                    Comms Post
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="bg-pirate-gold/20 p-3 rounded-full group-hover:bg-pirate-red transition-colors duration-300">
                                            <Mail className="w-6 h-6 text-pirate-gold" />
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-70 uppercase tracking-widest font-bold">Email</p>
                                            <p className="font-medium">contact@ravikant.com</p>
                                        </div>
                                    </div>

                                    <a href="https://linkedin.com/in/ravikant10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                                        <div className="bg-pirate-gold/20 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                                            <Linkedin className="w-6 h-6 text-pirate-gold" />
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-70 uppercase tracking-widest font-bold">LinkedIn</p>
                                            <p className="font-medium group-hover:underline">ravikant10</p>
                                        </div>
                                    </a>

                                    <a href="https://github.com/ravikantMishra10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                                        <div className="bg-pirate-gold/20 p-3 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                                            <Github className="w-6 h-6 text-pirate-gold" />
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-70 uppercase tracking-widest font-bold">GitHub</p>
                                            <p className="font-medium group-hover:underline">ravikantMishra10</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Snail graphical element */}
                            <div className="mt-12 flex justify-center opacity-80 pointer-events-none drop-shadow-lg filter sepia relative h-32 w-full">
                                <div className="absolute bottom-0 w-24 h-16 bg-[#c2b280] rounded-t-full rounded-b-xl border-4 border-[#8B4513]"></div>
                                <div className="absolute bottom-4 left-1/2 -ml-8 w-16 h-16 bg-pirate-red rounded-full border-4 border-dark-navy flex items-center justify-center animate-spin-slow">
                                    <div className="w-8 h-8 rounded-full border-r-2 border-b-2 border-pirate-gold rotate-45"></div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="md:col-span-3 p-8 bg-[#fdf8e7]">
                            <h3 className="font-pirate text-3xl text-dark-navy mb-6">Send a Message</h3>

                            <form className="space-y-6">
                                <div className="relative">
                                    <label className="text-sm font-bold text-dark-navy/70 uppercase tracking-wider mb-1 block">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-dark-navy/40" />
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-dark-navy/10 rounded focus:border-pirate-gold focus:ring-0 outline-none transition-colors shadow-inner"
                                            placeholder="Monkey D. Luffy"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="text-sm font-bold text-dark-navy/70 uppercase tracking-wider mb-1 block">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-dark-navy/40" />
                                        </div>
                                        <input
                                            type="email"
                                            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-dark-navy/10 rounded focus:border-pirate-gold focus:ring-0 outline-none transition-colors shadow-inner"
                                            placeholder="luffy@strawhat.com"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="text-sm font-bold text-dark-navy/70 uppercase tracking-wider mb-1 block">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full p-4 bg-white border-2 border-dark-navy/10 rounded focus:border-pirate-gold focus:ring-0 outline-none transition-colors shadow-inner resize-none"
                                        placeholder="I'm going to be the Pirate King!"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-pirate-gold text-dark-navy font-bold text-lg py-4 rounded flex items-center justify-center gap-2 hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] border-2 border-[#b5952f] transition-all duration-300 relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Send size={20} className="group-hover:animate-bounce" /> Transmit
                                    </span>
                                    <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
                                </motion.button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
