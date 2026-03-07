import React, { useRef } from "react";
import { useInView } from "framer-motion";
import "./LogoMarquee.css";

const LogoMarquee = () => {
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

        {/* Mascaras de desvanecimiento (Fade) a los costados */}
        <div className="marquee-fade fade-left" />
        <div className="marquee-fade fade-right" />

        {/* La pista que se mueve (Track) - 4 repeticiones completas para loop infinito */}
        <div className="marquee-track">

          {/* Repeticion 1 */}
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>C</span></div><span className="logo-text">Cliclic</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>D</span></div><span className="logo-text">Del Este Duplex</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>K</span></div><span className="logo-text">Kaimiloa</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>B</span></div><span className="logo-text">Berlini</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>T</span></div><span className="logo-text">Lic. Tamara Diaz</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>B</span></div><span className="logo-text">BrCar</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>E</span></div><span className="logo-text">Eleve Barberia</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>N</span></div><span className="logo-text">Neloworks</span></div></div>

          {/* Repeticion 2 */}
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>C</span></div><span className="logo-text">Cliclic</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>D</span></div><span className="logo-text">Del Este Duplex</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>K</span></div><span className="logo-text">Kaimiloa</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>B</span></div><span className="logo-text">Berlini</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>T</span></div><span className="logo-text">Lic. Tamara Diaz</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>B</span></div><span className="logo-text">BrCar</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>E</span></div><span className="logo-text">Eleve Barberia</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>N</span></div><span className="logo-text">Neloworks</span></div></div>

          {/* Repeticion 3 */}
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>C</span></div><span className="logo-text">Cliclic</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>D</span></div><span className="logo-text">Del Este Duplex</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>K</span></div><span className="logo-text">Kaimiloa</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>B</span></div><span className="logo-text">Berlini</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>T</span></div><span className="logo-text">Lic. Tamara Diaz</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>B</span></div><span className="logo-text">BrCar</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>E</span></div><span className="logo-text">Eleve Barberia</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>N</span></div><span className="logo-text">Neloworks</span></div></div>

          {/* Repeticion 4 */}
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>C</span></div><span className="logo-text">Cliclic</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>D</span></div><span className="logo-text">Del Este Duplex</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>K</span></div><span className="logo-text">Kaimiloa</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>B</span></div><span className="logo-text">Berlini</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>T</span></div><span className="logo-text">Lic. Tamara Diaz</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>B</span></div><span className="logo-text">BrCar</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>E</span></div><span className="logo-text">Eleve Barberia</span></div></div>
          <div className="logo-item"><div className="logo-content"><div className="logo-icon"><span>N</span></div><span className="logo-text">Neloworks</span></div></div>

        </div>
      </div>
    </section>
  );
};

export { LogoMarquee };
