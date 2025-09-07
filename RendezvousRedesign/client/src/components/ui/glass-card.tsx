import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({ 
  children, 
  className, 
  hover = true, 
  delay = 0 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={hover ? { 
        scale: 1.02, 
        y: -10,
        boxShadow: "0 20px 60px rgba(31, 38, 135, 0.3)"
      } : undefined}
      className={cn("glass-card rounded-3xl", className)}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
