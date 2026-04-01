import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Globe, Mail, CalendarClock, UtensilsCrossed, Code2 } from "lucide-react";
import "./BentoGrid.css";

const servicios = [
  {
    id: "01",
    icono: Globe,
    titulo: "Sitios Web",
    descripcion: "Presencia profesional que convierte visitas en clientes.",
    ruta: "/landing-pages",
  },
  {
    id: "02",
    icono: Mail,
    titulo: "Invitaciones",
    descripcion: "Eventos memorables para compartir y confirmar con facilidad.",
    ruta: "/invitaciones",
  },
  {
    id: "03",
    icono: CalendarClock,
    titulo: "Turnos",
    descripcion: "Agenda automática con recordatorios y disponibilidad clara.",
    ruta: "/turnos",
  },
  {
    id: "04",
    icono: UtensilsCrossed,
    titulo: "Menú QR",
    descripcion: "Carta digital actualizable al instante desde tu negocio.",
    ruta: "/cartas",
  },
  {
    id: "05",
    icono: Code2,
    titulo: "A Medida",
    descripcion: "Sistemas personalizados para procesos y operaciones complejas.",
    ruta: "/desarrollo",
  },
];

const BentoGrid = () => {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  const variantes = {
    oculto: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="que-hacemos" className="seccion-bento">
      <div className="bento-fondo-gradiente" />
      <div className="bento-grid-fondo" />
      <div className="contenedor-principal">
        <div className="cabecera-seccion">
          <h2 className="titulo-seccion-principal">
            Soluciones digitales <span className="titulo-bento-gris">que funcionan</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="oculto"
          animate={estaEnVista ? "visible" : "oculto"}
          transition={{ staggerChildren: 0.1 }}
          className="lista-procesos"
        >
          {servicios.map((servicio, index) => {
            return (
              <motion.div
                key={servicio.id}
                variants={variantes}
                className={`tarjeta-proceso ${index % 2 === 1 ? "alternada" : ""}`}
              >
                <Link
                  to={servicio.ruta}
                  className="enlace-proceso"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="icono-proceso" aria-hidden="true">
                    <servicio.icono width="100%" height="100%" strokeWidth={0.7} />
                  </div>

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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export { BentoGrid };