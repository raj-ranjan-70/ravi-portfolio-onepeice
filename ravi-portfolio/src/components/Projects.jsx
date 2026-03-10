import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Uber Analytics Dashboard",
            tech: "Power BI, DAX",
            description: "Data visualization dashboard to analyze ride patterns and optimize driver allocation.",
            result: "Actionable insights for operational efficiency",
        },
        {
            title: "Coffee House Dashboard",
            tech: "Power BI",
            description: "Comprehensive sales and customer analytics dashboard for a coffee chain.",
            result: "40% engagement improvement, 18% revenue increase",
        },
        {
            title: "Waste Management System",
            tech: "HTML, CSS, JavaScript",
            description: "Web application for tracking and managing local waste collection routes and schedules.",
            result: "Streamlined waste collection process",
        },
    ];

    return (
        <section id="projects" className="py-20 relative bg-dark-navy z-10 overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#f4e4bc] to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-pirate text-5xl md:text-6xl text-pirate-gold mb-4"
                    >
                        MAP OF ADVENTURES
                    </motion.h2>
                    <div className="w-24 h-1 bg-pirate-red mx-auto mb-4 rounded-full"></div>
                    <p className="text-xl text-[#f4e4bc] max-w-2xl mx-auto opacity-90">
                        Treasures unearthed and bounties claimed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1, zIndex: 30 }}
                            transition={{ duration: 0.5 }}
                            className="relative group perspective-1000"
                        >
                            <div className="bg-[#e8dcb8] border-8 border-[#5c4033] rounded-sm p-6 shadow-2xl h-full flex flex-col justify-between transform transition-all duration-500 overflow-hidden">
                                {/* Paper Texture */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-60 mix-blend-multiply pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="text-center border-b-2 border-dark-navy/30 pb-4 mb-4">
                                        <h3 className="font-pirate text-3xl font-bold text-dark-navy leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Project Image Placeholder */}
                                    <div className="w-full h-40 bg-dark-navy/90 border-4 border-[#8B4513] mb-4 relative overflow-hidden flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-shadow duration-300">
                                        <ExternalLink className="w-12 h-12 text-pirate-gold opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <p className="text-dark-navy font-medium mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        <div className="bg-dark-navy/10 px-3 py-2 rounded border border-dark-navy/20">
                                            <span className="font-bold text-pirate-red text-xs uppercase tracking-wider block mb-1">Tech Stack</span>
                                            <span className="text-dark-navy font-bold text-sm">{project.tech}</span>
                                        </div>
                                        <div className="bg-pirate-gold/20 px-3 py-2 rounded border border-pirate-gold/40">
                                            <span className="font-bold text-dark-navy text-xs uppercase tracking-wider block mb-1">Result</span>
                                            <span className="text-dark-navy font-bold text-sm italic">"{project.result}"</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer/Links */}
                                <div className="relative z-10 flex justify-between items-center mt-auto border-t-2 border-dark-navy/30 pt-4">
                                    <a href="#" className="flex items-center gap-1 text-dark-navy hover:text-pirate-red font-bold transition-colors">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href="#" className="flex items-center gap-1 text-dark-navy hover:text-pirate-gold font-bold transition-colors">
                                        <ExternalLink size={18} /> Live View
                                    </a>
                                </div>

                                {/* Poster corner folds */}
                                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#5c4033] rotate-45 z-20"></div>
                                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#5c4033] rotate-45 z-20"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
