import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Precios.css';

const planes = [
  {
    nombre: 'Landing Page',
    descripcion: 'Perfecta para presentar tu negocio online',
    precio: { mensual: 150000, anual: 150000 },
    caracteristicas: ['Diseño responsive', 'Optimización SEO', 'Formulario de contacto', '3 secciones personalizadas', 'Entrega en 7 días'],
    accion: 'Solicitar',
    destacado: false,
  },
  {
    nombre: 'Sistema de Gestión',
    descripcion: 'Turnos, reservas o gestión de pedidos',
    precio: { mensual: 350000, anual: 300000 },
    caracteristicas: [
      'Panel de administración',
      'Sistema de turnos/pedidos',
      'Notificaciones automáticas',
      'Reportes y estadísticas',
      'Base de datos incluida',
      'Soporte por 3 meses',
      'Capacitación incluida',
    ],
    accion: 'Consultar',
    destacado: true,
  },
  {
    nombre: 'Desarrollo a Medida',
    descripcion: 'Solución personalizada para tu negocio',
    precio: { mensual: 0, anual: 0 },
    caracteristicas: [
      'Análisis de requerimientos',
      'Diseño personalizado',
      'Desarrollo completo',
      'Testing exhaustivo',
      'Documentación técnica',
      'Soporte continuo',
      'Escalabilidad garantizada',
    ],
    accion: 'Cotizar Proyecto',
    destacado: false,
  },
];

export function Precios() {
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
          {planes.map((plan, indice) => (
            <motion.div
              key={plan.nombre}
              initial={{ opacity: 0, y: 20 }}
              animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + indice * 0.1 }}
              className={`tarjeta-precios ${plan.destacado ? 'destacada' : ''}`}
            >
              {plan.destacado && <div className="etiqueta-popular">Más Solicitado</div>}

              <div className="cabecera-tarjeta">
                <h3 className="nombre-plan">{plan.nombre}</h3>
                <p className="descripcion-plan">{plan.descripcion}</p>
              </div>

              <div className="contenedor-precio">
                <div className="monto-precio">
                  {plan.precio[cicloFacturacion] > 0 ? (
                    <>
                      <span className="cifra-precio">${plan.precio[cicloFacturacion].toLocaleString('es-AR')}</span>
                      <span className="periodo-precio"> ARS</span>
                    </>
                  ) : (
                    <span className="cifra-precio">A cotizar</span>
                  )}
                </div>
                {cicloFacturacion === 'anual' && plan.precio.anual > 0 && (
                  <p className="nota-precio">Incluye hosting y mantenimiento anual</p>
                )}
              </div>

              <ul className="lista-caracteristicas">
                {plan.caracteristicas.map((item) => (
                  <li key={item} className="item-caracteristica">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <button className={`boton-precio ${plan.destacado ? 'efecto-brillo' : ''}`}>{plan.accion}</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}