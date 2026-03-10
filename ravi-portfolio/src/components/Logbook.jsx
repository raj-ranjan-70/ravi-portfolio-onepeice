import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Logbook() {
    const entries = [
        {
            title: "Data Structures in C++",
            provider: "Techvanto Training",
            date: "Log Entry: Dec 2023",
            content: "Mastered the core algorithms and structures vital for navigating complex computational seas.",
        },
        // Add more training here if needed
    ];

    return (
        <section id="logbook" className="py-20 relative bg-[#f4e4bc] z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-pirate text-5xl md:text-6xl text-dark-navy mb-4 flex items-center justify-center gap-4"
                    >
                        <BookOpen className="w-12 h-12 text-pirate-red" />
                        CAPTAIN'S LOGBOOK
                    </motion.h2>
                    <div className="w-24 h-1 bg-pirate-gold mx-auto mb-4 rounded-full"></div>
                    <p className="text-xl text-dark-navy/80 max-w-2xl mx-auto italic">
                        Records of advanced training, certifications, and knowledge acquired.
                    </p>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, rotateX: 90 }}
                        whileInView={{ opacity: 1, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-full max-w-3xl bg-[#fdf8e7] rounded-r-2xl rounded-l-md shadow-2xl relative"
                        style={{ perspective: "1000px" }}
                    >
                        {/* Book Texture */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-80 mix-blend-multiply pointer-events-none rounded-r-2xl rounded-l-md"></div>

                        {/* Book spine */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-pirate-red to-[#A52A2A] rounded-l-md border-r border-[#5c2a2a] shadow-inner z-20"></div>

                        <div className="p-8 md:p-12 pl-12 md:pl-16 relative z-10 space-y-8">
                            {entries.map((entry, index) => (
                                <div key={index} className="relative border-b-2 border-pirate-gold/30 pb-8 last:border-0 last:pb-0">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <h3 className="font-pirate text-3xl text-dark-navy block" style={{ fontFamily: "Pirata One, cursive" }}>
                                            {entry.title}
                                        </h3>
                                        <span className="inline-block bg-dark-navy/10 text-pirate-red font-bold px-3 py-1 rounded text-sm mt-2 md:mt-0 font-mono tracking-widest border border-pirate-red/20 transform -rotate-2">
                                            {entry.date}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-pirate-gold mb-4 uppercase tracking-wider">
                                        {entry.provider}
                                    </h4>
                                    <p className="text-dark-navy/90 text-lg leading-relaxed font-serif italic text-justify px-4 py-2 bg-black/5 rounded shadow-inner" style={{ InkFree: "Ink Free, cursive" }}>
                                        "{entry.content}"
                                    </p>

                                    {/* Ink splash decorative */}
                                    {index % 2 === 0 && (
                                        <div className="absolute right-0 bottom-4 w-12 h-12 opacity-10 pointer-events-none mix-blend-multiply" style={{ backgroundImage: "radial-gradient(circle, #000 20%, transparent 60%)", filter: "blur(2px) contrast(5)" }}></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Book pages edge effect */}
                        <div className="absolute right-0 top-2 bottom-2 w-3 bg-linear-to-l from-[#e6d5aa] to-transparent rounded-r-xl border-l border-r border-[#d3be8b] z-0 shadow-sm opacity-60 flex flex-col justify-around">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="w-full h-px bg-[#d3be8b] opacity-40"></div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
