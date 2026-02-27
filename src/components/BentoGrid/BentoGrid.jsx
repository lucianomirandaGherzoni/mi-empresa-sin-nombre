import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layout, Mail, Calendar, UtensilsCrossed, Code2, ArrowUpRight } from "lucide-react";
import "./BentoGrid.css";

// --- MOCKUPS EXPORTADOS (PARA USAR EN PAGINAS DE SERVICIO) ---

export const InterfazLanding = () => (
  <div className="ventana-web">
    <div className="header-navegador">
      <div className="puntos-control"><span /><span /><span /></div>
      <div className="barra-direccion" />
    </div>
    <div className="cuerpo-web">
      <div className="nav-falsa">
        <div className="logo-falso" />
        <div className="links-falsos"><span className="link-linea" /><span className="link-linea" /></div>
        <div className="btn-nav-falso" />
      </div>
      <div className="hero-falso">
        <div className="titulo-hero" />
        <div className="subtitulo-hero" />
        <div className="tags-hero">
          <span className="tag-pill">SEO</span>
          <span className="tag-pill">UX/UI</span>
        </div>
      </div>
      <div className="grid-features-falsa">
        {[1, 2, 3].map(i => (
          <div key={i} className="card-feature">
            <div className="icono-feature" />
            <div className="texto-feature" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const InterfazInvitacion = () => (
  <div className="movil-shell invitacion">
    <div className="icono-anillo">💍</div>
    <div className="titulos-boda">
      <div className="nombres-novios">Maria & Juan</div>
      <div className="texto-invitacion">¡Te invitan a su boda!</div>
    </div>
    <div className="lista-datos">
      <div className="fila-dato"><span>Fecha</span><span className="dato-valor">15 Feb</span></div>
      <div className="fila-dato"><span>Lugar</span><span className="dato-valor">Bariloche</span></div>
      <div className="fila-dato"><span>Hora</span><span className="dato-valor">18:00 hs</span></div>
    </div>
    <div className="btn-accion-mockup">Confirmar</div>
  </div>
);

export const InterfazCalendario = () => (
  <div className="movil-shell calendario">
    <div className="header-cal">
      <div className="mes-texto">Febrero</div>
      <div className="puntos-nav"><span className="punto-nav" /><span className="punto-nav" /></div>
    </div>
    <div className="grid-dias">
      {Array.from({ length: 28 }, (_, i) => (
        <div key={i} className={`dia-cal ${i === 15 ? 'dia-activo' : ''}`}>
          {i + 1}
        </div>
      ))}
    </div>
    <div className="lista-turnos">
      <div className="item-turno"><span className="hora-turno">10:00</span><span className="estado-turno">Libre</span></div>
      <div className="item-turno"><span className="hora-turno">11:00</span><span className="estado-turno">Libre</span></div>
    </div>
    <div className="btn-accion-mockup">Reservar</div>
  </div>
);

export const InterfazMenu = () => (
  <div className="movil-shell menu">
    <div className="header-menu">
      <div className="nombre-resto">El Bosque</div>
      <div className="tabs-menu"><span className="tab-pill tab-activa">Platos</span><span className="tab-pill">Bebidas</span></div>
    </div>
    <div className="lista-platos">
      <div className="item-plato">
        <div className="info-plato"><span className="nombre-plato">Trucha</span><div className="linea-plato" /></div>
        <span className="precio-plato">$9k</span>
      </div>
      <div className="item-plato">
        <div className="info-plato"><span className="nombre-plato">Cordero</span><div className="linea-plato" /></div>
        <span className="precio-plato">$12k</span>
      </div>
    </div>
    <div className="btn-accion-mockup">Ver Pedido</div>
  </div>
);

export const InterfazDesarrollo = () => (
  <div className="ventana-terminal">
    <div className="header-terminal">
      <div className="puntos-control"><span /><span /><span /></div>
      <div className="titulo-terminal">sistema_api.js</div>
    </div>
    <div className="cuerpo-terminal">
      <div className="diagrama-flujo">
        {/* Cliente */}
        <div className="bloque-tech cliente">
          <div className="icono-tech">⚛️</div>
          <div className="codigo-simulado">
            <div className="linea-cod"><span className="palabra-clave">const</span> App = ()</div>
            <div className="linea-cod indentado">fetch(<span className="string">'/api'</span>)</div>
          </div>
        </div>
        
        {/* Conector */}
        <div className="conector-flujo">
          <div className="flecha-flujo">→</div>
          <div className="etiqueta-flujo">JSON</div>
        </div>

        {/* Servidor */}
        <div className="bloque-tech servidor">
          <div className="icono-tech">🟢</div>
          <div className="codigo-simulado">
            <div className="linea-cod"><span className="palabra-clave">app</span>.get(<span className="string">'/'</span>)</div>
            <div className="linea-cod indentado"><span className="palabra-clave">await</span> db()</div>
          </div>
        </div>
      </div>
      <div className="footer-terminal">
        <span className="tag-terminal">React</span>
        <span className="tag-terminal">Node</span>
        <span className="tag-terminal highlight">Cloud</span>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---

export function BentoGrid() {
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true, margin: "-100px" });

  const variantes = {
    oculto: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
  <section id="que-hacemos" className="seccion-bento">
      <div className="bento-fondo-gradiente" />
      <div className="bento-grid-fondo" />
      <div className="contenedor-principal">
        <div className="cabecera-seccion">
          <p className="etiqueta-seccion">Qué hacemos</p>
          <h2 className="titulo-seccion-principal">
            Soluciones digitales que funcionan
          </h2>
        </div>

        <motion.div 
          ref={ref}
          initial="oculto"
          animate={estaEnVista ? "visible" : "oculto"}
          transition={{ staggerChildren: 0.1 }}
          className="grilla-servicios"
        >
          {/* 1. Landing Pages (Ancho Completo) */}
          <motion.div variants={variantes} className="tarjeta-bento ancho-completo tarjeta-acento">
            <a href="/landing-pages" className="enlace-tarjeta">
              <div className="info-tarjeta">
                <div className="titulo-header"><Layout className="icono-lime" /><h3>Landing Pages</h3></div>
                <p>Presencia profesional que convierte visitas en clientes.</p>
                <ArrowUpRight className="flecha-link" />
              </div>
              <div className="contenedor-visual"><InterfazLanding /></div>
            </a>
          </motion.div>

          {/* 2. Invitaciones */}
          <motion.div variants={variantes} className="tarjeta-bento">
            <a href="/invitaciones" className="enlace-tarjeta">
              <div className="info-tarjeta">
                <div className="titulo-header"><Mail className="icono-lime" /><h3>Invitaciones</h3></div>
                <p>Eventos memorables.</p>
                <ArrowUpRight className="flecha-link" />
              </div>
              <div className="contenedor-visual"><InterfazInvitacion /></div>
            </a>
          </motion.div>

          {/* 3. Turnos */}
          <motion.div variants={variantes} className="tarjeta-bento">
            <a href="/turnos" className="enlace-tarjeta">
              <div className="info-tarjeta">
                <div className="titulo-header"><Calendar className="icono-lime" /><h3>Turnos</h3></div>
                <p>Agenda automática.</p>
                <ArrowUpRight className="flecha-link" />
              </div>
              <div className="contenedor-visual"><InterfazCalendario /></div>
            </a>
          </motion.div>

          {/* 4. Menú QR */}
          <motion.div variants={variantes} className="tarjeta-bento">
            <a href="/cartas" className="enlace-tarjeta">
              <div className="info-tarjeta">
                <div className="titulo-header"><UtensilsCrossed className="icono-lime" /><h3>Menú QR</h3></div>
                <p>Actualiza precios ya.</p>
                <ArrowUpRight className="flecha-link" />
              </div>
              <div className="contenedor-visual"><InterfazMenu /></div>
            </a>
          </motion.div>

          {/* 5. Desarrollo a Medida */}
          <motion.div variants={variantes} className="tarjeta-bento">
            <a href="/desarrollo" className="enlace-tarjeta">
              <div className="info-tarjeta">
                <div className="titulo-header"><Code2 className="icono-lime" /><h3>A Medida</h3></div>
                <p>Sistemas complejos.</p>
                <ArrowUpRight className="flecha-link" />
              </div>
              <div className="contenedor-visual"><InterfazDesarrollo /></div>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}