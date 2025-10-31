import { motion, useInView } from "motion/react";
import { Shield, CheckCircle2, RefreshCw } from "lucide-react";
import { useRef } from "react";

export function GuaranteeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Radial Gold Glow */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.3) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Premium 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -30 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative"
            style={{ perspective: "2000px" }}
          >
            {/* Animated 3D Border */}
            <motion.div
              className="absolute -inset-2 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFF4E6, #FFD700, #DAA520, #FFD700)",
                backgroundSize: "400% 400%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div 
              className="relative p-16 rounded-3xl backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)",
                boxShadow: `
                  0 50px 120px rgba(0, 0, 0, 0.9),
                  0 0 100px rgba(255, 215, 0, 0.3),
                  inset 0 2px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -15px 50px rgba(0, 0, 0, 0.6)
                `,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: [0, 2, 0, -2, 0],
                rotateX: [0, -1, 0, 1, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              {/* 3D Shield Icon */}
              <motion.div
                initial={{ scale: 0, rotateY: 180 }}
                animate={isInView ? { scale: 1, rotateY: 0 } : {}}
                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                className="flex justify-center mb-10"
              >
                <motion.div
                  className="relative"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateY: [0, 15, 0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <div 
                    className="w-40 h-40 rounded-3xl flex items-center justify-center relative"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520, #B8860B)",
                      boxShadow: `
                        0 20px 60px rgba(255, 215, 0, 0.8),
                        inset -10px -10px 30px rgba(0, 0, 0, 0.4),
                        inset 10px 10px 30px rgba(255, 255, 255, 0.3)
                      `,
                      transform: "translateZ(60px)",
                    }}
                  >
                    <Shield className="w-20 h-20 text-black" strokeWidth={3} fill="black" />
                    
                    {/* Rotating Pulse Rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-3xl border-4"
                        style={{ borderColor: "#FFD700" }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.8, 0, 0.8],
                          rotateZ: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.6,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Premium Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-6xl text-center mb-8"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #FFD700 0%, #FFF4E6 25%, #FFD700 50%, #DAA520 75%, #FFD700 100%)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 10px 40px rgba(255, 215, 0, 0.5)",
                }}
              >
                GARANTÍA DE SATISFACCIÓN 100%
              </motion.h2>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-center mb-10"
              >
                <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Estamos tan seguros de que este sistema cambiará tu vida financiera que te ofrecemos 
                  una <span style={{ color: "#FFD700", fontWeight: 700 }}>garantía de devolución total</span> de 30 días.
                </p>
              </motion.div>

              {/* 3D Feature Cards */}
              <div className="space-y-5 mb-12">
                {[
                  "Si no ves resultados en las primeras 2 semanas, te devolvemos tu dinero",
                  "Sin preguntas, sin complicaciones, sin letra pequeña",
                  "El riesgo es 100% nuestro, tú solo ganas"
                ].map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -50, rotateY: -20 }}
                    animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    whileHover={{
                      scale: 1.03,
                      x: 10,
                      rotateY: 5,
                    }}
                    className="flex items-start gap-5 p-6 rounded-2xl backdrop-blur-md relative"
                    style={{
                      background: "linear-gradient(135deg, rgba(40, 40, 40, 0.8) 0%, rgba(30, 30, 30, 0.8) 100%)",
                      border: "2px solid rgba(212, 175, 55, 0.4)",
                      boxShadow: `
                        0 10px 30px rgba(0, 0, 0, 0.8),
                        0 0 20px rgba(255, 215, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
                        boxShadow: `
                          0 0 20px rgba(255, 215, 0, 0.6),
                          inset -3px -3px 10px rgba(0, 0, 0, 0.3),
                          inset 3px 3px 10px rgba(255, 255, 255, 0.3)
                        `,
                      }}
                      whileHover={{ rotateZ: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-black" strokeWidth={3} />
                    </motion.div>
                    <p className="text-white text-xl leading-relaxed">{text}</p>
                  </motion.div>
                ))}
              </div>

              {/* 3D Refund Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1, type: "spring" }}
                className="flex flex-col items-center gap-8"
              >
                <motion.div 
                  className="flex items-center gap-5 px-12 py-6 rounded-full shadow-2xl relative"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520, #B8860B)",
                    boxShadow: `
                      0 20px 60px rgba(255, 215, 0, 0.8),
                      inset -6px -6px 20px rgba(0, 0, 0, 0.3),
                      inset 6px 6px 20px rgba(255, 255, 255, 0.3)
                    `,
                    border: "4px solid #FFF4E6",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <RefreshCw className="w-10 h-10 text-black" strokeWidth={3} />
                  <div className="text-left">
                    <p className="text-4xl text-black" style={{ fontWeight: 900 }}>30 DÍAS</p>
                    <p className="text-sm text-black/80" style={{ fontWeight: 700 }}>Garantía de Reembolso</p>
                  </div>
                </motion.div>

                <p className="text-center text-gray-400 text-lg max-w-xl">
                  Esto significa que puedes probar todo el sistema, implementar las estrategias, 
                  y si no estás completamente satisfecho, recuperas tu inversión completa.
                </p>
              </motion.div>

              {/* Bottom Quote with 3D */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="mt-12 pt-10 border-t-2"
                style={{ borderColor: "rgba(212, 175, 55, 0.3)" }}
              >
                <p 
                  className="text-center text-2xl italic mb-3"
                  style={{
                    color: "#FFD700",
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                  }}
                >
                  "No tienes nada que perder y $1,000,000 que ganar"
                </p>
                <p className="text-center text-gray-500 text-lg">- Luis Lamas</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 3D Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-3 gap-6 mt-16"
          >
            {[
              { value: "10,000+", label: "Alumnos satisfechos" },
              { value: "94%", label: "Tasa de éxito" },
              { value: "4.9/5", label: "Calificación promedio" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="text-center p-8 rounded-2xl backdrop-blur-md"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(40, 40, 40, 0.9) 100%)",
                  border: "2px solid rgba(212, 175, 55, 0.3)",
                  boxShadow: `
                    0 10px 30px rgba(0, 0, 0, 0.8),
                    0 0 20px rgba(255, 215, 0, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  transformStyle: "preserve-3d",
                }}
              >
                <p 
                  className="text-4xl mb-3"
                  style={{ 
                    fontWeight: 900,
                    color: "#FFD700",
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
