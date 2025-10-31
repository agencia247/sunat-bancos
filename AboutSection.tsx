import { motion, useInView } from "motion/react";
import { Award, BookOpen, Users, TrendingUp, Star, Crown } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const achievements = [
  { label: "Años de experiencia", value: "15+", icon: Award },
  { label: "Alumnos capacitados", value: "10,000+", icon: Users },
  { label: "Libros publicados", value: "5", icon: BookOpen },
  { label: "Tasa de éxito", value: "94%", icon: TrendingUp }
];

const books = [
  "Sistema ESIN: El método completo",
  "Finanzas Inteligentes en Perú",
  "Cómo trabajar con SUNAT",
  "Libertad Financiera en 12 meses",
  "El Emprendedor Peruano Exitoso"
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Floating 3D Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 4) * 30}%`,
              top: `${Math.floor(i / 4) * 50}%`,
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="w-24 h-24 border-2 rounded-lg"
              style={{
                borderColor: "rgba(212, 175, 55, 0.3)",
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.2)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Premium 3D Title */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
            style={{ perspective: "1500px" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Crown className="w-12 h-12 text-yellow-400" />
            </motion.div>
            
            <h2 
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
            >
              ACERCA DE LUIS LAMAS
            </h2>
            <p className="text-xl" style={{ color: "#D4AF37" }}>
              Creador del Sistema ESIN y experto en finanzas peruanas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - 3D Photo */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotateY: -20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
              style={{ perspective: "2000px" }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: -3,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  border: "6px solid rgba(255, 215, 0, 0.5)",
                  boxShadow: `
                    0 40px 100px rgba(0, 0, 0, 0.9),
                    0 0 80px rgba(255, 215, 0, 0.5),
                    inset 0 0 40px rgba(255, 215, 0, 0.1)
                  `,
                  transformStyle: "preserve-3d",
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTc2ODM2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luis Lamas"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Premium Badge */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 p-5 rounded-xl backdrop-blur-md"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)",
                    border: "2px solid rgba(255, 215, 0, 0.5)",
                    boxShadow: `
                      0 10px 30px rgba(0, 0, 0, 0.8),
                      0 0 30px rgba(255, 215, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                  }}
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.3)",
                      "0 15px 40px rgba(0, 0, 0, 0.9), 0 0 50px rgba(255, 215, 0, 0.5)",
                      "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <Star className="w-10 h-10 text-yellow-400" fill="#FFD700" />
                    <div>
                      <p className="text-white text-lg" style={{ fontWeight: 700 }}>Certificado por</p>
                      <p className="text-yellow-400">Instituciones Financieras Internacionales</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* 3D Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-6 -right-6 p-8 rounded-3xl shadow-2xl border-4 border-white"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
                  boxShadow: `
                    0 20px 60px rgba(255, 215, 0, 0.8),
                    inset -8px -8px 25px rgba(0, 0, 0, 0.3),
                    inset 8px 8px 25px rgba(255, 255, 255, 0.3)
                  `,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateY: [0, 10, 0, -10, 0],
                  rotateX: [0, -5, 0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <p className="text-5xl text-black" style={{ fontWeight: 900 }}>15+</p>
                <p className="text-sm text-black/80" style={{ fontWeight: 700 }}>Años</p>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: 20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 
                    className="text-3xl mb-6"
                    style={{ 
                      fontWeight: 700,
                      color: "#D4AF37",
                      textShadow: "0 2px 10px rgba(212, 175, 55, 0.3)",
                    }}
                  >
                    El experto que ha ayudado a miles de peruanos
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                    <p>
                      Luis Lamas es el creador del revolucionario <span className="text-yellow-400" style={{ fontWeight: 700 }}>Sistema ESIN</span>, 
                      un método probado que ha transformado la vida financiera de más de 10,000 personas en Perú.
                    </p>
                    <p>
                      Con más de 15 años de experiencia trabajando directamente con SUNAT y las principales 
                      instituciones bancarias del país, Luis ha descubierto las estrategias legales más efectivas 
                      para maximizar el capital sin pagar intereses.
                    </p>
                    <p>
                      Autor de 5 libros bestsellers sobre finanzas y emprendimiento, sus métodos han sido 
                      reconocidos por <span style={{ color: "#FFD700", fontWeight: 700 }}>su efectividad y legalidad</span>.
                    </p>
                  </div>
                </div>

                {/* 3D Achievements Grid */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div
                        key={achievement.label}
                        initial={{ opacity: 0, y: 30, rotateX: -20 }}
                        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                        whileHover={{ 
                          scale: 1.08,
                          y: -8,
                          rotateY: 5,
                        }}
                        className="p-6 rounded-xl backdrop-blur-md relative"
                        style={{
                          background: "linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                          border: "2px solid rgba(212, 175, 55, 0.3)",
                          boxShadow: `
                            0 10px 30px rgba(0, 0, 0, 0.8),
                            0 0 20px rgba(255, 215, 0, 0.2),
                            inset 0 1px 0 rgba(255, 255, 255, 0.1)
                          `,
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <Icon 
                          className="w-8 h-8 mb-3"
                          style={{ color: "#D4AF37" }}
                        />
                        <p 
                          className="text-3xl mb-1"
                          style={{ 
                            fontWeight: 900,
                            color: "#FFD700",
                            textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                          }}
                        >
                          {achievement.value}
                        </p>
                        <p className="text-sm text-gray-400">{achievement.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Books Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, type: "spring" }}
            className="relative"
          >
            <h3 
              className="text-3xl text-center mb-8"
              style={{ 
                fontWeight: 700,
                color: "#FFD700",
                textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
              }}
            >
              Autor de 5 Libros Bestseller
            </h3>
            
            <div className="relative overflow-hidden py-8">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -1400],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {[...books, ...books].map((book, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-80 h-40 p-8 rounded-2xl backdrop-blur-md flex items-center justify-center text-center relative"
                    style={{
                      background: "linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                      border: "2px solid rgba(212, 175, 55, 0.4)",
                      boxShadow: `
                        0 15px 40px rgba(0, 0, 0, 0.8),
                        0 0 30px rgba(255, 215, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                      borderColor: "rgba(255, 215, 0, 0.7)",
                    }}
                  >
                    <div style={{ transform: "translateZ(20px)" }}>
                      <BookOpen 
                        className="w-10 h-10 mx-auto mb-3"
                        style={{ color: "#D4AF37" }}
                      />
                      <p 
                        className="text-white text-lg"
                        style={{ fontWeight: 600 }}
                      >
                        {book}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 3D ESIN System Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
            className="mt-20"
            style={{ perspective: "2000px" }}
          >
            <motion.div
              className="p-12 rounded-3xl backdrop-blur-md text-center relative"
              style={{
                background: "linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                border: "4px solid rgba(255, 215, 0, 0.5)",
                boxShadow: `
                  0 40px 100px rgba(0, 0, 0, 0.9),
                  0 0 80px rgba(255, 215, 0, 0.4),
                  inset 0 2px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -10px 40px rgba(0, 0, 0, 0.5)
                `,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: [0, 3, 0, -3, 0],
                rotateX: [0, -2, 0, 2, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <h3 
                className="text-5xl mb-6"
                style={{
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #FFD700 0%, #FFF4E6 50%, #FFD700 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                El Sistema ESIN
              </h3>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Un método revolucionario que combina <span style={{ color: "#D4AF37", fontWeight: 700 }}>estrategias bancarias</span>, 
                <span style={{ color: "#FFD700", fontWeight: 700 }}> optimización tributaria</span> y 
                <span style={{ color: "#DAA520", fontWeight: 700 }}> planificación financiera</span> para lograr resultados extraordinarios 
                en tiempo récord.
              </p>
              
              {/* 3D Depth Layer */}
              <div
                className="absolute inset-0 rounded-3xl -z-10"
                style={{
                  background: "rgba(255, 215, 0, 0.15)",
                  transform: "translateZ(-40px) scale(0.95)",
                  filter: "blur(40px)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
