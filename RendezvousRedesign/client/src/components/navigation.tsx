import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
const logoImage = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop";

const Navigation = () => {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-morphism fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl px-6 py-3"
    >
      <div className="flex items-center space-x-8">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          data-testid="logo"
        >
          <img 
            src={logoImage} 
            alt="Rendezvous Care Logo" 
            className="h-10 w-10 object-contain logo-transparent"
          />
          <span className="font-bold text-xl text-foreground">Rendezvous Care</span>
        </motion.div>
        <div className="flex space-x-1">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.button
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location === item.path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-primary/5 hover:text-primary"
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </motion.button>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
