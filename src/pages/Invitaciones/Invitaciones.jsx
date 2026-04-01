import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus, Palette, Share2, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";
import "./Invitaciones.css";

const preguntas = [
    {
        pregunta: "¿Cómo funciona una invitación digital?",
        respuesta: "Es una página web personalizada con toda la información de tu evento. Te entregamos un link que podés compartir fácilmente por WhatsApp o redes sociales para que tus invitados accedan a todo en un solo lugar.",
    },
    {
        pregunta: "¿Cómo empezamos a diseñar mi invitación?",
        respuesta: "Primero nos contás el estilo de tu evento. Con esa información diseñamos una propuesta personalizada y te la mostramos para que la revises.",
    },
    {
        pregunta: "¿Cuánto tarda en estar lista?",
        respuesta: "Una vez entregado el material y realizado el pago, tu invitación estará lista en 48hs hábiles.",
    },
    {
        pregunta: "¿Cómo funciona la confirmación de asistencia?",
        respuesta: "Los invitados confirman directamente desde la invitación digital y se genera un invitado en la lista del panel administrador o de la otra forma te llega automáticamente a tu WhatsApp. Así gestionás tu lista sin esfuerzo.",
    },
    {
        pregunta: "¿Puedo hacer cambios después de recibirla?",
        respuesta: "Sí. Si necesitás modificar datos, agregar información o ajustar el diseño, podemos actualizar el link para que siempre esté al día.",
    },
    {
        pregunta: "¿Hay un límite de invitados?",
        respuesta: "No, podés enviar el link a todas las personas que quieras, y si deseas puedes reestringir el acceso a quienes no estan invitados. Nuestras invitaciones no tienen límite de visualizaciones ni de invitados.",
    },
    {
        pregunta: "Aún me faltan datos del evento, ¿puedo comprarla igual?",
        respuesta: "¡Claro! Podés congelar el precio comprándola ahora y enviarnos la información cuando la tengas confirmada.",
    },
    {
        pregunta: "¿Qué se incluye en mi invitación?",
        respuesta: "Todos los modelos incluyen secciones de detalles del evento, fotos, confirmación de asistencia, mapa, sugerencia de regalos y más. Podés activar o quitar módulos según necesites.",
    },
];
const PaginaInvitaciones = () => {
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
                            <h1 className="titulo-servicio">Tu evento empieza con una gran invitación</h1>
                            <p className="descripcion-servicio">
                                Sorprendé a tus invitados con una invitación interactiva que gestiona tu evento por vos.
                                Diseñamos en conjunto una invitación digital personalizada donde tus invitados confirman su asistencia fácilmente.

                            </p>
                            <ul className="lista-detalles">
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Confirmación instantánea de asistencia
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Mapa con la ubicación del evento (Google Maps)
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Cuenta regresiva en tiempo real
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Galería de fotos
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Lista de regalos o CBU/Alias
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Se actualiza si cambia algún dato del evento
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Se ve bien en todos los dispositivos
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
                                <img src="/assets/mockup-invitaciones.png" alt="Mockup invitaciones" className="mockup-hero" />
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

                        {/* — Plan Essential — */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }} className="tarjeta-plan">
                            <h3 className="nombre-plan">Essential</h3>
                            <p className="desc-plan">La opción ideal para invitaciones simples pero memorables.</p>
                            <div className="precio-plan"><span className="monto">$60k</span></div>
                            <ul className="features-plan">
                                <li className="item-feature"><Check className="icono-check" />Diseño personalizado con portada estática</li>
                                <li className="item-feature"><Check className="icono-check" />Confirmación a WhatsApp del anfitrión</li>
                                <li className="item-feature"><Check className="icono-check" />Ubicación GPS integrada (Maps / Waze)</li>
                                <li className="item-feature"><Check className="icono-check" />Cuenta regresiva animada</li>
                                <li className="item-feature"><Check className="icono-check" />Sección de información básica del evento</li>
                            </ul>
                            <button className="boton-plan gris">Consultar</button>
                        </motion.div>

                        {/* — Plan Infinity (destacado) — */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="tarjeta-plan destacado">
                            <div className="etiqueta-recomendado">Recomendado</div>
                            <h3 className="nombre-plan">Infinity</h3>
                            <p className="desc-plan">La experiencia digital completa para bodas y grandes eventos.</p>
                            <div className="precio-plan"><span className="monto">$110k</span></div>
                            <ul className="features-plan">
                                <li className="item-feature"><Check className="icono-check" />Música de fondo personalizada</li>
                                <li className="item-feature"><Check className="icono-check" />Galería de fotos ilimitada</li>
                                <li className="item-feature"><Check className="icono-check" />Cronograma detallado del evento</li>
                                <li className="item-feature"><Check className="icono-check" />Animaciones premium y microinteracciones</li>
                                <li className="item-feature"><Check className="icono-check" />Dominio personalizado (.com o .com.ar)</li>
                                <li className="item-feature"><Check className="icono-check" />Sección de lista de regalos / viajes</li>
                            </ul>
                            <button className="boton-plan primario">Consultar</button>
                        </motion.div>

                        {/* — Plan Evento Express — */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="tarjeta-plan">
                            <h3 className="nombre-plan">Evento Express</h3>
                            <p className="desc-plan">Para cumpleaños, despedidas o eventos rápidos.</p>
                            <div className="precio-plan"><span className="monto">$40k</span></div>
                            <ul className="features-plan">
                                <li className="item-feature"><Check className="icono-check" />Plantilla optimizada pre-armada</li>
                                <li className="item-feature"><Check className="icono-check" />Personalización de colores y tipografías</li>
                                <li className="item-feature"><Check className="icono-check" />Confirmación rápida por WhatsApp</li>
                                <li className="item-feature"><Check className="icono-check" />Entrega en 72hs hábiles</li>
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

            {/* CÓMO FUNCIONA */}
            <section className="seccion-como-funciona">
                <div className="como-funciona-fondo" />
                <div className="como-funciona-grid" />
                <div className="contenedor-limitado">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="encabezado-centro"
                    >
                        <h2 className="titulo-seccion-principal">Crear tu invitación es fácil</h2>
                        <p className="subtitulo-como-funciona">Un solo lugar para diseñar, compartir y organizar todo.</p>
                    </motion.div>

                    <div className="grilla-pasos">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0 }}
                            className="tarjeta-paso"
                        >
                            <div className="cabecera-tarjeta-paso">
                                <div className="icono-paso"><Palette size={18} /></div>
                            </div>
                            <p className="etiqueta-paso">Paso 1</p>
                            <h3 className="titulo-paso">Elegís un diseño y lo adaptás a tu evento</h3>
                            <p className="desc-paso">Arrancás desde una plantilla y cambiás textos, colores y secciones a tu ritmo. No necesitás saber diseñar.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="tarjeta-paso"
                        >
                            <div className="cabecera-tarjeta-paso">
                                <div className="icono-paso"><Share2 size={18} /></div>
                            </div>
                            <p className="etiqueta-paso">Paso 2</p>
                            <h3 className="titulo-paso">Compartís un solo link con tus invitados</h3>
                            <p className="desc-paso">Mandalo por WhatsApp, email o redes. Siempre acceden a la versión más actualizada.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.2 }}
                            className="tarjeta-paso"
                        >
                            <div className="cabecera-tarjeta-paso">
                                <div className="icono-paso"><ListChecks size={18} /></div>
                            </div>
                            <p className="etiqueta-paso">Paso 3</p>
                            <h3 className="titulo-paso">Recibís confirmaciones y lo tenés todo ordenado</h3>
                            <p className="desc-paso">Cada respuesta se registra en un solo lugar. Sin registros manuales ni reenviar mensajes.</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="acciones-como-funciona"
                    >
                        <button className="boton-primario grande">Empezar ahora</button>
                    </motion.div>
                </div>
            </section>

        </main>
    );
};

export { PaginaInvitaciones };
