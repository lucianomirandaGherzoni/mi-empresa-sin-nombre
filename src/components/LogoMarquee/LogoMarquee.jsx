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

        {/* Máscaras de desvanecimiento (Fade) a los costados */}
        <div className="marquee-fade fade-left" />
        <div className="marquee-fade fade-right" />

        {/* La pista que se mueve (Track) — 4 repeticiones completas para loop infinito */}
        <div className="marquee-track">

          {/* — Repetición 1 — */}
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>H</span></div>
              <span className="logo-text">Hotel Patagonia</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>R</span></div>
              <span className="logo-text">Resto Andino</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>S</span></div>
              <span className="logo-text">Spa Wellness</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>C</span></div>
              <span className="logo-text">Clínica Dental</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>E</span></div>
              <span className="logo-text">Estudio Legal</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>C</span></div>
              <span className="logo-text">Café Boutique</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>T</span></div>
              <span className="logo-text">Tienda Natural</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>E</span></div>
              <span className="logo-text">Eventos BRC</span>
            </div>
          </div>

          {/* — Repetición 2 — */}
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>H</span></div>
              <span className="logo-text">Hotel Patagonia</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>R</span></div>
              <span className="logo-text">Resto Andino</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>S</span></div>
              <span className="logo-text">Spa Wellness</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>C</span></div>
              <span className="logo-text">Clínica Dental</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>E</span></div>
              <span className="logo-text">Estudio Legal</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>C</span></div>
              <span className="logo-text">Café Boutique</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>T</span></div>
              <span className="logo-text">Tienda Natural</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>E</span></div>
              <span className="logo-text">Eventos BRC</span>
            </div>
          </div>

          {/* — Repetición 3 — */}
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>H</span></div>
              <span className="logo-text">Hotel Patagonia</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>R</span></div>
              <span className="logo-text">Resto Andino</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>S</span></div>
              <span className="logo-text">Spa Wellness</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>C</span></div>
              <span className="logo-text">Clínica Dental</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>E</span></div>
              <span className="logo-text">Estudio Legal</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>C</span></div>
              <span className="logo-text">Café Boutique</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>T</span></div>
              <span className="logo-text">Tienda Natural</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>E</span></div>
              <span className="logo-text">Eventos BRC</span>
            </div>
          </div>

          {/* — Repetición 4 — */}
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>H</span></div>
              <span className="logo-text">Hotel Patagonia</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>R</span></div>
              <span className="logo-text">Resto Andino</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>S</span></div>
              <span className="logo-text">Spa Wellness</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>C</span></div>
              <span className="logo-text">Clínica Dental</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>E</span></div>
              <span className="logo-text">Estudio Legal</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>C</span></div>
              <span className="logo-text">Café Boutique</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>T</span></div>
              <span className="logo-text">Tienda Natural</span>
            </div>
          </div>
          <div className="logo-item">
            <div className="logo-content">
              <div className="logo-icon"><span>E</span></div>
              <span className="logo-text">Eventos BRC</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { LogoMarquee };