import { motion } from "framer-motion";
import { Code, Database, FileJson, Layout, Terminal, Braces, BarChart } from "lucide-react";

export default function Skills() {
    const skills = [
        { name: "C++", icon: Braces, bounty: "500,000,000", color: "text-blue-600" },
        { name: "Python", icon: Terminal, bounty: "450,000,000", color: "text-yellow-600" },
        { name: "SQL", icon: Database, bounty: "400,000,000", color: "text-gray-600" },
        { name: "Power BI", icon: BarChart, bounty: "600,000,000", color: "text-yellow-500" },
        { name: "HTML", icon: Layout, bounty: "300,000,000", color: "text-orange-600" },
        { name: "CSS", icon: FileJson, bounty: "300,000,000", color: "text-blue-500" },
        { name: "JavaScript", icon: Code, bounty: "480,000,000", color: "text-yellow-400" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="skills" className="py-20 relative bg-dark-navy z-10">
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#f4e4bc] to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="font-pirate text-5xl md:text-6xl text-pirate-gold mb-4"
                    >
                        THE ARSENAL
                    </motion.h2>
                    <div className="w-24 h-1 bg-pirate-gold mx-auto mb-4 rounded-full"></div>
                    <p className="text-xl text-[#f4e4bc] max-w-2xl mx-auto opacity-90">
                        Devil Fruits & Haki mastered along the journey.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative bg-[#e8dcb8] p-6 rounded-lg shadow-lg border-2 border-dark-navy/80 hover:border-pirate-red overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,0,0,0.4)] transition-all duration-300"
                            >
                                {/* Paper Texture overlay */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-50 mix-blend-multiply pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className={`p-4 bg-dark-navy rounded-full mb-4 shadow-inner group-hover:scale-110 group-hover:bg-pirate-red transition-all duration-300`}>
                                        <Icon className={`w-10 h-10 ${skill.color} group-hover:text-pirate-gold drop-shadow-md`} />
                                    </div>
                                    <h3 className="font-pirate text-2xl font-bold text-dark-navy mb-2 tracking-wide text-center">
                                        {skill.name}
                                    </h3>
                                    <div className="text-center border-t border-dark-navy/20 pt-3 w-full">
                                        <p className="text-sm text-pirate-red font-bold uppercase tracking-widest mb-1">
                                            Bounty
                                        </p>
                                        <p className="font-pirate text-xl text-dark-navy">
                                            ฿ {skill.bounty}
                                        </p>
                                    </div>
                                </div>

                                {/* Corner decorative marks */}
                                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-dark-navy/60"></div>
                                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-dark-navy/60"></div>
                                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-dark-navy/60"></div>
                                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-dark-navy/60"></div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
