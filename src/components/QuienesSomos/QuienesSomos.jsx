import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './QuienesSomos.css';

export function QuienesSomos() {
  const seccionRef = useRef(null);
  const estaEnVista = useInView(seccionRef, { once: true, margin: '-100px' });

  return (
    <section id="quienes-somos" className="seccion-quienes-somos" ref={seccionRef}>
      <div className="quienes-fondo-gradiente" />
      <div className="quienes-grid-fondo" />
      <div className="contenedor-quienes-somos">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="cabecera-quienes-somos"
        >
          <p className="etiqueta-seccion">Quiénes somos</p>
          <h2 className="titulo-quienes-somos">
            Un equipo de desarrollo centrado en el negocio, no solo en el código
          </h2>
          <p className="descripcion-quienes-somos">
            Somos un estudio digital de Bariloche que combina diseño, estrategia y tecnología 
            para acompañar a emprendedores y empresas de la región. Nos enfocamos en crear 
            soluciones que generen ventas reales, ahorren tiempo y eleven la experiencia de tus clientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid-quienes-somos"
        >
          <div className="tarjeta-quienes">
            <h3>Enfoque humano</h3>
            <p>
              Hablamos en claro, sin tecnicismos innecesarios. Te acompañamos en cada etapa del proyecto 
              para que entiendas qué hacemos y por qué lo hacemos.
            </p>
          </div>
          <div className="tarjeta-quienes">
            <h3>Experiencia en negocios reales</h3>
            <p>
              Venimos trabajando con comercios, profesionales y pymes que necesitan vender más y organizarse mejor, 
              no solo “tener una web”.
            </p>
          </div>
          <div className="tarjeta-quienes">
            <h3>Acompañamiento continuo</h3>
            <p>
              No entregamos y desaparecemos. Te ofrecemos soporte, mejoras evolutivas y nuevas ideas 
              para que tu presencia digital crezca con tu negocio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

