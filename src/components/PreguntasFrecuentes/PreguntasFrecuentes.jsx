import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "./PreguntasFrecuentes.css";

const ItemDePregunta = ({ pregunta, respuesta, estaAbierto, alAlternar }) => {
  return (
    <div className="contenedor-item-faq">
      <button onClick={alAlternar} className="boton-desplegable-faq">
        <span className="texto-pregunta-faq">{pregunta}</span>
        <div className="circulo-icono-faq">
          {estaAbierto ? (
            <Minus className="icono-faq-verde" />
          ) : (
            <Plus className="icono-faq-gris" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {estaAbierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="zona-respuesta-animada"
          >
            <p className="parrafo-respuesta-faq">{respuesta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const listaDePreguntas = [
  {
    pregunta: "¿Cuánto tiempo tarda un proyecto?",
    respuesta: "Depende del servicio. Una landing page puede estar lista en 5-7 dias habiles. Invitaciones digitales en 3-5 dias. Sistemas como gestion de turnos o cartas digitales entre 2-4 semanas. Para desarrollo a medida, armamos un cronograma personalizado segun la complejidad.",
  },
  {
    pregunta: "¿Ofrecen mantenimiento después de la entrega?",
    respuesta: "Si. Todos nuestros planes incluyen un periodo de soporte post-entrega que varia segun el servicio. Ademas ofrecemos planes de mantenimiento mensual para actualizaciones, backups y soporte tecnico continuo.",
  },
  {
    pregunta: "¿Puedo ver avances del proyecto mientras se desarrolla?",
    respuesta: "Por supuesto. Trabajamos con metodologias agiles y compartimos avances semanales. Vas a poder ver el progreso en tiempo real y dar feedback en cada etapa para asegurarnos de que el resultado sea exactamente lo que necesitas.",
  },
  {
    pregunta: "¿Qué tecnologías utilizan?",
    respuesta: "Trabajamos con las tecnologias mas modernas del mercado: React, Next.js, Node.js, TypeScript, PostgreSQL, entre otras. Elegimos la mejor herramienta segun las necesidades de cada proyecto para garantizar rendimiento, seguridad y escalabilidad.",
  },
  {
    pregunta: "¿Trabajan solo con clientes de Bariloche?",
    respuesta: "No. Si bien estamos basados en Bariloche, trabajamos con clientes de toda Argentina y el exterior. Las reuniones las hacemos por videollamada y toda la comunicacion es online, lo que nos permite atender proyectos de cualquier ubicacion.",
  },
  {
    pregunta: "¿Cómo es el proceso de pago?",
    respuesta: "Generalmente trabajamos con un esquema de 50% al inicio del proyecto y 50% contra entrega. Para proyectos mas grandes, podemos acordar pagos en etapas. Aceptamos transferencia bancaria, Mercado Pago y cripto.",
  },
];

const FAQ = () => {
  const seccionRef = useRef(null);
  const estaEnVista = useInView(seccionRef, { once: true, margin: "-100px" });
  const [indiceAbierto, setIndiceAbierto] = useState(0);

  return (
    <section id="faq" className="seccion-preguntas-frecuentes" ref={seccionRef}>
      <div className="contenedor-faq-profesional">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="cabecera-faq-estilo"
        >
          <h2 className="titulo-seccion-faq">
            Respuestas a las dudas más comunes sobre nuestros servicios
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lista-desplegable-faq"
        >
          {listaDePreguntas.map((item, i) => (
            <ItemDePregunta
              key={i}
              pregunta={item.pregunta}
              respuesta={item.respuesta}
              estaAbierto={indiceAbierto === i}
              alAlternar={() => setIndiceAbierto(indiceAbierto === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { FAQ };