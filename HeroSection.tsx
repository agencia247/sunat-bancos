import { motion, useInView } from "motion/react";
import { Sparkles, Play, TrendingUp, DollarSign } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const bankLogos = [
  { name: "SUNAT", color: "#C9A961" },
  { name: "BCP", color: "#D4AF37" },
  { name: "Interbank", color: "#B8860B" },
  { name: "BBVA", color: "#FFD700" },
  { name: "Scotiabank", color: "#DAA520" }
];

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  
  // Counter states
  const [count100k, setCount100k] = useState(0);
  const [count1M, setCount1M] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  
  // Start counting after initial animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCounting(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  
  // Counter for 100,000
  useEffect(() => {
    if (!startCounting) return;
    
    const duration = 2500; // 2.5 seconds
    const target = 100000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount100k(target);
        clearInterval(timer);
      } else {
        setCount100k(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [startCounting]);
  
  // Counter for 1,000,000
  useEffect(() => {
    if (!startCounting) return;
    
    const duration = 3000; // 3 seconds
    const target = 1000000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount1M(target);
        clearInterval(timer);
      } else {
        setCount1M(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [startCounting]);
  
  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString('es-PE');
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1678259498223-a509b3784fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaXR5JTIwbmlnaHR8ZW58MXx8fHwxNzYxODYwOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        
        {/* Luxury Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* 3D Floating Gold Coins */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotateY: [0, 360],
              rotateX: [0, 180],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <div 
              className="w-16 h-16 rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520, #B8860B)",
                boxShadow: `
                  0 0 40px rgba(255, 215, 0, 0.6),
                  inset -5px -5px 15px rgba(0, 0, 0, 0.4),
                  inset 5px 5px 15px rgba(255, 255, 255, 0.3)
                `,
                transform: "perspective(1000px) rotateY(25deg)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Small Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p 
              className="text-lg md:text-xl tracking-widest uppercase"
              style={{
                color: "#D4AF37",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.3em",
              }}
            >
              Gana Dinero con la SUNAT & Los Bancos
            </p>
          </motion.div>

          {/* ULTRA 3D MAIN TITLE WITH MASSIVE ANIMATIONS */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, scale: 0.8, z: -500 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ delay: 0.3, duration: 1.5, type: "spring" }}
            className="mb-16 relative"
            style={{
              perspective: "2000px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Floating 3D Container with Extreme Depth */}
            <motion.div
              className="relative p-8 md:p-12 lg:p-16 rounded-3xl backdrop-blur-xl"
              style={{
                background: "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(0, 0, 0, 0.95) 100%)",
                border: "4px solid transparent",
                backgroundImage: `
                  linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.95)),
                  linear-gradient(135deg, #FFD700, #FFF4E6, #FFD700, #DAA520, #FFD700)
                `,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: `
                  0 60px 150px rgba(0, 0, 0, 0.9),
                  0 0 120px rgba(255, 215, 0, 0.4),
                  inset 0 4px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -20px 80px rgba(0, 0, 0, 0.8)
                `,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX: isTitleInView ? [0, 5, 0, -5, 0] : 0,
                rotateY: isTitleInView ? [0, -3, 0, 3, 0] : 0,
                z: isTitleInView ? [0, 100, 0] : 0,
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Orbiting 3D Money Particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: [0, Math.cos(i * 18 * Math.PI / 180) * 300, 0],
                    y: [0, Math.sin(i * 18 * Math.PI / 180) * 200, 0],
                    z: [0, Math.sin(i * 18 * Math.PI / 180) * 150, 0],
                    scale: [0, 1.5, 0],
                    rotateZ: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <DollarSign 
                    className="w-6 h-6"
                    style={{
                      color: "#FFD700",
                      filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))",
                    }}
                  />
                </motion.div>
              ))}

              {/* Ultra 3D Text with Word-by-Word Animation */}
              <div className="relative z-10 leading-tight" style={{ transform: "translateZ(80px)" }}>
                <motion.div 
                  className="flex flex-col items-center gap-6 md:gap-8"
                >
                  {/* First Line */}
                  <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                    {/* "Obtén tus primeros" */}
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, x: -100, rotateY: -90 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                      style={{ 
                        color: "#D4AF37",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                      }}
                      className="text-2xl md:text-3xl lg:text-4xl"
                    >
                      Obtén tus primeros
                    </motion.span>

                    {/* S/100,000 - MASSIVE 3D NUMBER */}
                    <motion.span
                      className="inline-block relative"
                      initial={{ opacity: 0, scale: 0, rotateX: -180, z: -500 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
                      transition={{ delay: 0.9, duration: 1, type: "spring", stiffness: 100 }}
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <motion.span
                        className="relative inline-block px-4 md:px-6 py-2 md:py-3 rounded-2xl"
                        style={{
                          background: "radial-gradient(circle at 30% 30%, #FFD700, #FFA500, #DAA520)",
                          color: "#000",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 900,
                          border: "3px solid #FFF4E6",
                          boxShadow: `
                            0 30px 80px rgba(255, 215, 0, 0.9),
                            0 0 100px rgba(255, 215, 0, 0.8),
                            inset -10px -10px 40px rgba(0, 0, 0, 0.4),
                            inset 10px 10px 40px rgba(255, 255, 255, 0.4)
                          `,
                          transform: "translateZ(120px)",
                          WebkitFontSmoothing: "antialiased",
                          MozOsxFontSmoothing: "grayscale",
                        }}
                        className="text-3xl md:text-5xl lg:text-6xl"
                        animate={{
                          rotateY: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 30px 80px rgba(255, 215, 0, 0.9), 0 0 100px rgba(255, 215, 0, 0.8)",
                            "0 40px 100px rgba(255, 215, 0, 1), 0 0 150px rgba(255, 215, 0, 1)",
                            "0 30px 80px rgba(255, 215, 0, 0.9), 0 0 100px rgba(255, 215, 0, 0.8)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        ${formatNumber(count100k)}
                        
                        {/* Sparkling Stars Around Number */}
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute hidden md:block"
                            style={{
                              left: "50%",
                              top: "50%",
                            }}
                            animate={{
                              x: Math.cos(i * 45 * Math.PI / 180) * 80,
                              y: Math.sin(i * 45 * Math.PI / 180) * 50,
                              scale: [0, 1, 0],
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          >
                            <Sparkles className="w-5 h-5 text-yellow-300" fill="#FFD700" />
                          </motion.div>
                        ))}
                      </motion.span>

                      {/* 3D Depth Layers */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-2xl opacity-30 hidden md:block"
                          style={{
                            background: "radial-gradient(circle, #FFD700, transparent)",
                            transform: `translateZ(-${(i + 1) * 20}px) scale(${1 - i * 0.05})`,
                            filter: "blur(10px)",
                          }}
                        />
                      ))}
                    </motion.span>
                  </div>

                  {/* Second Line */}
                  <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                    {/* "sin pagar intereses del banco" */}
                    <motion.span
                      className="inline-block text-center"
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: 1.3, duration: 0.8, type: "spring" }}
                      style={{ 
                        color: "#D4AF37",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                      }}
                      className="text-2xl md:text-3xl lg:text-4xl"
                    >
                      sin pagar intereses del banco
                    </motion.span>
                  </div>

                  {/* Third Line */}
                  <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                    {/* "y consigue" */}
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, x: -100, rotateY: -90 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: 1.7, duration: 0.8, type: "spring" }}
                      style={{ 
                        color: "#D4AF37",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                      }}
                      className="text-2xl md:text-3xl lg:text-4xl"
                    >
                      y consigue
                    </motion.span>

                    {/* S/1,000,000 - ULTRA MASSIVE 3D NUMBER */}
                    <motion.span
                      className="inline-block relative"
                      initial={{ opacity: 0, scale: 0, rotateY: -180, z: -800 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                      transition={{ delay: 2.1, duration: 1.2, type: "spring", stiffness: 80 }}
                      style={{
                        perspective: "1500px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <motion.span
                        className="relative inline-block px-5 md:px-8 py-3 md:py-4 rounded-3xl"
                        style={{
                          background: "radial-gradient(circle at 30% 30%, #FFD700, #FF8C00, #FFD700, #FFA500, #FFD700)",
                          backgroundSize: "200% 200%",
                          color: "#000",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 900,
                          border: "4px solid #FFF4E6",
                          boxShadow: `
                            0 50px 150px rgba(255, 215, 0, 1),
                            0 0 200px rgba(255, 215, 0, 0.9),
                            inset -15px -15px 60px rgba(0, 0, 0, 0.5),
                            inset 15px 15px 60px rgba(255, 255, 255, 0.5)
                          `,
                          transform: "translateZ(180px)",
                          WebkitFontSmoothing: "antialiased",
                          MozOsxFontSmoothing: "grayscale",
                        }}
                        className="text-4xl md:text-6xl lg:text-7xl"
                        animate={{
                          rotateY: [0, 15, -15, 0],
                          rotateX: [0, -10, 10, 0],
                          scale: [1, 1.15, 1],
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          boxShadow: [
                            "0 50px 150px rgba(255, 215, 0, 1), 0 0 200px rgba(255, 215, 0, 0.9)",
                            "0 70px 200px rgba(255, 215, 0, 1), 0 0 300px rgba(255, 215, 0, 1)",
                            "0 50px 150px rgba(255, 215, 0, 1), 0 0 200px rgba(255, 215, 0, 0.9)",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        ${formatNumber(count1M)}
                        
                        {/* Explosion Particles */}
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute hidden md:block"
                            style={{
                              left: "50%",
                              top: "50%",
                            }}
                            animate={{
                              x: Math.cos(i * 30 * Math.PI / 180) * 120,
                              y: Math.sin(i * 30 * Math.PI / 180) * 80,
                              scale: [0, 2, 0],
                              rotate: [0, 720],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          >
                            <TrendingUp className="w-6 h-6 text-yellow-300" strokeWidth={3} />
                          </motion.div>
                        ))}

                        {/* Rotating Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl border-4 border-yellow-300 hidden md:block"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.8, 0, 0.8],
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                      </motion.span>

                      {/* Multiple 3D Depth Layers */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-3xl opacity-20 hidden md:block"
                          style={{
                            background: "radial-gradient(circle, #FFD700, #FFA500, transparent)",
                            transform: `translateZ(-${(i + 1) * 30}px) scale(${1 - i * 0.06})`,
                            filter: `blur(${15 + i * 5}px)`,
                          }}
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ))}
                    </motion.span>

                    {/* "en tiempo récord" */}
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, x: 100, rotateY: 90 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: 2.7, duration: 0.8, type: "spring" }}
                      style={{ 
                        color: "#D4AF37",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                      }}
                      className="text-2xl md:text-3xl lg:text-4xl"
                    >
                      en tiempo récord
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              {/* Pulsating Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl -z-10"
                style={{
                  background: "radial-gradient(circle at center, rgba(255, 215, 0, 0.3), transparent 70%)",
                  filter: "blur(60px)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Premium 3D CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-16"
            style={{ perspective: "1000px" }}
          >
            <motion.a
              href="https://wa.me/51999999999?text=Quiero%20acceder%20a%20la%20oferta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full shadow-2xl relative overflow-hidden group"
              whileHover={{ 
                scale: 1.08,
                rotateX: 5,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)",
                backgroundSize: "200% 200%",
                border: "3px solid #FFF4E6",
                boxShadow: `
                  0 20px 60px rgba(255, 215, 0, 0.6),
                  0 0 40px rgba(255, 215, 0, 0.4),
                  inset 0 -5px 20px rgba(0, 0, 0, 0.3),
                  inset 0 5px 20px rgba(255, 255, 255, 0.3)
                `,
                transformStyle: "preserve-3d",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                boxShadow: [
                  "0 20px 60px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)",
                  "0 25px 70px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)",
                  "0 20px 60px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)",
                ],
              }}
              transition={{
                backgroundPosition: { duration: 3, repeat: Infinity },
                boxShadow: { duration: 2, repeat: Infinity },
              }}
            >
              <Sparkles className="w-6 h-6 relative z-10 text-black" />
              <span className="text-xl md:text-2xl relative z-10 text-black">¡QUIERO ACCEDER A LA OFERTA!</span>
              
              {/* Inner Glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
          </motion.div>

          {/* 3D Bank Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-gray-400 mb-6">Trabaja con las instituciones más importantes del Perú:</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {bankLogos.map((bank, index) => (
                <motion.div
                  key={bank.name}
                  initial={{ opacity: 0, y: 30, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 3.7 + index * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -10,
                    rotateY: 10,
                  }}
                  className="px-6 py-3 rounded-lg backdrop-blur-md relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(40, 40, 40, 0.9) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    boxShadow: `
                      0 10px 30px rgba(0, 0, 0, 0.8),
                      0 0 20px ${bank.color}40,
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span 
                    className="text-xl tracking-wide"
                    style={{ 
                      color: bank.color,
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      textShadow: `0 0 20px ${bank.color}80`,
                    }}
                  >
                    {bank.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 4, duration: 1, type: "spring" }}
            className="max-w-3xl mx-auto"
            style={{ perspective: "2000px" }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              style={{
                border: "4px solid rgba(255, 215, 0, 0.5)",
                boxShadow: `
                  0 30px 80px rgba(0, 0, 0, 0.9),
                  0 0 60px rgba(255, 215, 0, 0.5),
                  inset 0 0 40px rgba(255, 215, 0, 0.1)
                `,
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                scale: 1.02,
              }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center cursor-pointer relative"
                onClick={() => setShowVideo(true)}
              >
                {!showVideo ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-black" />
                    <motion.div
                      className="relative z-10 flex flex-col items-center gap-4"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div 
                        className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl relative"
                        style={{
                          background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520, #B8860B)",
                          boxShadow: `
                            0 0 60px rgba(255, 215, 0, 0.8),
                            inset -5px -5px 20px rgba(0, 0, 0, 0.4),
                            inset 5px 5px 20px rgba(255, 255, 255, 0.3)
                          `,
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 60px rgba(255, 215, 0, 0.8)",
                            "0 0 100px rgba(255, 215, 0, 1)",
                            "0 0 60px rgba(255, 215, 0, 0.8)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Play className="w-12 h-12 text-black ml-2" fill="black" />
                      </motion.div>
                      <p className="text-white text-xl">Ver presentación de Luis Lamas</p>
                    </motion.div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black">
                    <p className="text-white">Video de Luis Lamas aquí</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div 
          className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
          style={{
            borderColor: "#D4AF37",
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
          }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: "#FFD700" }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
