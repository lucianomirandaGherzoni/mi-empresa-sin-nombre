import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import "./LandingPages.css";

const preguntas = [
  {
    pregunta: "¿Qué necesito para empezar?",
    respuesta: "Con que tengas claro qué vendés y a quién le hablás, ya podemos comenzar. Nos sirve muchísimo si tenés logo, fotos y referencias de otras webs que te gusten, pero si no, también podemos ayudarte con eso. En una primera llamada ordenamos tu propuesta de valor y definimos juntos qué secciones debería tener tu landing.",
  },
  {
    pregunta: "¿Incluye el dominio y hosting?",
    respuesta: "Sí. Registramos tu dominio .com o .com.ar a tu nombre y configuramos un hosting de alta velocidad en un servidor optimizado para sitios modernos. Nos encargamos de certificados SSL, correos básicos y de toda la configuración técnica para que no tengas que preocuparte por nada.",
  },
  {
    pregunta: "¿Puedo editarla después?",
    respuesta: "Absolutamente. Podemos dejar todo listo para que puedas cambiar textos, imágenes y algunos bloques sin tocar código. Si más adelante necesitás cambios más profundos (nuevas secciones, tests A/B, integraciones extra), los presupuestamos como mejoras evolutivas para que tu landing crezca con tu negocio.",
  },
  {
    pregunta: "¿Cómo medimos si la landing funciona?",
    respuesta: "Instalamos Google Analytics 4 y los eventos de conversión que definamos juntos (envíos de formulario, clics a WhatsApp, compras, etc.). Después de la publicación, te mostramos un panel simple para que entiendas cuántas personas visitan tu sitio, desde dónde llegan y cuántas se convierten en clientes.",
  },
];

const PaginaLandingPages = () => {
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
              <h1 className="titulo-servicio">Tu negocio en internet</h1>
              <p className="descripcion-servicio">
                Llevamos tu marca al mundo digital con una página fácil de usar y pensada para dar resultados. Ideal para que tus clientes te encuentren rápido y confíen en lo que hacés.
              </p>
              <ul className="lista-detalles">
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Se ve perfecta en cualquier pantalla
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Velocidad de carga ultrarrápida
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Integración con Pixel de Facebook y Google Analytics
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  A un clic de tu WhatsApp
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Soporte técnico
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  100% segura — Certificado SSL de seguridad incluido
                </li>
              </ul>
              <div className="acciones-hero">
                <button className="boton-primario">Ver ejemplo</button>
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
                <img src="/assets/mockup-landing.png" alt="Mockup sitio web" className="mockup-hero" />
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
            <h2 className="titulo-seccion-principal">Elegí el plan que mejor <em className="resaltado-gris">se adapte</em> a tu necesidad</h2>
          </motion.div>
          <div className="grilla-planes">

            {/* — Plan Web Esencial — */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="tarjeta-plan"
            >
              <h3 className="nombre-plan">Web Esencial</h3>
              <p className="desc-plan">Landing pages y sitios web simples para presentar tu negocio y captar clientes.</p>
              <div className="precio-plan">
                <span className="desde-texto">desde</span>
                <span className="monto">$200 USD</span>
              </div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Landing page o sitio institucional de hasta 5 secciones</li>
                <li className="item-feature"><Check className="icono-check" />Diseño responsive (mobile + desktop)</li>
                <li className="item-feature"><Check className="icono-check" />Formulario de contacto y botón de WhatsApp</li>
                <li className="item-feature"><Check className="icono-check" />Optimización de velocidad y SEO</li>
                <li className="item-feature"><Check className="icono-check" />Entrega en 7 días hábiles</li>
              </ul>
              <button className="boton-plan gris">Consultar</button>
            </motion.div>

            {/* — Plan Web Dinámica (destacado) — */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="tarjeta-plan destacado"
            >
              <div className="etiqueta-recomendado">Más elegido</div>
              <h3 className="nombre-plan">Web Dinámica</h3>
              <p className="desc-plan">E-commerce, tiendas online o webs con blog y contenido que cambia seguido.</p>
              <div className="precio-plan">
                <span className="desde-texto">desde</span>
                <span className="monto">$350 USD</span>
              </div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />E-commerce completo o sitio web con blog</li>
                <li className="item-feature"><Check className="icono-check" />CMS para que vos mismo edites el contenido</li>
                <li className="item-feature"><Check className="icono-check" />Google Analytics 4 + seguimiento de objetivos</li>
                <li className="item-feature"><Check className="icono-check" />Carrito de compras y pasarela de pagos</li>
                <li className="item-feature"><Check className="icono-check" />Gestión de productos, categorías y stock</li>
                <li className="item-feature"><Check className="icono-check" />SEO técnico + sitemap automático</li>
                <li className="item-feature"><Check className="icono-check" />Soporte por 30 días post-entrega</li>
              </ul>
              <button className="boton-plan primario">Consultar</button>
            </motion.div>

            {/* — Plan A medida — */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="tarjeta-plan"
            >
              <h3 className="nombre-plan">Web Institucional</h3>
              <p className="desc-plan">Sitios con múltiples funcionalidades, áreas privadas, integraciones y escala real.</p>
              <div className="precio-plan">
                <span className="monto cotizar">A cotizar</span>
              </div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Arquitectura de múltiples páginas y secciones</li>
                <li className="item-feature"><Check className="icono-check" />CMS avanzado + roles y permisos de usuario</li>
                <li className="item-feature"><Check className="icono-check" />Google Analytics 4 + Tag Manager + eventos a medida</li>
                <li className="item-feature"><Check className="icono-check" />Integraciones con CRMs, ERP o APIs externas</li>
                <li className="item-feature"><Check className="icono-check" />Sistema de autenticación y área privada</li>
                <li className="item-feature"><Check className="icono-check" />Infraestructura escalable en la nube</li>
                <li className="item-feature"><Check className="icono-check" />Relevamiento, diseño UX y documentación incluidos</li>
              </ul>
              <button className="boton-plan gris">Pedir presupuesto</button>
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
            <h2 className="titulo-seccion-principal">Dudas comunes sobre <em className="resaltado-gris">este servicio</em></h2>
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
          <h2 className="titulo-seccion-principal cta-titulo">¿Tenés <em className="resaltado-gris">un proyecto</em> en mente?</h2>
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

export { PaginaLandingPages };
