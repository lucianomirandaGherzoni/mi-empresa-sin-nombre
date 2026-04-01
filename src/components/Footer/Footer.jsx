import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const fillRef = useRef(null);
  const location = useLocation();

  // Refrescar ScrollTrigger al cambiar de ruta (la altura de la página cambia)
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => clearTimeout(id);
  }, [location.pathname]);

  useEffect(() => {
    const footer = footerRef.current;
    const fill = fillRef.current;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: isMobile ? "top 100%" : "top 100%",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Relleno blanco sube desde abajo
      tl.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: "none" }, 0);

      // 2. Textos principales: blanco -> negro
      tl.fromTo(
        ".footer-animatable",
        { color: "rgba(255,255,255,0.75)" },
        { color: "#111111", ease: "none" },
        0
      );

      // 3. Titulos de columna
      tl.fromTo(
        ".footer-col-title",
        { color: "rgba(255,255,255,0.35)" },
        { color: "rgba(0,0,0,0.4)", ease: "none" },
        0
      );

      // 4. Separador
      tl.fromTo(
        ".footer-divider",
        { backgroundColor: "rgba(255,255,255,0.1)" },
        { backgroundColor: "rgba(0,0,0,0.12)", ease: "none" },
        0
      );

      // 5. Copyright
      tl.fromTo(
        ".footer-copy",
        { color: "rgba(255,255,255,0.3)" },
        { color: "rgba(0,0,0,0.35)", ease: "none" },
        0
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-root">
      {/* Relleno blanco que sube con el scroll */}
      <div ref={fillRef} className="footer-fill" />
      <div className="footer-grid-fondo" />

      {/* Contenido */}
      <div className="footer-content">
        {/* Encabezado */}
        <div className="footer-header">
          <div className="footer-logo-wrap">
            <span className="footer-logo footer-animatable">SUR</span>
            <span className="footer-logo footer-logo-accent">WEB</span>
          </div>
          <p className="footer-tagline footer-animatable">
            Creamos presencia digital que conecta, convierte y crece.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Sitio</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/" className="footer-link footer-animatable">Inicio</Link>
              </li>
              <li>
                <Link to="/#que-hacemos" className="footer-link footer-animatable">Que hacemos</Link>
              </li>
              <li>
                <Link to="/#quienes-somos" className="footer-link footer-animatable">Quienes somos</Link>
              </li>
              <li>
                <Link to="/#faq" className="footer-link footer-animatable">Preguntas frecuentes</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Servicios</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/landing-pages" className="footer-link footer-animatable">Sitios Web</Link>
              </li>
              <li>
                <Link to="/invitaciones" className="footer-link footer-animatable">Invitaciones</Link>
              </li>
              <li>
                <Link to="/turnos" className="footer-link footer-animatable">Turnos</Link>
              </li>
              <li>
                <Link to="/cartas" className="footer-link footer-animatable">Cartas digitales</Link>
              </li>
              <li>
                <Link to="/desarrollo" className="footer-link footer-animatable">Desarrollo a medida</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contacto</h4>
            <div className="footer-contact-grid">
              <ul className="footer-link-list">
                <li>
                  <a href="#" className="footer-link footer-social footer-animatable" target="_blank" rel="noopener noreferrer">
                    <Instagram size={14} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link footer-social footer-animatable" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </li>
              </ul>
              <ul className="footer-link-list">
                <li>
                  <a href="mailto:hola@origendigital.com" className="footer-link footer-social footer-animatable" target="_blank" rel="noopener noreferrer">
                    <Mail size={14} />
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link footer-social footer-animatable" target="_blank" rel="noopener noreferrer">
                    <Phone size={14} />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            {String.fromCharCode(169)} {new Date().getFullYear()} SURWEB. Todos los derechos reservados.
          </p>
          <p className="footer-copy">Hecho con pasion en Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
