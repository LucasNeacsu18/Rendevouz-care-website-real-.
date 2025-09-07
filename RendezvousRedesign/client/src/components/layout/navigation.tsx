import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Award, Menu, X } from "lucide-react";
import logoImage from "@assets/image_1757191463830.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-morphism shadow-lg" : "glass-morphism"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link href="/">
            <div className="flex items-center space-x-4 hover-scale cursor-pointer">
              <img 
                src={logoImage} 
                alt="Rendezvous Care Logo" 
                className="w-12 h-12 object-contain"
                data-testid="logo-image"
              />
              <div>
                <h1 className="text-xl font-bold text-white">Rendezvous Care</h1>
                <p className="text-sm text-white/80">Mental Health Support Since 1998</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`nav-link font-medium transition-all duration-300 ${
                    location === item.href
                      ? "text-accent"
                      : "text-white/90 hover:text-white"
                  }`}
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.a>
              </Link>
            ))}

            {/* CQC Rating Badge */}
            <div className="glass-card px-4 py-2 rounded-full flex items-center space-x-2 animate-glow">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-white font-semibold text-sm">CQC: Good</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden glass-card p-2 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-card rounded-2xl p-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block font-medium transition-all duration-300 ${
                      location === item.href
                        ? "text-accent"
                        : "text-white/90 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </motion.a>
                </Link>
              ))}
              <div className="glass-card px-4 py-2 rounded-full flex items-center space-x-2 animate-glow">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-white font-semibold text-sm">CQC: Good</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
