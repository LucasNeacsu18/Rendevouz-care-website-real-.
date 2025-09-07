import { motion } from "framer-motion";

const FloatingShapes = () => {
  const shapes = [
    { size: 200, top: "10%", left: "10%", delay: 0 },
    { size: 150, top: "50%", right: "15%", delay: 5 },
    { size: 100, bottom: "20%", left: "20%", delay: 10 },
    { size: 120, top: "30%", left: "60%", delay: 15 },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="floating-shape absolute"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: (shape as any).right,
            bottom: (shape as any).bottom,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 15, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
