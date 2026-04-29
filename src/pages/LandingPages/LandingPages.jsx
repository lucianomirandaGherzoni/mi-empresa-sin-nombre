import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus } from "lucide-react";
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
                Una página fácil de usar, pensada para dar resultados. Ideal para que tus clientes te encuentren rápido y confíen en lo que hacés.
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
            <h2 className="titulo-seccion-principal">Elegí el plan que mejor <em className="resaltado-gris">adapte</em> a tu necesidad</h2>
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
              <h3 className="nombre-plan">Landing Page</h3>
              <p className="desc-plan">Tu negocio en internet, Presencia online lista para captar clientes.


              </p>
              {/*           <div className="precio-plan">
                <span className="desde-texto">desde</span>
                <span className="monto">$200 USD</span>
              </div> */}
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Landing page con múltiples secciones </li>
                <li className="item-feature"><Check className="icono-check" />Diseño responsive mobile + desktop</li>
                <li className="item-feature"><Check className="icono-check" />Formulario de contacto + botón de WhatsApp</li>
                <li className="item-feature"><Check className="icono-check" />SEO básico + velocidad optimizada</li>
                <li className="item-feature"><Check className="icono-check" />Entrega en 7 días hábiles</li>
                <li className="item-feature"><Check className="icono-check" />Dominio + Hosting incluido por 1 año</li>
              </ul>
              <button className="boton-plan gris">Consultar presupuesto</button>
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
              <h3 className="nombre-plan">Tienda Online</h3>
              <p className="desc-plan">Vendé las 24hs, desde cualquier lugar. Tu tienda online, sin complicaciones.

              </p>
              {/*         <div className="precio-plan">
                <span className="desde-texto">desde</span>
                <span className="monto">$350 USD</span>
              </div> */}
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Tienda online completa con catálogo de productos</li>
                <li className="item-feature"><Check className="icono-check" />CMS para que vos mismo edites el contenido</li>
                <li className="item-feature"><Check className="icono-check" />Google Analytics 4 + Meta Pixel integrado</li>
                <li className="item-feature"><Check className="icono-check" />Carrito de compras + medios de pago integrados</li>
                <li className="item-feature"><Check className="icono-check" />Gestión de productos, categorías y stock</li>
                <li className="item-feature"><Check className="icono-check" />SEO técnico configurado para aparecer en Google</li>
                <li className="item-feature"><Check className="icono-check" />Soporte técnico por 30 días post-entrega</li>
              </ul>
              <button className="boton-plan primario">Consultar presupuesto</button>
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
              <p className="desc-plan">Una web a la altura de tu empresa. Escalable, integrada y hecha para crecer.

              </p>
              {/*        <div className="precio-plan">
                <span className="monto cotizar">A cotizar</span>
              </div> */}
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Sitio multipágina con estructura profesional</li>
                <li className="item-feature"><Check className="icono-check" />CMS avanzado + roles y permisos por usuario</li>
                <li className="item-feature"><Check className="icono-check" />Google Analytics 4 + Meta Pixelo</li>
                <li className="item-feature"><Check className="icono-check" />Integraciones con APIs externas</li>
                <li className="item-feature"><Check className="icono-check" />Área privada con sistema de autenticación</li>
                <li className="item-feature"><Check className="icono-check" />Infraestructura escalable lista para crecer</li>
                <li className="item-feature"><Check className="icono-check" />Relevamiento + diseño UX + documentación incluida</li>
              </ul>
              <button className="boton-plan gris">Consultar presupuesto</button>
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
          <div className="encabezado-centro" style={{ marginBottom: "2rem" }}>
            <h2 className="titulo-seccion-principal">Tu web, siempre <em className="resaltado-gris">activa y en orden</em></h2>
            <p className="descripcion-cta" style={{ marginBottom: 0 }}>Un servicio mensual para que no tengas que preocuparte por nada técnico.</p>
          </div>

          {/* MANTENIMIENTO */}
          <div className="tarjeta-mantenimiento">
            <div className="mantenimiento-encabezado">
              <span className="mantenimiento-badge">Servicio adicional</span>
              <h3 className="mantenimiento-titulo">Plan de Mantenimiento Web</h3>
              <p className="mantenimiento-subtitulo">Tu web siempre activa, sin preocupaciones.</p>
            </div>
            <ul className="mantenimiento-items">
              <li className="mantenimiento-item"><Check className="icono-check" />Actualizaciones de contenido</li>
              <li className="mantenimiento-item"><Check className="icono-check" />Monitoreo de rendimiento</li>
              <li className="mantenimiento-item"><Check className="icono-check" />Soporte técnico mensual</li>
              <li className="mantenimiento-item"><Check className="icono-check" />Backups periódicos</li>
            </ul>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export { PaginaLandingPages };
