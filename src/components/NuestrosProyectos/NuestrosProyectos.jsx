import React from "react";
import { Link } from "react-router-dom";
import "./NuestrosProyectos.css";

const proyectos = [
  {
    titulo: "Sitios Web",
    descripcion: "Landing pages orientadas a conversión.",
    ruta: "/landing-pages",
    imagen: "/assets/mockup-landing.png",
  },
  {
    titulo: "Invitaciones",
    descripcion: "Invitaciones digitales para eventos.",
    ruta: "/invitaciones",
    imagen: "/assets/mockup-invitaciones.png",
  },
  {
    titulo: "Turnos",
    descripcion: "Gestión de turnos online 24/7.",
    ruta: "/turnos",
    imagen: "/assets/mockup-turnos.png",
  },
  {
    titulo: "Cartas Digitales",
    descripcion: "Menú QR autogestionable para gastronomía.",
    ruta: "/cartas",
    imagen: "/assets/mockup-carta.png",
  },
  {
    titulo: "Desarrollo a Medida",
    descripcion: "Sistemas personalizados para tu operación.",
    ruta: "/desarrollo",
    imagen: "/assets/mockup-amedida.png",
  },
];

const filaSuperior = [...proyectos, ...proyectos];
const filaInferior = [...proyectos.slice().reverse(), ...proyectos.slice().reverse()];

const CardProyecto = ({ proyecto }) => (
  <Link
    to={proyecto.ruta}
    className="card-proyecto"
    style={{ backgroundImage: `url(${proyecto.imagen})` }}
    onClick={() => window.scrollTo(0, 0)}
  >
    <div className="overlay-proyecto" />
    <div className="contenido-proyecto">
      <span className="cta-proyecto">Ver proyecto</span>
    </div>
  </Link>
);

const NuestrosProyectos = () => {
  return (
    <section className="seccion-nuestros-proyectos" id="nuestros-proyectos">
      <div className="contenedor-nuestros-proyectos">
        <h2 className="titulo-nuestros-proyectos">Proyectos que hacen crecer marcas reales</h2>

        <div className="banner-proyectos">
          <div className="track-proyectos track-izquierda">
            {filaSuperior.map((proyecto, index) => (
              <CardProyecto key={`superior-${proyecto.titulo}-${index}`} proyecto={proyecto} />
            ))}
          </div>
        </div>

        <div className="banner-proyectos">
          <div className="track-proyectos track-derecha">
            {filaInferior.map((proyecto, index) => (
              <CardProyecto key={`inferior-${proyecto.titulo}-${index}`} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { NuestrosProyectos };
