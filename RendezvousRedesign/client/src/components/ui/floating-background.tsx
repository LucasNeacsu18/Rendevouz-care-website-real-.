import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <>
      <div className="animated-background" />
      <div className="parallax-bg hero-gradient">
      {/* Floating particles */}
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className="particle animate-particle"
          style={{
            left: `${(i + 1) * 10}%`,
            animationDelay: `${i * 5}s`,
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10"
        animate={{
          y: [-10, -30, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 rounded-lg bg-white/15 transform rotate-45"
        animate={{
          y: [-15, -35, -15],
          rotate: [45, 225, 405],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-white/10"
        animate={{
          y: [-10, -30, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-1/3 w-24 h-24 rounded-xl bg-white/15"
        animate={{
          y: [-15, -35, -15],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      </div>
    </>
  );
}
