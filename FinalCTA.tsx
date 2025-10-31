import { motion, useInView } from "motion/react";
import { Calendar, Clock, Users, Sparkles, ArrowRight, Zap } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [spots, setSpots] = useState(73);

  // Simulate spots decreasing
  useEffect(() => {
    const interval = setInterval(() => {
      setSpots(prev => Math.max(50, prev - Math.floor(Math.random() * 2)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Premium Black & Gold Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Radial Gold Glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Floating 3D Gold Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [0, 2, 0],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "radial-gradient(circle, #FFD700, #DAA520)",
                boxShadow: "0 0 15px rgba(255, 215, 0, 0.8)",
              }}
            />
          </motion.div>
        ))}

        {/* 3D Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${(i % 3) * 40 + 10}%`,
              top: `${Math.floor(i / 3) * 50 + 10}%`,
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="w-32 h-32 border-4 opacity-10"
              style={{
                borderColor: "#D4AF37",
                transform: "rotateX(45deg) rotateY(45deg)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Premium 3D Content */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1.2, type: "spring" }}
            className="text-center"
            style={{ perspective: "2000px" }}
          >
            {/* Luxury Urgency Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full mb-12 relative"
              style={{
                background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520, #B8860B)",
                border: "4px solid #FFF4E6",
                boxShadow: `
                  0 20px 60px rgba(255, 215, 0, 0.8),
                  inset -6px -6px 20px rgba(0, 0, 0, 0.3),
                  inset 6px 6px 20px rgba(255, 255, 255, 0.3)
                `,
              }}
              animate={{
                scale: [1, 1.08, 1],
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                rotateY: { duration: 4, repeat: Infinity },
              }}
            >
              <Zap className="w-7 h-7 text-black" fill="black" />
              <span className="text-black text-xl tracking-wide" style={{ fontWeight: 900 }}>
                ÚLTIMA OPORTUNIDAD
              </span>
              <Zap className="w-7 h-7 text-black" fill="black" />
            </motion.div>

            {/* Massive 3D Title */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 1, type: "spring" }}
              className="text-5xl md:text-7xl lg:text-8xl mb-8"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                background: "linear-gradient(135deg, #FFD700 0%, #FFF4E6 20%, #FFD700 40%, #DAA520 60%, #FFD700 80%, #FFF4E6 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 20px 60px rgba(255, 215, 0, 0.6)",
              }}
            >
              ¡NO PIERDAS ESTA OPORTUNIDAD!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-4xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Únete al evento que cambiará tu vida financiera para siempre
            </motion.p>

            {/* Premium 3D Event Detail Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Calendar, label: "Fecha", value: "15 de Noviembre" },
                { icon: Clock, label: "Hora", value: "19:00 PM (Perú)" },
                { icon: Users, label: "Modalidad", value: "Clase en Vivo - Zoom" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 50, rotateX: -30 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -12,
                      rotateY: 5,
                    }}
                    className="p-8 rounded-2xl backdrop-blur-md relative"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(40, 40, 40, 0.9) 100%)",
                      border: "3px solid rgba(212, 175, 55, 0.5)",
                      boxShadow: `
                        0 20px 60px rgba(0, 0, 0, 0.9),
                        0 0 40px rgba(255, 215, 0, 0.3),
                        inset 0 2px 0 rgba(255, 255, 255, 0.1),
                        inset 0 -8px 30px rgba(0, 0, 0, 0.4)
                      `,
                      perspective: "1000px",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      style={{
                        background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
                        boxShadow: `
                          0 0 30px rgba(255, 215, 0, 0.6),
                          inset -4px -4px 12px rgba(0, 0, 0, 0.3),
                          inset 4px 4px 12px rgba(255, 255, 255, 0.3)
                        `,
                      }}
                      className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                    </motion.div>
                    <p className="text-sm text-gray-400 mb-2">{item.label}</p>
                    <p 
                      className="text-2xl"
                      style={{ 
                        fontWeight: 700,
                        color: "#D4AF37",
                      }}
                    >
                      {item.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Premium 3D Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, type: "spring" }}
              className="mb-16"
            >
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xl text-gray-300">Cupos Disponibles:</span>
                  <motion.span
                    className="text-5xl"
                    style={{ 
                      fontWeight: 900,
                      color: "#FFD700",
                      textShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                    }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {spots} / 100
                  </motion.span>
                </div>
                <div 
                  className="h-6 rounded-full overflow-hidden backdrop-blur-md relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                    border: "3px solid rgba(212, 175, 55, 0.5)",
                    boxShadow: `
                      0 10px 30px rgba(0, 0, 0, 0.8),
                      inset 0 4px 10px rgba(0, 0, 0, 0.5)
                    `,
                  }}
                >
                  <motion.div
                    className="h-full relative"
                    style={{
                      background: "linear-gradient(90deg, #FFD700 0%, #FFF4E6 50%, #FFD700 100%)",
                      backgroundSize: "200% 100%",
                      boxShadow: `
                        0 0 30px rgba(255, 215, 0, 0.8),
                        inset 0 -3px 8px rgba(0, 0, 0, 0.3),
                        inset 0 3px 8px rgba(255, 255, 255, 0.3)
                      `,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { 
                      width: `${spots}%`,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    } : {}}
                    transition={{ 
                      width: { duration: 2, delay: 1.2 },
                      backgroundPosition: { duration: 3, repeat: Infinity },
                    }}
                  />
                </div>
                <p className="text-sm text-yellow-400 mt-4 flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ⚠️
                  </motion.span>
                  ¡Los cupos se están agotando rápidamente!
                </p>
              </div>
            </motion.div>

            {/* Massive 3D CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 1.4, duration: 1, type: "spring" }}
              style={{ perspective: "2000px" }}
            >
              <motion.a
                href="https://wa.me/51999999999?text=Quiero%20asegurar%20mi%20lugar%20en%20el%20evento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-5 px-16 py-8 rounded-full shadow-2xl relative overflow-hidden group"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520, #B8860B)",
                  border: "6px solid #FFF4E6",
                  boxShadow: `
                    0 40px 100px rgba(255, 215, 0, 0.9),
                    0 0 100px rgba(255, 215, 0, 0.7),
                    inset -10px -10px 40px rgba(0, 0, 0, 0.3),
                    inset 10px 10px 40px rgba(255, 255, 255, 0.3)
                  `,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 5,
                  rotateX: -5,
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  rotateY: [0, 2, 0, -2, 0],
                }}
                transition={{
                  rotateY: { duration: 6, repeat: Infinity },
                }}
              >
                <Sparkles className="w-10 h-10 text-black" />
                <span 
                  className="text-2xl md:text-4xl text-black"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 900,
                  }}
                >
                  ¡QUIERO ACCEDER A LA OFERTA!
                </span>
                <ArrowRight className="w-10 h-10 text-black group-hover:translate-x-3 transition-transform" />
              </motion.a>

              {/* Price Display */}
              <motion.p
                className="text-3xl mt-8"
                style={{
                  color: "#FFD700",
                  textShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
                }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Solo por <span className="text-5xl mx-3" style={{ fontWeight: 900 }}>$69</span> 
                <span className="text-gray-500 line-through ml-3 text-2xl">$1,560</span>
              </motion.p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm"
            >
              {[
                "Acceso Inmediato",
                "Garantía 30 días",
                "Soporte incluido",
                "100% Online"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
                      boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)",
                    }}
                  >
                    <span className="text-black text-xs" style={{ fontWeight: 900 }}>✓</span>
                  </div>
                  <span className="text-gray-400 text-lg">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Final Warning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2 }}
              className="mt-20 p-10 rounded-3xl backdrop-blur-md max-w-3xl mx-auto"
              style={{
                background: "linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                border: "3px solid rgba(139, 0, 0, 0.5)",
                boxShadow: `
                  0 20px 60px rgba(139, 0, 0, 0.6),
                  0 0 40px rgba(255, 69, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <p className="text-3xl text-orange-300 mb-4">
                ⏰ Esta oferta expira cuando se llenen los 100 cupos
              </p>
              <p className="text-gray-300 text-xl">
                No dejes pasar la oportunidad de transformar tu vida financiera. 
                Miles ya lo han logrado, ahora es tu turno.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2.2 }}
        className="relative z-10 mt-24 pt-12"
        style={{ borderTop: "2px solid rgba(212, 175, 55, 0.3)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2025 Luis Lamas - Sistema ESIN. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Este evento es solo con fines educativos. Los resultados pueden variar.
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
