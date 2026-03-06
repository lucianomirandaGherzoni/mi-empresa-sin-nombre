import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import "./Turnos.css";

const preguntas = [
  {
    pregunta: "¿Tengo que pagar una mensualidad?",
    respuesta: "Nuestros planes base son de pago único por instalación y parametrización del sistema. Después solo abonás un mantenimiento anual muy accesible que cubre servidor, actualizaciones técnicas y copias de seguridad. Si necesitás nuevas funcionalidades más adelante, se cotizan por separado como mejoras evolutivas.",
  },
  {
    pregunta: "¿Sirve para peluquerías, canchas u otros rubros?",
    respuesta: "Sí. Adaptamos la duración de los turnos (15, 30, 60 minutos o bloques personalizados) y el tipo de servicios según tu negocio. El mismo sistema sirve para consultorios, peluquerías, canchas de fútbol, estudios de yoga y prácticamente cualquier actividad que funcione con reservas por horario.",
  },
  {
    pregunta: "¿Puedo exportar mi agenda o la base de clientes?",
    respuesta: "Podés descargar la información clave de turnos y clientes en formatos compatibles con Excel o Google Sheets para hacer tus propios reportes. Si tenés un CRM o sistema externo, también podemos evaluar integraciones a medida.",
  },
];

const PaginaTurnos = () => {
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
              <p className="etiqueta-seccion subtitulo-servicio">Sin llamadas, sin esperas</p>
              <h1 className="titulo-servicio">Tus turnos en piloto automático</h1>
              <p className="descripcion-servicio">
                Tus clientes reservan solos, a cualquier hora, sin llamarte ni mandarte un mensaje. Vos te enfocás en atender y el sistema se ocupa del resto.
              </p>
              <ul className="lista-detalles">
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Reservas online las 24 horas
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Recordatorios automáticos por email
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Panel para manejar horarios y profesionales
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Feriados y vacaciones con un clic
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Historial de cada cliente guardado
                </li>
                <li className="item-detalle">
                  <Check className="icono-check" />
                  Se conecta con Google Calendar
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
                <img src="/assets/mockup-turnos.png" alt="Mockup turnos" className="mockup-hero" />
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

            {/* — Plan Consultorio — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }} className="tarjeta-plan">
              <h3 className="nombre-plan">Consultorio</h3>
              <p className="desc-plan">Perfecto para profesionales independientes o pequeños consultorios.</p>
              <div className="precio-plan"><span className="monto">$95k</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />1 agenda profesional con turnos ilimitados</li>
                <li className="item-feature"><Check className="icono-check" />Link personalizado para compartir por WhatsApp</li>
                <li className="item-feature"><Check className="icono-check" />Recordatorios básicos por email</li>
                <li className="item-feature"><Check className="icono-check" />Panel simple para bloquear días y horarios</li>
                <li className="item-feature"><Check className="icono-check" />Soporte técnico durante 60 días</li>
                <li className="item-feature"><Check className="icono-check" />Sin comisiones por turno</li>
              </ul>
              <button className="boton-plan gris">Consultar</button>
            </motion.div>

            {/* — Plan Clínica (destacado) — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="tarjeta-plan destacado">
              <div className="etiqueta-recomendado">Recomendado</div>
              <h3 className="nombre-plan">Clínica</h3>
              <p className="desc-plan">Sistema multi-profesional para centros médicos o estudios grandes.</p>
              <div className="precio-plan"><span className="monto">$160k</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Hasta 5 agendas simultáneas</li>
                <li className="item-feature"><Check className="icono-check" />Usuarios con rol recepcionista / administración</li>
                <li className="item-feature"><Check className="icono-check" />Reportes de ocupación y ausentismo</li>
                <li className="item-feature"><Check className="icono-check" />Recordatorios por WhatsApp (add-on opcional)</li>
                <li className="item-feature"><Check className="icono-check" />Capacitación inicial incluida</li>
                <li className="item-feature"><Check className="icono-check" />Exportación de base de pacientes</li>
              </ul>
              <button className="boton-plan primario">Consultar</button>
            </motion.div>

            {/* — Plan Franquicia — */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="tarjeta-plan">
              <h3 className="nombre-plan">Franquicia</h3>
              <p className="desc-plan">Pensado para cadenas con varias sucursales.</p>
              <div className="precio-plan"><span className="monto">$260k</span></div>
              <ul className="features-plan">
                <li className="item-feature"><Check className="icono-check" />Gestión de múltiples sedes</li>
                <li className="item-feature"><Check className="icono-check" />Panel centralizado para supervisión</li>
                <li className="item-feature"><Check className="icono-check" />Perfiles de profesionales por sucursal</li>
                <li className="item-feature"><Check className="icono-check" />Soporte prioritario y SLA acordado</li>
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

export { PaginaTurnos };
