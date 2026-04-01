import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Minus, ArrowDownRight } from "lucide-react";
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
    {
        pregunta: "¿Puedo gestionar todos los turnos de mi equipo desde un solo lugar?",
        respuesta: "Sí, nuestro panel te permite ver y organizar los horarios de todos tus profesionales, asignar turnos y optimizar la disponibilidad, todo en un mismo lugar.",
    },
    {
        pregunta: "¿El sistema me ayuda a reducir cancelaciones y ausencias?",
        respuesta: "¡Sí! Con recordatorios automáticos por WhatsApp y mail, tus clientes pueden reprogramar sus turnos sin cancelarlos, reduciendo al mínimo las inasistencias. Además podés implementar políticas de cancelación flexibles, como pagos por adelantado o reservas, para que tu agenda esté siempre completa y organizada.",
    },
    {
        pregunta: "¿Puedo personalizar horarios, servicios y profesionales?",
        respuesta: "Sí, podés configurar cada servicio, su duración, precios y disponibilidad de cada profesional, adaptándolo a tu negocio y flujo de clientes.",
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
                            <h1 className="titulo-servicio">Turnos online para tu negocio</h1>
                            <p className="descripcion-servicio">
                                Tus clientes reservan online y reciben confirmación automática.<br />
                                Vos gestionás agenda, pagos y clientes desde un solo lugar, ganando tiempo y manteniendo tu negocio organizado.
                            </p>
                            <ul className="lista-detalles">
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Reservas online las 24 horas
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Recordatorios automáticos por whatsapp o email
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Panel para manejar horarios y profesionales
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Agenda 100% autogestionable
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Historial de cada cliente guardado
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Panel con el rendimiento del negocio
                                </li>
                                <li className="item-detalle">
                                    <Check className="icono-check" />
                                    Administrá profesionales y horarios fácilmente
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
                        <h2 className="titulo-seccion-principal">Elegí el plan que mejor <em className="resaltado-gris">se adapte</em> a tu necesidad</h2>
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

            {/* BENEFICIOS */}
            <section className="seccion-beneficios-turnos">
                <div className="beneficios-grid-fondo" />
                <div className="beneficios-luz-fondo" />
                <div className="contenedor-limitado">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    className="encabezado-beneficios encabezado-centro"
                    >
                        <h2 className="titulo-seccion-principal">Todo lo <em className="resaltado-gris">que necesitás</em> para llenar tu agenda</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="tabla-beneficios"
                    >
                        <div className="fila-beneficio">
                            <div className="icono-beneficio"><ArrowDownRight size={16} /></div>
                            <h3 className="titulo-beneficio">Reservas las 24 horas</h3>
                            <p className="desc-beneficio">Tus clientes sacan turno desde el celular en cualquier momento, sin llamadas ni mensajes. El sistema confirma automáticamente y bloquea el horario al instante.</p>
                        </div>
                        <div className="fila-beneficio">
                            <div className="icono-beneficio"><ArrowDownRight size={16} /></div>
                            <h3 className="titulo-beneficio">Recordatorios automáticos</h3>
                            <p className="desc-beneficio">El sistema avisa al cliente por WhatsApp o email antes del turno. Menos inasistencias, menos tiempo perdido y mejor experiencia para todos.</p>
                        </div>
                        <div className="fila-beneficio">
                            <div className="icono-beneficio"><ArrowDownRight size={16} /></div>
                            <h3 className="titulo-beneficio">Multi-profesional y multi-sede</h3>
                            <p className="desc-beneficio">Administrá varios profesionales o sucursales desde un panel único. Cada uno con su propia agenda, horarios y servicios configurados por separado.</p>
                        </div>
                        <div className="fila-beneficio">
                            <div className="icono-beneficio"><ArrowDownRight size={16} /></div>
                            <h3 className="titulo-beneficio">Métricas de tu negocio</h3>
                            <p className="desc-beneficio">Visualizá ocupación, inasistencias y tendencias de demanda para tomar mejores decisiones. Exportá la base de clientes cuando lo necesitás.</p>
                        </div>
                        <div className="tabla-cta-strip">
                            <span className="tabla-cta-label">Consultanos sin compromiso</span>
                            <button className="tabla-cta-btn">Contactar por WhatsApp ↗</button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
};

export { PaginaTurnos };
