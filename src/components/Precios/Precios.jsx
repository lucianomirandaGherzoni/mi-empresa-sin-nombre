import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Precios.css';

const Precios = () => {
  const seccionRef = useRef(null);
  const estaEnVista = useInView(seccionRef, { once: true, margin: '-100px' });
  const [cicloFacturacion, setCicloFacturacion] = useState('mensual');

  return (
    <section id="precios" className="seccion-precios" ref={seccionRef}>
      <div className="contenedor-precios">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="cabecera-precios"
        >
          <h2 className="titulo-precios">Precios transparentes y competitivos</h2>
          <p className="descripcion-precios">Soluciones digitales accesibles para empresas de Bariloche y la región. Consulta por paquetes personalizados.</p>

          <div className="conmutador-precios">
            <button
              onClick={() => setCicloFacturacion('mensual')}
              className={`boton-conmutador ${cicloFacturacion === 'mensual' ? 'activo' : ''}`}
            >
              {cicloFacturacion === 'mensual' && (
                <motion.div
                  layoutId="fondo-conmutador"
                  className="fondo-conmutador"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="texto-conmutador">Pago Único</span>
            </button>
            <button
              onClick={() => setCicloFacturacion('anual')}
              className={`boton-conmutador ${cicloFacturacion === 'anual' ? 'activo' : ''}`}
            >
              {cicloFacturacion === 'anual' && (
                <motion.div
                  layoutId="fondo-conmutador"
                  className="fondo-conmutador"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="texto-conmutador">
                Con Mantenimiento
                <span className="etiqueta-descuento">-15%</span>
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cuadricula-precios"
        >

          {/* — Plan 1: Landing Page — */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="tarjeta-precios"
          >
            <div className="cabecera-tarjeta">
              <h3 className="nombre-plan">Landing Page</h3>
              <p className="descripcion-plan">Perfecta para presentar tu negocio online</p>
            </div>
            <div className="contenedor-precio">
              <div className="monto-precio">
                <span className="cifra-precio">$150.000</span>
                <span className="periodo-precio"> ARS</span>
              </div>
            </div>
            <ul className="lista-caracteristicas">
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Diseño responsive
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Optimización SEO
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Formulario de contacto
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                3 secciones personalizadas
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Entrega en 7 días
              </li>
            </ul>
            <button className="boton-precio">Solicitar</button>
          </motion.div>

          {/* — Plan 2: Sistema de Gestión (destacado) — */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="tarjeta-precios destacada"
          >
            <div className="etiqueta-popular">Más Solicitado</div>
            <div className="cabecera-tarjeta">
              <h3 className="nombre-plan">Sistema de Gestión</h3>
              <p className="descripcion-plan">Turnos, reservas o gestión de pedidos</p>
            </div>
            <div className="contenedor-precio">
              <div className="monto-precio">
                {cicloFacturacion === 'mensual' ? (
                  <>
                    <span className="cifra-precio">$350.000</span>
                    <span className="periodo-precio"> ARS</span>
                  </>
                ) : (
                  <>
                    <span className="cifra-precio">$300.000</span>
                    <span className="periodo-precio"> ARS</span>
                  </>
                )}
              </div>
              {cicloFacturacion === 'anual' && (
                <p className="nota-precio">Incluye hosting y mantenimiento anual</p>
              )}
            </div>
            <ul className="lista-caracteristicas">
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Panel de administración
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Sistema de turnos/pedidos
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Notificaciones automáticas
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Reportes y estadísticas
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Base de datos incluida
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Soporte por 3 meses
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Capacitación incluida
              </li>
            </ul>
            <button className="boton-precio efecto-brillo">Consultar</button>
          </motion.div>

          {/* — Plan 3: Desarrollo a Medida — */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="tarjeta-precios"
          >
            <div className="cabecera-tarjeta">
              <h3 className="nombre-plan">Desarrollo a Medida</h3>
              <p className="descripcion-plan">Solución personalizada para tu negocio</p>
            </div>
            <div className="contenedor-precio">
              <div className="monto-precio">
                <span className="cifra-precio">A cotizar</span>
              </div>
            </div>
            <ul className="lista-caracteristicas">
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Análisis de requerimientos
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Diseño personalizado
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Desarrollo completo
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Testing exhaustivo
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Documentación técnica
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Soporte continuo
              </li>
              <li className="item-caracteristica">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Escalabilidad garantizada
              </li>
            </ul>
            <button className="boton-precio">Cotizar Proyecto</button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export { Precios };