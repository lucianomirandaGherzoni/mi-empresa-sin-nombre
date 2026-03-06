import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import "./Cartas.css";

const preguntas = [
  {
    pregunta: "¿Necesito una app para usarlo?",
    respuesta: "No. Es una Web App que funciona directamente en el navegador del celular. Tus clientes solo escanean el código QR con la cámara y el menú se abre al instante, sin descargas ni registros. Funciona tanto en Android como en iOS.",
  },
  {
    pregunta: "¿Es difícil cambiar los precios o platos?",
    respuesta: "Es tan simple como editar un mensaje: entrás al panel, buscás el producto y actualizás el precio o el nombre. Podés activar o desactivar platos sin borrarlos, ideal para manejar productos fuera de stock o cambios de temporada.",
  },
  {
    pregunta: "¿Se puede usar en más de una sucursal?",
    respuesta: "Sí. Podés tener una carta diferente por sucursal o compartir la misma en todas, según lo que más te convenga. En los planes avanzados, además, tenés reportes consolidados para ver qué se vende mejor en cada local.",
  },
];

const PaginaCartas = () => {
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
              <p className="etiqueta-seccion subtitulo-servicio">Adiós al menú plastificado</p>
              <h1 className="titulo-servicio">Tu carta siempre actualizada</h1>
              <p className="descripcion-servicio">
                Tus clientes escanean el QR y ven el menú en segundos. Vos actualizás precios al instante desde el celular y nadie ve información desactualizada nunca más.
              </p>
              <ul className="lista-detalles">
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Acceso inmediato desde el QR de la mesa
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Fotos HD que hacen querer pedir
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Filtrá por vegano, sin TACC y más
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Cambiá precios al instante desde el celular
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Ocultá platos sin stock en un clic
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Disponible en español, inglés y portugués
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
                <img src="/assets/mockup-carta.png" alt="Mockup carta digital" className="mockup-hero" />
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

            {/* — Plan Visual QR — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }} className="tarjeta-plan">
              <h3 className="nombre-plan">Visual QR</h3>
              <p className="desc-plan">Versión ideal para reemplazar las cartas impresas tradicionales.</p>
              <div className="precio-plan"><span className="monto">$55k</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Diseño responsivo para celulares</li>
                <li className="item-feature"><Check className="icono-check" />Panel autogestionable para cambiar precios</li>
                <li className="item-feature"><Check className="icono-check" />Generación de códigos QR ilimitados</li>
                <li className="item-feature"><Check className="icono-check" />Categorías y platos ilimitados</li>
                <li className="item-feature"><Check className="icono-check" />Soporte técnico básico</li>
              </ul>
              <button className="boton-plan gris">Consultar</button>
            </motion.div>

            {/* — Plan Full Orders (destacado) — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="tarjeta-plan destacado">
              <div className="etiqueta-recomendado">Recomendado</div>
              <h3 className="nombre-plan">Full Orders</h3>
              <p className="desc-plan">Pensado para locales con alto volumen de pedidos.</p>
              <div className="precio-plan"><span className="monto">$120k</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Carrito de compras y armado de pedido</li>
                <li className="item-feature"><Check className="icono-check" />Pedidos directos a WhatsApp o impresora</li>
                <li className="item-feature"><Check className="icono-check" />Opciones y adicionales por producto</li>
                <li className="item-feature"><Check className="icono-check" />Impresión de comandas en cocina/barra</li>
                <li className="item-feature"><Check className="icono-check" />Dashboard simple de ventas por día y producto</li>
              </ul>
              <button className="boton-plan primario">Consultar</button>
            </motion.div>

            {/* — Plan Cadena Gastronómica — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="tarjeta-plan">
              <h3 className="nombre-plan">Cadena Gastronómica</h3>
              <p className="desc-plan">Para manejar varias sucursales desde un solo panel.</p>
              <div className="precio-plan"><span className="monto">$190k</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Múltiples sucursales y cartas</li>
                <li className="item-feature"><Check className="icono-check" />Gestión de usuarios por local</li>
                <li className="item-feature"><Check className="icono-check" />Reportes consolidados de consumo</li>
                <li className="item-feature"><Check className="icono-check" />Soporte prioritario y acompañamiento en despliegue</li>
              </ul>
              <button className="boton-plan gris">Consultar</button>
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

export { PaginaCartas };
