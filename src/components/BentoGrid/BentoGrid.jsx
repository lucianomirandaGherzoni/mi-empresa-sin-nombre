import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BentoGrid.css";

const servicios = [
  {
    id: "01",
    titulo: "Sitios Web",
    descripcion: "Presencia profesional que convierte visitas en clientes.",
    ruta: "/landing-pages",
  },
  {
    id: "02",
    titulo: "Invitaciones",
    descripcion: "Eventos memorables para compartir y confirmar con facilidad.",
    ruta: "/invitaciones",
  },
  {
    id: "03",
    titulo: "Turnos",
    descripcion: "Agenda automática con recordatorios y disponibilidad clara.",
    ruta: "/turnos",
  },
  {
    id: "04",
    titulo: "Menú QR",
    descripcion: "Carta digital actualizable al instante desde tu negocio.",
    ruta: "/cartas",
  },
  {
    id: "05",
    titulo: "A Medida",
    descripcion: "Sistemas personalizados para procesos y operaciones complejas.",
    ruta: "/desarrollo",
  },
];

const BentoGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray('.tarjeta-proceso');
    gsap.set(cards, { opacity: 0, y: 40 });
    cards.forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="que-hacemos" className="seccion-bento">
      <div className="bento-fondo-gradiente" />
      <div className="bento-grid-fondo" />
      <div className="contenedor-principal">
        <div className="cabecera-seccion">
          <h2 className="titulo-seccion-principal">
            Soluciones digitales que funcionan
          </h2>
        </div>

        <div ref={gridRef} className="lista-procesos">
          {servicios.map((servicio, index) => {
            return (
              <div
                key={servicio.id}
                className={`tarjeta-proceso ${index % 2 === 1 ? "alternada" : ""}`}
              >
                <Link
                  to={servicio.ruta}
                  className="enlace-proceso"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="numero-proceso" aria-hidden="true">{servicio.id}</div>

                  <div className="contenido-proceso">
                    <div className="fila-titulo-proceso">
                      <div className="titulo-icono-proceso">
                        <h3>{servicio.titulo}</h3>
                      </div>
                      <ArrowUpRight className="flecha-proceso" />
                    </div>
                    <p>{servicio.descripcion}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { BentoGrid };