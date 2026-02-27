import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import "./PaginaServicio.css";

export function PaginaServicio({ 
  titulo, 
  subtitulo, 
  descripcion, 
  detalles, 
  precios, 
  preguntas, 
  maqueta 
}) {
  // Mejorar contenido de productos/servicios y agregar más preguntas frecuentes por defecto si no se pasan props
  const detallesMejorados = detalles && detalles.length > 0 ? detalles : [
    "Estrategias digitales a medida para potenciar tu marca y diferenciarte de la competencia.",
    "Diseño visual impactante, moderno y 100% adaptable a cualquier dispositivo.",
    "SEO técnico y de contenidos para que tu web aparezca en Google y atraiga clientes reales.",
    "Integración con WhatsApp, redes sociales, email marketing y herramientas de automatización.",
    "Acompañamiento personalizado: te guiamos desde la idea hasta el crecimiento post-lanzamiento."
  ];

  const preciosMejorados = precios && precios.length > 0 ? precios : [
    {
      nombre: "Plan Esencial",
      descripcion: "Pensado para emprendedores y pequeñas empresas que quieren dar el primer paso digital con una web profesional, clara y efectiva. Incluye todo lo necesario para que te encuentren y contacten fácilmente.",
      precio: "$120.000",
      caracteristicas: [
        "Hasta 4 secciones personalizadas (Inicio, Servicios, Nosotros, Contacto)",
        "Diseño responsive premium con identidad visual de tu marca",
        "Optimización de velocidad y SEO inicial para aparecer en Google",
        "Formulario de contacto directo a tu email o WhatsApp",
        "Carga de textos e imágenes provistos por el cliente"
      ],
      destacado: false
    },
    {
      nombre: "Plan Profesional",
      descripcion: "Ideal para negocios en crecimiento que buscan captar más clientes y posicionarse como referentes. Incluye blog, integración con redes, analítica avanzada y asesoría estratégica.",
      precio: "$180.000",
      caracteristicas: [
        "Todo lo del Plan Esencial",
        "Blog autoadministrable para publicar novedades y mejorar el SEO",
        "Integración con redes sociales y WhatsApp Business",
        "Google Analytics, mapas de calor y reportes mensuales",
        "Asesoría en marketing digital y contenidos"
      ],
      destacado: true
    },
    {
      nombre: "Plan Premium",
      descripcion: "La solución más completa para empresas que quieren vender online y automatizar procesos. Incluye tienda e-commerce, automatizaciones, soporte prioritario y escalabilidad total.",
      precio: "$260.000",
      caracteristicas: [
        "Todo lo del Plan Profesional",
        "Tienda online con catálogo, carrito y pasarela de pago",
        "Automatización de emails, chatbots y recuperación de carritos",
        "Soporte prioritario 24/7 y capacitaciones personalizadas",
        "Preparado para escalar: multi-idioma, multi-sucursal y más"
      ],
      destacado: false
    }
  ];

  const preguntasMejoradas = preguntas && preguntas.length > 0 ? preguntas : [
    // Esenciales para todos los planes
    {
      pregunta: "¿Qué incluye el Plan Esencial?",
      respuesta: "Incluye una web institucional con hasta 4 secciones, diseño responsive, formulario de contacto y optimización básica para buscadores. Es ideal para quienes quieren presencia profesional sin complicaciones."
    },
    {
      pregunta: "¿Puedo pedir cambios después de la entrega?",
      respuesta: "Sí, podés solicitar ajustes menores sin costo durante los primeros 30 días. Luego, ofrecemos packs de soporte y mantenimiento a medida."
    },
    {
      pregunta: "¿El sitio es seguro y rápido?",
      respuesta: "Todos los sitios se entregan optimizados para velocidad y seguridad, con buenas prácticas de desarrollo y protección contra ataques comunes."
    },
    // Profesional
    {
      pregunta: "¿Qué ventajas tiene el Plan Profesional?",
      respuesta: "Además de todo lo del Esencial, suma blog autoadministrable, integración con redes sociales, analítica avanzada y asesoría en marketing digital para potenciar tu negocio." 
    },
    {
      pregunta: "¿Puedo publicar mis propias noticias o novedades?",
      respuesta: "Sí, el blog es autoadministrable y podés cargar, editar o eliminar artículos fácilmente desde un panel sencillo."
    },
    {
      pregunta: "¿Cómo funciona la integración con redes sociales?",
      respuesta: "Podés mostrar tus publicaciones de Instagram, Facebook o X en la web y agregar botones de contacto directo a WhatsApp y otras redes."
    },
    // Premium
    {
      pregunta: "¿Qué incluye la tienda online del Plan Premium?",
      respuesta: "Incluye catálogo de productos, carrito de compras, pasarela de pago, gestión de stock y automatización de emails para ventas y recupero de carritos abandonados."
    },
    {
      pregunta: "¿Puedo vender productos digitales y físicos?",
      respuesta: "Sí, la tienda permite vender ambos tipos de productos y configurar envíos, descargas automáticas y más."
    },
    {
      pregunta: "¿Qué tipo de soporte recibo con el Plan Premium?",
      respuesta: "Soporte prioritario 24/7, capacitaciones personalizadas y posibilidad de escalar la web a multi-idioma, multi-sucursal y nuevas funcionalidades a medida."
    },
    // Generales
    {
      pregunta: "¿Cuánto tarda el desarrollo?",
      respuesta: "El plazo estimado es de 2 a 4 semanas para el Esencial, 3 a 5 semanas para el Profesional y 4 a 6 semanas para el Premium, dependiendo de la complejidad y la entrega de materiales."
    },
    {
      pregunta: "¿Qué formas de pago aceptan?",
      respuesta: "Podés abonar por transferencia bancaria, Mercado Pago o tarjeta de crédito en cuotas."
    },
    {
      pregunta: "¿Puedo migrar de plan más adelante?",
      respuesta: "Sí, podés comenzar con un plan básico y escalar a uno superior cuando tu negocio lo requiera, sin perder tu inversión inicial."
    }
  ];
  const [indiceFaq, setIndiceFaq] = useState(0);

  return (
    <main className="pagina-servicio">
      
      {/* SECCIÓN HERO (El padding-top de CSS ya deja espacio para el Navbar global) */}
      <section className="seccion-hero-servicio">
        <div className="hero-servicio-fondo" />
        <div className="hero-servicio-grid" />
      <div className="contenedor-limitado">
          <div className="grilla-hero ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="columna-info"
            >
              <p className="etiqueta-seccion subtitulo-servicio">{subtitulo}</p>
              <h1 className="titulo-servicio">{titulo}</h1>
              <p className="descripcion-servicio">{descripcion || "Creamos soluciones digitales que impulsan tu negocio: desde webs institucionales hasta tiendas online, con diseño atractivo, tecnología moderna y foco en resultados reales."}</p>
              
              <ul className="lista-detalles">
                {detallesMejorados.map((detalle, i) => (
                  <li key={i} className="item-detalle">
                    <Check className="icono-check" />
                    {detalle}
                  </li>
                ))}
              </ul>

              <div className="acciones-hero">
                <button className="boton-primario efecto-shimmer">
                  Solicitar Cotización
                </button>
                <button className="boton-secundario">
                  Contactar por WhatsApp
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="columna-visual"
            >
              <div className="envoltorio-maqueta">
                <div className="resplandor-maqueta" />
                {maqueta}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PRECIOS */}
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
            <h2 className="titulo-seccion-principal">
              Elegí el plan que mejor se adapte a tu necesidad
            </h2>
          </motion.div>

          <div className="grilla-planes">
            {preciosMejorados.map((plan, index) => (
              <motion.div
                key={plan.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`tarjeta-plan ${plan.destacado ? "destacado" : ""}`}
              >
                {plan.destacado && (
                  <div className="etiqueta-recomendado">Recomendado</div>
                )}

                <h3 className="nombre-plan">{plan.nombre}</h3>
                <p className="desc-plan">{plan.descripcion}</p>

                <div className="precio-plan">
                  <span className="monto">{plan.precio}</span>
                </div>

                <ul className="features-plan">
                  {plan.caracteristicas?.map((feat, k) => (
                    <li key={k} className="item-feature">
                      <Check className="icono-check" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`boton-plan ${plan.destacado ? "primario" : "gris"}`}>
                  Consultar
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FAQ */}
      {preguntasMejoradas && preguntasMejoradas.length > 0 && (
        <section className="seccion-faq-servicio">
          <div className="contenedor-faq">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="encabezado-centro"
            >
              <p className="etiqueta-seccion">Preguntas frecuentes</p>
              <h2 className="titulo-seccion-principal">
                Dudas comunes sobre este servicio
              </h2>
            </motion.div>

            <div className="lista-acordeon">
              {preguntasMejoradas.map((faq, i) => (
                <div key={i} className="item-acordeon">
                  <button
                    onClick={() => setIndiceFaq(indiceFaq === i ? null : i)}
                    className="boton-pregunta"
                  >
                    <span className="texto-pregunta">{faq.pregunta}</span>
                    <div className="icono-toggle">
                      {indiceFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {indiceFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="contenedor-respuesta"
                      >
                        <p className="texto-respuesta">{faq.respuesta}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
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
          <h2 className="titulo-seccion-principal cta-titulo">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="descripcion-cta">
            Contanos tu idea, el estado actual de tu negocio y qué querés lograr
            en los próximos meses. Con esa información armamos una propuesta sin
            compromiso, con pasos claros, tiempos estimados y rangos de inversión
            adaptados a tu realidad.
          </p>
          <div className="acciones-cta">
            <button className="boton-primario efecto-shimmer grande">
              Agendar Consulta Gratis
            </button>
            <Link to="/" className="link-volver">
              Volver al inicio
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}