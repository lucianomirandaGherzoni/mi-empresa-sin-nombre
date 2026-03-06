import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import "./Desarrollo.css";

const preguntas = [
  {
    pregunta: "¿Cómo es el proceso de trabajo?",
    respuesta: "Arrancamos con una etapa de discovery donde entendemos tu negocio, procesos y restricciones técnicas. A partir de ahí armamos un backlog priorizado y trabajamos en sprints cortos (generalmente de 2 semanas) con entregables visibles. En cada iteración revisamos juntos el avance, ajustamos prioridades y definimos los próximos pasos para que el producto crezca de forma controlada.",
  },
  {
    pregunta: "¿Qué tecnologías utilizan?",
    respuesta: "Nuestro stack principal incluye React/Next.js en frontend y Node.js o .NET en backend, con bases de datos relacionales (PostgreSQL, SQL Server) y no relacionales (MongoDB, entre otras) según la necesidad. También trabajamos con infraestructura en la nube (AWS, Azure, Render, Vercel) y buenas prácticas de seguridad, logs y monitoreo para que tu sistema sea mantenible en el tiempo.",
  },
  {
    pregunta: "¿Pueden integrar sistemas que ya tengo?",
    respuesta: "Sí. Analizamos las APIs o formas de exportar datos de las herramientas que usás actualmente (ERPs, CRMs, pasarelas de pago, etc.) y diseñamos integraciones a medida. Nuestro objetivo es que no tengas que duplicar información y que el nuevo software se convierta en una capa que ordene y conecte lo que ya existe.",
  },
];

const PaginaDesarrollo = () => {
  const [indiceFaq, setIndiceFaq] = useState(null);

  return (
    <main className="pagina-servicio">

      {/* HERO */}
      <section className="seccion-hero-servicio">
        <div className="hero-servicio-fondo" />
        <div className="hero-servicio-grid" />
        <div className="contenedor-limitado">
          <div className="grilla-hero">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="columna-info"
            >
              <p className="etiqueta-seccion subtitulo-servicio">Software que escala con vos</p>
              <h1 className="titulo-servicio">Sistemas hechos para tu negocio</h1>
              <p className="descripcion-servicio">
                Cuando ninguna herramienta hace exactamente lo que necesitás, la construimos nosotros. CRMs, plataformas, APIs y apps pensadas para los procesos únicos de tu empresa.
              </p>
              <ul className="lista-detalles">
                <li className="item-detalle">
                  <Check className="icono-check" />
                  CRMs y ERPs diseñados para tu operación
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Infraestructura en la nube (AWS / Azure)
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  APIs REST y GraphQL robustas
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Dashboards con datos en tiempo real
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Apps móviles nativas o PWA
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Automatización de tareas repetitivas
                </li>
              </ul>
              <div className="acciones-hero">
                <button className="boton-primario efecto-shimmer">Solicitar Cotización</button>
                <button className="boton-secundario">Contactar por WhatsApp</button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="columna-visual"
            >
              <div className="envoltorio-maqueta">
                <img src="/assets/mockup-amedida.png" alt="Mockup desarrollo" className="mockup-hero" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="seccion-precios-servicio">
        <div className="contenedor-precios">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="encabezado-centro"
          >
            <p className="etiqueta-seccion">Planes y precios</p>
            <h2 className="titulo-seccion-principal">Elegí el plan que mejor se adapte a tu necesidad</h2>
          </motion.div>
          <div className="grilla-planes">

            {/* — Plan MVP Startup — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }} className="tarjeta-plan">
              <h3 className="nombre-plan">MVP Startup</h3>
              <p className="desc-plan">Lanzamiento de Producto</p>
              <div className="precio-plan"><span className="monto">Cotizar</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Alcance definido</li>
                <li className="item-feature"><Check className="icono-check" />Tecnologías Ágiles</li>
                <li className="item-feature"><Check className="icono-check" />Entrega en Sprints</li>
                <li className="item-feature"><Check className="icono-check" />Código propiedad del cliente</li>
              </ul>
              <button className="boton-plan gris">Consultar</button>
            </motion.div>

            {/* — Plan Producto Escalable — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="tarjeta-plan">
              <h3 className="nombre-plan">Producto Escalable</h3>
              <p className="desc-plan">Cuando el producto ya tracciona y hay que escalar.</p>
              <div className="precio-plan"><span className="monto">Cotizar</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Revisión de arquitectura actual</li>
                <li className="item-feature"><Check className="icono-check" />Refactorizaciones y modularización</li>
                <li className="item-feature"><Check className="icono-check" />Automatización de procesos manuales</li>
                <li className="item-feature"><Check className="icono-check" />Monitoreo y logging configurados</li>
              </ul>
              <button className="boton-plan gris">Consultar</button>
            </motion.div>

            {/* — Plan Enterprise (destacado) — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="tarjeta-plan destacado">
              <div className="etiqueta-recomendado">Recomendado</div>
              <h3 className="nombre-plan">Enterprise</h3>
              <p className="desc-plan">Sistemas de Alta Escala</p>
              <div className="precio-plan"><span className="monto">Cotizar</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Microservicios</li>
                <li className="item-feature"><Check className="icono-check" />Alta Disponibilidad (99.9%)</li>
                <li className="item-feature"><Check className="icono-check" />Auditoría de Seguridad</li>
                <li className="item-feature"><Check className="icono-check" />Soporte SLA 24/7</li>
              </ul>
              <button className="boton-plan primario">Consultar</button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="seccion-faq-servicio">
        <div className="contenedor-faq">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="encabezado-centro"
          >
            <p className="etiqueta-seccion">Preguntas frecuentes</p>
            <h2 className="titulo-seccion-principal">Dudas comunes sobre este servicio</h2>
          </motion.div>
          <div className="lista-acordeon">
            {preguntas.map((faq, i) => (
              <div key={i} className="item-acordeon">
                <button onClick={() => setIndiceFaq(indiceFaq === i ? null : i)} className="boton-pregunta">
                  <span className="texto-pregunta">{faq.pregunta}</span>
                  <div className="icono-toggle">{indiceFaq === i ? <Minus size={16} /> : <Plus size={16} />}</div>
                </button>
                <AnimatePresence>
                  {indiceFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="contenedor-respuesta">
                      <p className="texto-respuesta">{faq.respuesta}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="seccion-cta-servicio">
        <div className="cta-fondo-gradiente" />
        <div className="cta-grid-fondo" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contenedor-cta"
        >
          <p className="etiqueta-seccion etiqueta-cta">Próximo paso</p>
          <h2 className="titulo-seccion-principal cta-titulo">¿Tenés un proyecto en mente?</h2>
          <p className="descripcion-cta">
            Contanos tu idea, el estado actual de tu negocio y qué querés lograr en los próximos meses. Con esa información armamos una propuesta sin compromiso, con pasos claros, tiempos estimados y rangos de inversión adaptados a tu realidad.
          </p>
          <div className="acciones-cta">
            <button className="boton-primario efecto-shimmer grande">Agendar Consulta Gratis</button>
            <Link to="/" className="link-volver">Volver al inicio</Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export { PaginaDesarrollo };
