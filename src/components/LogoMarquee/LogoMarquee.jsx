import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./LogoMarquee.css";

const logos = [
  { name: "Hotel Patagonia" },
  { name: "Resto Andino" },
  { name: "Spa Wellness" },
  { name: "Clínica Dental" },
  { name: "Estudio Legal" },
  { name: "Café Boutique" },
  { name: "Tienda Natural" },
  { name: "Eventos BRC" },
];

// Duplicamos la lista varias veces para asegurar un loop infinito perfecto en pantallas grandes
const marqueeList = [...logos, ...logos, ...logos, ...logos];

export function LogoMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="marquee-section">
      {/* Fondo con gradiente */}
      <div className="marquee-fondo-gradiente" />
      
      {/* Grid de fondo */}
      <div className="marquee-grid" />

      {/* Texto superior */}
      <div className="marquee-header">
        <p>Confiaron en nosotros</p>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="marquee-container">
        
        {/* Máscaras de desvanecimiento (Fade) a los costados */}
        <div className="marquee-fade fade-left" />
        <div className="marquee-fade fade-right" />

        {/* La pista que se mueve (Track) */}
        <div className="marquee-track">
          {marqueeList.map((logo, index) => (
            <div key={index} className="logo-item">
              <div className="logo-content">
                {/* Icono cuadrado con la inicial */}
                <div className="logo-icon">
                  <span>{logo.name[0]}</span>
                </div>
                {/* Nombre completo */}
                <span className="logo-text">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}