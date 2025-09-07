import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const GlassCard = ({ children, className, hover = false, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={cn(
        "glass-card rounded-2xl transition-all duration-500",
        hover && "cursor-pointer hover:shadow-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
