import { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Skills", href: "#skills" },
        { name: "Journey", href: "#education" },
        { name: "Adventures", href: "#projects" },
        { name: "Logbook", href: "#logbook" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark-navy/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Compass className="w-8 h-8 text-pirate-gold animate-spin-slow" />
                        <a href="#" className="font-pirate text-2xl tracking-wider text-pirate-gold drop-shadow-md">
                            RKM
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[#f4e4bc] hover:text-pirate-gold transition-colors duration-200 font-medium tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-pirate-gold hover:text-white transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-dark-navy/95 backdrop-blur-lg absolute w-full top-full border-t border-pirate-gold/20">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-center text-[#f4e4bc] hover:bg-pirate-red/20 hover:text-pirate-gold rounded-md text-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
