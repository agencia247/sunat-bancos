import { motion, useInView } from "motion/react";
import { Check, Zap, TrendingUp, Crown } from "lucide-react";
import { useRef } from "react";

const priceItems = [
  { item: "Grabación de la clase", price: 40 },
  { item: "Herramientas financieras", price: 350 },
  { item: "Video curso completo", price: 870 },
  { item: "Mentoría con el coach", price: 200 },
  { item: "Soporte 3 meses", price: 100 },
];

export function OfferSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const total = priceItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* 3D Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 25}%`,
                width: "200px",
                height: "200px",
              }}
              animate={{
                rotateZ: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div 
                className="w-full h-full border-2 rounded-lg"
                style={{
                  borderColor: "rgba(212, 175, 55, 0.2)",
                  transform: "rotateX(60deg) rotateZ(45deg)",
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.1)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating 3D Gold Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: "6px",
              height: "6px",
            }}
            animate={{
              y: [0, -150, 0],
              rotateZ: [0, 360],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: "radial-gradient(circle, #FFD700, #DAA520)",
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Premium Title with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="text-center mb-16"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-8 py-4 rounded-full relative"
              style={{
                background: "linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(218, 165, 32, 0.2) 100%)",
                border: "2px solid rgba(255, 215, 0, 0.5)",
                boxShadow: `
                  0 10px 40px rgba(255, 215, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
              }}
              animate={{
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Crown className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-300 tracking-wide">OFERTA EXCLUSIVA VIP</span>
              <Crown className="w-6 h-6 text-yellow-400" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                background: "linear-gradient(135deg, #FFD700 0%, #FFF4E6 30%, #FFD700 60%, #DAA520 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 10px 40px rgba(255, 215, 0, 0.5)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              ¡DESCUENTO EXCLUSIVO!
            </motion.h2>
            <p className="text-2xl md:text-3xl text-yellow-300">
              SOLO PARA LAS PRIMERAS 100 PERSONAS
            </p>
          </motion.div>

          {/* Price Table with 3D Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - 3D Items */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotateY: -20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, type: "spring" }}
              className="space-y-4"
              style={{ perspective: "1000px" }}
            >
              {priceItems.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: -50, rotateY: -30 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 15,
                    rotateY: 5,
                    z: 50,
                  }}
                  className="flex items-center justify-between p-5 rounded-xl backdrop-blur-md relative group"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(50, 50, 50, 0.9) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    boxShadow: `
                      0 10px 30px rgba(0, 0, 0, 0.8),
                      0 0 20px rgba(255, 215, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
                        boxShadow: `
                          0 0 20px rgba(255, 215, 0, 0.6),
                          inset -2px -2px 8px rgba(0, 0, 0, 0.3),
                          inset 2px 2px 8px rgba(255, 255, 255, 0.3)
                        `,
                      }}
                    >
                      <Check className="w-5 h-5 text-black" strokeWidth={3} />
                    </motion.div>
                    <span className="text-white">{item.item}</span>
                  </div>
                  <span 
                    className="text-xl"
                    style={{ 
                      fontWeight: 700,
                      color: "#D4AF37",
                      textShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                    }}
                  >
                    ${item.price}
                  </span>
                  
                  {/* 3D Depth Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%)",
                      transform: "translateZ(-10px)",
                    }}
                  />
                </motion.div>
              ))}

              {/* Total Original with 3D */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, type: "spring" }}
                className="p-6 rounded-xl relative"
                style={{
                  background: "linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                  border: "2px solid rgba(100, 100, 100, 0.5)",
                  boxShadow: `
                    0 10px 30px rgba(0, 0, 0, 0.9),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl text-gray-300">Valor Total:</span>
                  <span 
                    className="text-3xl text-gray-500 line-through"
                    style={{ fontWeight: 700 }}
                  >
                    ${total}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Premium Price Card */}
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: 20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="flex items-center justify-center"
              style={{ perspective: "2000px" }}
            >
              <motion.div
                className="relative p-10 rounded-3xl w-full max-w-md"
                style={{
                  background: "linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)",
                  backgroundSize: "200% 200%",
                  border: "6px solid #FFF4E6",
                  boxShadow: `
                    0 40px 100px rgba(255, 215, 0, 0.8),
                    0 0 80px rgba(255, 215, 0, 0.6),
                    inset 0 -10px 40px rgba(0, 0, 0, 0.2),
                    inset 0 10px 40px rgba(255, 255, 255, 0.3)
                  `,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, -3, 0, 3, 0],
                }}
                transition={{
                  backgroundPosition: { duration: 5, repeat: Infinity },
                  rotateY: { duration: 8, repeat: Infinity },
                  rotateX: { duration: 8, repeat: Infinity },
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: -5,
                }}
              >
                {/* Luxury Ribbon */}
                <motion.div 
                  className="absolute -top-6 -right-6 px-8 py-3 rounded-full border-4 border-white shadow-2xl"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #FF6B6B, #C92A2A)",
                    transform: "rotate(12deg)",
                    boxShadow: `
                      0 10px 30px rgba(201, 42, 42, 0.6),
                      inset 0 -3px 10px rgba(0, 0, 0, 0.3),
                      inset 0 3px 10px rgba(255, 255, 255, 0.3)
                    `,
                  }}
                  animate={{
                    rotate: [12, 15, 12],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-sm text-white tracking-wider" style={{ fontWeight: 800 }}>
                    ¡AHORRA {Math.round((1 - 69/total) * 100)}%!
                  </span>
                </motion.div>

                <div className="text-center relative" style={{ transform: "translateZ(30px)" }}>
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 text-black" strokeWidth={2.5} />
                  <p className="text-xl text-black/80 mb-2">Precio especial HOY:</p>
                  
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-start justify-center gap-1 mb-4">
                      <span className="text-4xl text-black mt-2" style={{ fontWeight: 900 }}>$</span>
                      <motion.span 
                        className="text-9xl text-black"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 900,
                          textShadow: `
                            4px 4px 0 rgba(0,0,0,0.2),
                            -2px -2px 0 rgba(255,255,255,0.2)
                          `,
                        }}
                        animate={{
                          textShadow: [
                            "4px 4px 0 rgba(0,0,0,0.2), -2px -2px 0 rgba(255,255,255,0.2)",
                            "6px 6px 0 rgba(0,0,0,0.3), -3px -3px 0 rgba(255,255,255,0.3)",
                            "4px 4px 0 rgba(0,0,0,0.2), -2px -2px 0 rgba(255,255,255,0.2)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        69
                      </motion.span>
                    </div>
                  </motion.div>

                  <p className="text-black/70 mb-6 text-lg">Pago único - Acceso inmediato</p>

                  <motion.a
                    href="https://wa.me/51999999999?text=Quiero%20acceder%20a%20la%20oferta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-5 rounded-full shadow-2xl transition-all text-lg"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #1a1a1a, #000000)",
                      color: "#FFD700",
                      fontWeight: 900,
                      border: "3px solid #FFD700",
                      boxShadow: `
                        0 10px 30px rgba(0, 0, 0, 0.8),
                        0 0 20px rgba(255, 215, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ¡ASEGURAR MI LUGAR AHORA!
                  </motion.a>
                </div>
                
                {/* 3D Depth Shadow */}
                <div
                  className="absolute inset-0 rounded-3xl -z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(218, 165, 32, 0.3))",
                    transform: "translateZ(-20px) scale(0.95)",
                    filter: "blur(20px)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Urgency Counter with 3D */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 1.2, type: "spring" }}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(139, 0, 0, 0.4) 0%, rgba(80, 0, 0, 0.4) 100%)",
                border: "2px solid rgba(255, 69, 0, 0.5)",
                boxShadow: `
                  0 10px 40px rgba(139, 0, 0, 0.6),
                  0 0 30px rgba(255, 69, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(139, 0, 0, 0.6), 0 0 30px rgba(255, 69, 0, 0.3)",
                  "0 15px 50px rgba(139, 0, 0, 0.8), 0 0 50px rgba(255, 69, 0, 0.5)",
                  "0 10px 40px rgba(139, 0, 0, 0.6), 0 0 30px rgba(255, 69, 0, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-4 h-4 rounded-full"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #FF4500, #8B0000)",
                  boxShadow: "0 0 20px rgba(255, 69, 0, 0.8)",
                }}
              />
              <span className="text-orange-300 text-lg">
                ⚡ Solo quedan <span className="text-white text-3xl mx-2" style={{ fontWeight: 900, textShadow: "0 0 10px rgba(255, 215, 0, 0.5)" }}>27</span> cupos disponibles
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
