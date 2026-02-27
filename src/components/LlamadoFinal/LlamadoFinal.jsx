import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./LlamadoFinal.css";

export function LlamadoFinal() {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="seccion-llamado fondo-radial">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="contenedor-llamado"
      >
        <p className="etiqueta-seccion etiqueta-llamado">Próximo paso</p>
        <h2 className="titulo-llamado">
          ¿Listo para digitalizar tu negocio?
        </h2>
        <p className="descripcion-llamado">
          Transformemos tu idea en realidad. Agenda una consulta gratuita y descubre cómo podemos ayudarte.
        </p>

        <div className="grupo-botones-llamado">
          <button className="boton-llamado primario efecto-brillo">
            Agendar Consulta Gratis
            <ArrowRight className="icono-flecha" />
          </button>
          
          <button className="boton-llamado secundario">
            Contactar por WhatsApp
          </button>
        </div>

        <p className="nota-pie">
          Atendemos clientes en Bariloche, Patagonia y toda Argentina. Primera consulta sin cargo.
        </p>
      </motion.div>
    </section>
  );
}