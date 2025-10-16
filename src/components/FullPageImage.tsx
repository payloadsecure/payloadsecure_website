import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import serverImage from "figma:asset/993b6d37e3324cbe35f2f64fd1113220fb182195.png";

export function FullPageImage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden">
      {/* Full page image with parallax - Server Room */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <img
          src={serverImage}
          alt="Secure Server Infrastructure"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better visibility */}
        <motion.div 
          className="absolute inset-0 bg-[#0a0a0f]/60"
          style={{ opacity }}
        ></motion.div>
        
        {/* Subtle glow effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#00d9ff] rounded-full opacity-10 blur-3xl"></div>
        </div>
      </motion.div>
      
      {/* Centered text overlay with animations */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div 
          className="text-center space-y-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-7xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00d9ff]" style={{ textShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}>
              Where Security
            </span>
            <br />
            <span className="text-foreground">
              Meets Innovation
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Fortifying your digital realm with cutting-edge threat intelligence
          </motion.p>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
