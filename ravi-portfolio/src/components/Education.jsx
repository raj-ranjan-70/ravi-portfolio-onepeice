import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Education() {
    const journey = [
        {
            id: 1,
            title: "Lovely Professional University",
            subtitle: "B.Tech/MCA (or your specific degree)",
            date: "Graduation Year",
            description: "Navigating the grand line of computer science. CGPA: 6.59",
            side: "left",
        },
        {
            id: 2,
            title: "Army Public School",
            subtitle: "High School",
            date: "Completion Year",
            description: "Setting sail from the East Blue. Base training and foundational skills.",
            side: "right",
        },
    ];

    return (
        <section id="education" className="py-20 relative bg-[#f4e4bc] z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-pirate text-5xl md:text-6xl text-dark-navy mb-4 relative z-10"
                    >
                        THE JOURNEY
                    </motion.h2>
                    <div className="w-24 h-1 bg-pirate-red mx-auto relative z-10 rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Vertical Grand Line Map / Rope */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dashed border-dark-navy/30 dark:border-gray-700 hidden md:block"></div>

                    <div className="space-y-12">
                        {journey.map((item, index) => (
                            <div
                                key={item.id}
                                className={`flex flex-col md:flex-row items-center justify-between w-full ${item.side === "left" ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="w-full md:w-5/12 hidden md:block"></div>

                                {/* Center Node / Compass point */}
                                <div className="z-10 flex items-center order-1 bg-pirate-red shadow-xl w-12 h-12 rounded-full mb-4 md:mb-0 justify-center border-4 border-[#f4e4bc]">
                                    <MapPin className="text-[#f4e4bc] w-6 h-6 animate-pulse" />
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: item.side === "left" ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="order-1 custom-card bg-[#e8dcb8] w-full md:w-5/12 px-6 py-6 rounded-lg shadow-lg border-2 border-dark-navy relative hover:shadow-[0_0_15px_rgba(10,31,68,0.3)] transition-all duration-300"
                                >
                                    {/* Map/Paper Texture overlay */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10 mix-blend-multiply pointer-events-none"></div>

                                    <h3 className="font-pirate text-2xl font-bold text-pirate-red mb-1">
                                        {item.title}
                                    </h3>
                                    <h4 className="text-dark-navy font-bold text-lg mb-2">
                                        {item.subtitle}
                                    </h4>
                                    <p className="text-pirate-gold bg-dark-navy inline-block px-3 py-1 rounded text-sm font-bold mb-4">
                                        {item.date}
                                    </p>
                                    <p className="text-dark-navy/80 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
