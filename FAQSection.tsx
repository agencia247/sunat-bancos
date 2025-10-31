import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Necesito experiencia previa en finanzas?",
    answer: "No, absolutamente no. El Sistema ESIN está diseñado para personas sin experiencia financiera previa. Luis te guiará paso a paso desde cero, explicando cada concepto de manera clara y práctica."
  },
  {
    question: "¿Es legal trabajar con SUNAT de esta manera?",
    answer: "Sí, 100% legal. Todas las estrategias que enseñamos están completamente dentro del marco legal peruano. Luis Lamas es un experto reconocido que trabaja directamente con instituciones financieras y conoce perfectamente la legislación."
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "La mayoría de nuestros alumnos ven sus primeros resultados dentro de las primeras 2-4 semanas. Sin embargo, el tiempo exacto depende de tu dedicación y aplicación del sistema. Algunos han logrado $100,000 en menos de 30 días."
  },
  {
    question: "¿La clase es en vivo o grabada?",
    answer: "La clase principal es EN VIVO el 15 de noviembre a las 19:00 PM vía Zoom, donde podrás hacer preguntas directamente a Luis. Además, recibirás la grabación completa, el video curso, herramientas y acceso a soporte por 3 meses."
  },
  {
    question: "¿Qué pasa si no puedo asistir en vivo?",
    answer: "No te preocupes. Recibirás la grabación completa de la clase más el video curso detallado. Podrás ver todo el contenido a tu ritmo y contarás con soporte por WhatsApp durante 3 meses."
  },
  {
    question: "¿Funciona si vivo fuera de Lima?",
    answer: "Sí, perfectamente. El sistema funciona en todo Perú porque trabaja con SUNAT y bancos que operan a nivel nacional. Todo es 100% online, así que puedes implementarlo desde cualquier ciudad."
  },
  {
    question: "¿Necesito tener una empresa constituida?",
    answer: "No necesariamente. Durante la capacitación, Luis te enseñará exactamente cómo constituir tu empresa de la manera más eficiente, o cómo trabajar con tu situación actual para maximizar beneficios."
  },
  {
    question: "¿Qué pasa después de comprar?",
    answer: "Inmediatamente después de registrarte recibirás: 1) Link de la clase en vivo por Zoom, 2) Acceso al grupo privado de WhatsApp, 3) Materiales preparatorios, 4) Acceso a la plataforma de video curso completo. Todo en menos de 5 minutos."
  },
  {
    question: "¿Por qué el precio es tan bajo si vale $1,560?",
    answer: "Es una promoción exclusiva solo para las primeras 100 personas. Luis quiere ayudar al máximo de peruanos posible, por eso ofrece este descuento temporal. Una vez se llenen los 100 cupos, el precio vuelve a $1,560."
  },
  {
    question: "¿Qué incluye la garantía de devolución?",
    answer: "Si en 30 días implementas el sistema y no ves resultados, te devolvemos el 100% de tu dinero sin hacer preguntas. El riesgo es completamente nuestro."
  }
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Subtle 3D Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.2) 2px, transparent 2px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Premium 3D Title */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
            style={{ perspective: "1500px" }}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-8"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <HelpCircle 
                className="w-14 h-14"
                style={{ color: "#D4AF37" }}
              />
            </motion.div>
            
            <h2 
              className="text-5xl md:text-6xl mb-6"
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
              PREGUNTAS FRECUENTES
            </h2>
            <p className="text-2xl text-gray-400">
              Despeja todas tus dudas antes de comenzar
            </p>
          </motion.div>

          {/* 3D FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, rotateY: -10 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6, type: "spring" }}
                  style={{ perspective: "1000px" }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border-0 rounded-2xl overflow-hidden backdrop-blur-md px-8 group"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(40, 40, 40, 0.9) 100%)",
                      border: "2px solid rgba(212, 175, 55, 0.3)",
                      boxShadow: `
                        0 10px 30px rgba(0, 0, 0, 0.8),
                        0 0 20px rgba(255, 215, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                    }}
                  >
                    <AccordionTrigger 
                      className="text-left hover:no-underline py-8 group/trigger"
                    >
                      <div className="flex items-start gap-5 w-full">
                        <motion.div
                          className="mt-1 flex-shrink-0"
                          whileHover={{ 
                            rotateY: 360,
                            scale: 1.2,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{
                              background: "radial-gradient(circle at 30% 30%, #FFD700, #DAA520)",
                              boxShadow: `
                                0 0 20px rgba(255, 215, 0, 0.6),
                                inset -3px -3px 10px rgba(0, 0, 0, 0.3),
                                inset 3px 3px 10px rgba(255, 255, 255, 0.3)
                              `,
                            }}
                          >
                            <span className="text-black text-xl" style={{ fontWeight: 900 }}>?</span>
                          </div>
                        </motion.div>
                        <span 
                          className="text-xl group-hover/trigger:text-yellow-300 transition-colors pr-6"
                          style={{ 
                            fontWeight: 700,
                            color: "#D4AF37",
                          }}
                        >
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-lg leading-relaxed pb-8 pl-20">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* 3D Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
            className="text-center mt-20"
            style={{ perspective: "1500px" }}
          >
            <motion.div 
              className="p-12 rounded-3xl backdrop-blur-md relative"
              style={{
                background: "linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)",
                border: "3px solid rgba(255, 215, 0, 0.5)",
                boxShadow: `
                  0 30px 80px rgba(0, 0, 0, 0.9),
                  0 0 60px rgba(255, 215, 0, 0.3),
                  inset 0 2px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -10px 40px rgba(0, 0, 0, 0.5)
                `,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: [0, 3, 0, -3, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <p 
                className="text-3xl mb-6"
                style={{
                  fontWeight: 900,
                  color: "#FFD700",
                  textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                }}
              >
                ¿Tienes más preguntas?
              </p>
              <p className="text-gray-300 text-xl mb-8">
                Escríbenos directamente por WhatsApp y te responderemos en minutos
              </p>
              
              <motion.a
                href="https://wa.me/51999999999?text=Tengo%20una%20pregunta%20sobre%20el%20evento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full shadow-2xl transition-all"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #25D366, #128C7E)",
                  color: "white",
                  fontWeight: 800,
                  border: "3px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: `
                    0 15px 40px rgba(37, 211, 102, 0.6),
                    inset -4px -4px 15px rgba(0, 0, 0, 0.3),
                    inset 4px 4px 15px rgba(255, 255, 255, 0.2)
                  `,
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-xl">Contactar por WhatsApp</span>
              </motion.a>

              {/* 3D Depth Layer */}
              <div
                className="absolute inset-0 rounded-3xl -z-10"
                style={{
                  background: "rgba(255, 215, 0, 0.1)",
                  transform: "translateZ(-30px) scale(0.95)",
                  filter: "blur(30px)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
