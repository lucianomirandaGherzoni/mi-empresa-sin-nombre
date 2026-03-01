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
            Un equipo con roles claros y un objetivo compartido
          </h2>
          <p className="descripcion-quienes-somos">
            Somos tres profesionales con perfiles complementarios: un desarrollador y diseñador 
            que construye cada proyecto desde cero, y dos especialistas comerciales que entienden 
            el mercado y conectan con cada cliente. Esa combinación es lo que nos permite ofrecer 
            soluciones que funcionan tanto técnicamente como comercialmente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid-quienes-somos"
        >
          <div className="tarjeta-quienes">
            <h3>Comunicación clara</h3>
            <p>
              Hablamos sin tecnicismos. En cada etapa del proyecto sabés qué se está haciendo, 
              por qué y cuánto cuesta. Sin sorpresas.
            </p>
          </div>
          <div className="tarjeta-quienes">
            <h3>Soluciones a medida</h3>
            <p>
              Cada negocio es distinto y lo tratamos como tal. Escuchamos, analizamos 
              y construimos una solución que responde a tus necesidades reales, no a una plantilla genérica.
            </p>
          </div>
          <div className="tarjeta-quienes">
            <h3>Presencia a largo plazo</h3>
            <p>
              El trabajo no termina con la entrega. Estamos disponibles para acompañarte, 
              proponer mejoras y asegurarnos de que tu presencia digital siga creciendo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

