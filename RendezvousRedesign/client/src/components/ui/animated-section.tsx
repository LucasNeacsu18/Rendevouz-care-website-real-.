import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  className = "" 
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
