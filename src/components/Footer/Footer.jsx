import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const linksSitio = [
  { label: "Inicio", href: "/" },
  { label: "Que hacemos", href: "/#que-hacemos" },
  { label: "Quienes somos", href: "/#quienes-somos" },
  { label: "Preguntas frecuentes", href: "/#faq" },
];

const linksServicios = [
  { label: "Sitios Web", href: "/landing-pages" },
  { label: "Invitaciones", href: "/invitaciones" },
  { label: "Turnos", href: "/turnos" },
  { label: "Cartas digitales", href: "/cartas" },
  { label: "Desarrollo a medida", href: "/desarrollo" },
];

const redesSociales = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Email", href: "mailto:hola@origendigital.com", icon: Mail },
  { label: "WhatsApp", href: "#", icon: Phone },
];

export function Footer() {
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
          start: isMobile ? "top 110%" : "top 95%",
          end: isMobile ? "top 5%" : "top 15%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Relleno blanco sube desde abajo
      tl.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: "none" }, 0);

      // 2. Textos principales: blanco -> negro
      tl.to(footer.querySelectorAll(".footer-animatable"), { color: "#111111", ease: "none" }, 0);

      // 3. Titulos de columna
      tl.to(footer.querySelectorAll(".footer-col-title"), { color: "rgba(0,0,0,0.4)", ease: "none" }, 0);

      // 4. Separador
      tl.to(footer.querySelector(".footer-divider"), { backgroundColor: "rgba(0,0,0,0.12)", ease: "none" }, 0);

      // 5. Copyright
      tl.to(footer.querySelectorAll(".footer-copy"), { color: "rgba(0,0,0,0.35)", ease: "none" }, 0);
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-root">
      {/* Relleno blanco que sube con el scroll */}
      <div ref={fillRef} className="footer-fill" />

      {/* Contenido */}
      <div className="footer-content">
        {/* Encabezado */}
        <div className="footer-header">
          <div className="footer-logo-wrap">
            <span className="footer-logo footer-animatable">Origen</span>
            <span className="footer-logo footer-logo-accent"> digital</span>
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
              {linksSitio.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="footer-link footer-animatable">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Servicios</h4>
            <ul className="footer-link-list">
              {linksServicios.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="footer-link footer-animatable">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contacto</h4>
            <div className="footer-contact-grid">
              <ul className="footer-link-list">
                {redesSociales.slice(0, 2).map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="footer-link footer-social footer-animatable"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="footer-link-list">
                {redesSociales.slice(2).map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="footer-link footer-social footer-animatable"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            {String.fromCharCode(169)} {new Date().getFullYear()} Origen Digital. Todos los derechos reservados.
          </p>
          <p className="footer-copy">Hecho con pasion en Argentina</p>
        </div>
      </div>
    </footer>
  );
}
