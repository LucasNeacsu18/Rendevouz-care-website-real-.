import { motion } from "framer-motion";
import logoImage from "@assets/image_1757191463830.png";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 glass-morphism"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <img 
            src={logoImage} 
            alt="Rendezvous Care Logo" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="text-xl font-bold text-white">Rendezvous Care</h3>
            <p className="text-white/80">Supporting Mental Health Since 1998</p>
          </div>
        </div>
        <p className="text-white/70">
          © 2024 Rendezvous Care Services. All rights reserved. | CQC Registration: Care Quality Commission Regulated
        </p>
      </div>
    </motion.footer>
  );
}
