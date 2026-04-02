import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './QuienesSomos.css';

gsap.registerPlugin(ScrollTrigger);

export function QuienesSomos() {
  const seccionRef = useRef(null);
  const estaEnVista = useInView(seccionRef, { once: true, margin: '-100px' });

  // Reveal con clip-path escalonado en las tarjetas
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tarjeta-quienes',
        { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 20 },
        {
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.grid-quienes-somos',
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, seccionRef);
    return () => ctx.revert();
  }, []);

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
          <h2 className="titulo-quienes-somos">
            Un equipo con un <em className="resaltado-gris">objetivo</em> compartido
          </h2>
          <p className="descripcion-quienes-somos">
            Somos tres profesionales con perfiles complementarios: desarrollo y diseño,
            estrategia comercial y relación con clientes. Juntos creamos soluciones digitales
            que funcionan en lo técnico y en lo comercial.
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
              Sabemos que el mundo digital puede ser confuso. Por eso te explicamos cada decisión en palabras simples.
            </p>
          </div>
          <div className="tarjeta-quienes">
            <h3>Soluciones a medida</h3>
            <p>
              Cada proyecto arranca desde cero. Escuchamos, analizamos y construimos lo que tu negocio realmente necesita.
            </p>
          </div>
          <div className="tarjeta-quienes">
            <h3>Presencia a largo plazo</h3>
            <p>
              El lanzamiento es el comienzo. Después seguimos activos para ajustar, mejorar y acompañarte mientras tu negocio crece.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

