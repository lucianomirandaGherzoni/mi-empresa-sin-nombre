import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- COMPONENTES GLOBALES ---
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { LogoMarquee } from './components/LogoMarquee/LogoMarquee.jsx';
import { QuienesSomos } from './components/QuienesSomos/QuienesSomos.jsx';
import { FAQ } from './components/PreguntasFrecuentes/PreguntasFrecuentes.jsx';
import { LlamadoFinal } from './components/LlamadoFinal/LlamadoFinal.jsx';

// --- BENTO GRID Y MOCKUPS ---
import { 
  BentoGrid, 
  InterfazLanding, 
  InterfazInvitacion, 
  InterfazCalendario, 
  InterfazMenu, 
  InterfazDesarrollo 
} from './components/BentoGrid/BentoGrid.jsx';

// --- PLANTILLA DE PÁGINA DE SERVICIO ---
import { PaginaServicio } from './components/PaginaServicio/PaginaServicio.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* =========================================
            RUTA PRINCIPAL (HOME)
           ========================================= */}
        <Route path="/" element={
          <main>
            <Hero />
            <LogoMarquee />
            <BentoGrid />
            <QuienesSomos />
            <FAQ />
            <LlamadoFinal />
          </main>
        } />

        {/* =========================================
            1. LANDING PAGES (Contenido Ampliado)
           ========================================= */}
        <Route path="/landing-pages" element={
          <PaginaServicio 
            titulo="Landing Pages que Convierten"
            subtitulo="Diseño Web Estratégico"
            descripcion="No es solo una web bonita. Diseñamos páginas de aterrizaje optimizadas psicológicamente para transformar visitantes en clientes. Ideales para campañas de Google Ads, lanzamientos de productos o captación de leads."
            detalles={[
              "Diseño 'Mobile First' optimizado para celulares",
              "Velocidad de carga ultrarrápida (Core Web Vitals)",
              "Integración con Pixel de Facebook y Google Analytics",
              "Conexión directa a WhatsApp Business y CRM",
              "Copywriting persuasivo (Textos de venta)",
              "Certificado SSL de seguridad incluido"
            ]}
            precios={[
              { 
                nombre: "Starter", 
                precio: "$150k", 
                descripcion: "Para validar tu idea con una landing clara y directa.", 
                caracteristicas: [
                  "1 sección principal con propuesta de valor",
                  "Formulario de contacto simple",
                  "Botón de WhatsApp fijo",
                  "Hosting incluido 6 meses",
                  "Entrega en 5 días hábiles"
                ] 
              },
              { 
                nombre: "Growth", 
                precio: "$320k", 
                destacado: true, 
                descripcion: "Para escalar ventas con campañas de tráfico y remarketing.", 
                caracteristicas: [
                  "Hasta 6 secciones estratégicas (beneficios, pruebas sociales, FAQ)",
                  "Pop-ups y barras de anuncio para captación de leads",
                  "Integración con Mailchimp / CRM",
                  "Google Analytics 4 + eventos de conversión",
                  "Copywriting profesional orientado a ventas",
                  "Optimización para anuncios (Facebook/Google)"
                ] 
              },
              { 
                nombre: "Performance", 
                precio: "$420k", 
                descripcion: "Pensado para lanzamientos grandes y funnels complejos.", 
                caracteristicas: [
                  "Landing principal + 1 página de gracias",
                  "Tests A/B básicos en bloques clave",
                  "Integración con pixel de Facebook y Google Ads",
                  "Revisión mensual de métricas durante 60 días",
                  "Soporte y pequeños ajustes post-lanzamiento"
                ] 
              }
            ]}
            preguntas={[
              { 
                pregunta: "¿Qué necesito para empezar?", 
                respuesta: "Con que tengas claro qué vendés y a quién le hablás, ya podemos comenzar. Nos sirve muchísimo si tenés logo, fotos y referencias de otras webs que te gusten, pero si no, también podemos ayudarte con eso. En una primera llamada ordenamos tu propuesta de valor y definimos juntos qué secciones debería tener tu landing." 
              },
              { 
                pregunta: "¿Incluye el dominio y hosting?", 
                respuesta: "Sí. Registramos tu dominio .com o .com.ar a tu nombre y configuramos un hosting de alta velocidad en un servidor optimizado para sitios modernos. Nos encargamos de certificados SSL, correos básicos y de toda la configuración técnica para que no tengas que preocuparte por nada." 
              },
              { 
                pregunta: "¿Puedo editarla después?", 
                respuesta: "Absolutamente. Podemos dejar todo listo para que puedas cambiar textos, imágenes y algunos bloques sin tocar código. Si más adelante necesitás cambios más profundos (nuevas secciones, tests A/B, integraciones extra), los presupuestamos como mejoras evolutivas para que tu landing crezca con tu negocio." 
              },
              { 
                pregunta: "¿Cómo medimos si la landing funciona?", 
                respuesta: "Instalamos Google Analytics 4 y los eventos de conversión que definamos juntos (envíos de formulario, clics a WhatsApp, compras, etc.). Después de la publicación, te mostramos un panel simple para que entiendas cuántas personas visitan tu sitio, desde dónde llegan y cuántas se convierten en clientes." 
              }
            ]}
            maqueta={<InterfazLanding />}
          />
        } />

        {/* =========================================
            2. INVITACIONES DIGITALES
           ========================================= */}
        <Route path="/invitaciones" element={
          <PaginaServicio 
            titulo="Invitaciones Web Premium"
            subtitulo="Experiencias para Eventos"
            descripcion="Olvidate del papel. Sorprendé a tus invitados con una invitación interactiva inteligente que gestiona tu evento por vos. Confirmación de asistencia automática, mapas GPS y listas de regalos digitales."
            detalles={[
              "Sistema RSVP: Confirmación directa a tu WhatsApp",
              "Geolocalización: Mapa interactivo con Waze/Maps",
              "Galería de fotos Pre-Boda o Book",
              "Cuenta regresiva animada en tiempo real",
              "Sección de 'Lista de Regalos' con CBU/Alias",
              "Código de vestimenta y tips para invitados"
            ]}
            precios={[
              { 
                nombre: "Essential", 
                precio: "$60k", 
                descripcion: "La opción ideal para invitaciones simples pero memorables.", 
                caracteristicas: [
                  "Diseño personalizado con portada estática",
                  "Confirmación a WhatsApp del anfitrión",
                  "Ubicación GPS integrada (Maps / Waze)",
                  "Cuenta regresiva animada",
                  "Sección de información básica del evento"
                ] 
              },
              { 
                nombre: "Infinity", 
                precio: "$110k", 
                destacado: true, 
                descripcion: "La experiencia digital completa para bodas y grandes eventos.", 
                caracteristicas: [
                  "Música de fondo personalizada",
                  "Galería de fotos ilimitada",
                  "Cronograma detallado del evento",
                  "Animaciones premium y microinteracciones",
                  "Dominio personalizado (.com o .com.ar)",
                  "Sección de lista de regalos / viajes"
                ] 
              },
              { 
                nombre: "Evento Express", 
                precio: "$40k", 
                descripcion: "Para cumpleaños, despedidas o eventos rápidos.", 
                caracteristicas: [
                  "Plantilla optimizada pre-armada",
                  "Personalización de colores y tipografías",
                  "Confirmación rápida por WhatsApp",
                  "Entrega en 72hs hábiles"
                ] 
              }
            ]}
            preguntas={[
              { 
                pregunta: "¿Cómo la envío a mis invitados?", 
                respuesta: "Te entregamos un link único (por ejemplo: miboda.com/juanymaria) que podés compartir por WhatsApp, email o redes sociales sin límite de envíos. No hay costo por invitado ni por cantidad de accesos; una vez publicada, cualquiera con el link puede verla al instante desde su celular." 
              },
              { 
                pregunta: "¿Cuánto tiempo dura online?", 
                respuesta: "Por defecto la invitación queda activa al menos 6 meses después del evento, para que puedas compartir fotos de la fiesta o dejar agradecimientos. Si querés extender el tiempo, podemos renovar el hosting por períodos anuales con un costo muy accesible." 
              },
              { 
                pregunta: "¿Puedo modificar datos si cambia algo del evento?", 
                respuesta: "Sí. Si cambia el horario, el salón o necesitás ajustar el texto, podemos actualizar la invitación incluso después de haber enviado el link. Para cambios simples suele bastar con un mensaje y la actualización queda lista en muy poco tiempo." 
              }
            ]}
            maqueta={<InterfazInvitacion />}
          />
        } />

        {/* =========================================
            3. GESTIÓN DE TURNOS
           ========================================= */}
        <Route path="/turnos" element={
          <PaginaServicio 
            titulo="Sistema de Turnos Automático"
            subtitulo="Tu Secretaria Virtual 24/7"
            descripcion="Dejá de interrumpir tu trabajo para responder mensajes. Permití que tus pacientes o clientes vean tu disponibilidad real y reserven su turno solos, a cualquier hora, desde cualquier dispositivo."
            detalles={[
              "Agenda 100% autogestionable por el cliente",
              "Recordatorios automáticos por Email (Reduce ausentismo)",
              "Panel de control para gestionar profesionales y horarios",
              "Bloqueo de vacaciones y días feriados en 1 clic",
              "Base de datos de clientes con historial",
              "Sincronización opcional con Google Calendar"
            ]}
            precios={[
              { 
                nombre: "Consultorio", 
                precio: "$95k", 
                descripcion: "Perfecto para profesionales independientes o pequeños consultorios.", 
                caracteristicas: [
                  "1 agenda profesional con turnos ilimitados",
                  "Link personalizado para compartir por WhatsApp",
                  "Recordatorios básicos por email",
                  "Panel simple para bloquear días y horarios",
                  "Soporte técnico durante 60 días",
                  "Sin comisiones por turno"
                ] 
              },
              { 
                nombre: "Clínica", 
                precio: "$160k", 
                destacado: true, 
                descripcion: "Sistema multi-profesional para centros médicos o estudios grandes.", 
                caracteristicas: [
                  "Hasta 5 agendas simultáneas",
                  "Usuarios con rol recepcionista / administración",
                  "Reportes de ocupación y ausentismo",
                  "Recordatorios por WhatsApp (add-on opcional)",
                  "Capacitación inicial incluida",
                  "Exportación de base de pacientes"
                ] 
              },
              { 
                nombre: "Franquicia", 
                precio: "$260k", 
                descripcion: "Pensado para cadenas con varias sucursales.", 
                caracteristicas: [
                  "Gestión de múltiples sedes",
                  "Panel centralizado para supervisión",
                  "Perfiles de profesionales por sucursal",
                  "Soporte prioritario y SLA acordado"
                ] 
              }
            ]}
            preguntas={[
              { 
                pregunta: "¿Tengo que pagar una mensualidad?", 
                respuesta: "Nuestros planes base son de pago único por instalación y parametrización del sistema. Después solo abonás un mantenimiento anual muy accesible que cubre servidor, actualizaciones técnicas y copias de seguridad. Si necesitás nuevas funcionalidades más adelante, se cotizan por separado como mejoras evolutivas." 
              },
              { 
                pregunta: "¿Sirve para peluquerías, canchas u otros rubros?", 
                respuesta: "Sí. Adaptamos la duración de los turnos (15, 30, 60 minutos o bloques personalizados) y el tipo de servicios según tu negocio. El mismo sistema sirve para consultorios, peluquerías, canchas de fútbol, estudios de yoga y prácticamente cualquier actividad que funcione con reservas por horario." 
              },
              { 
                pregunta: "¿Puedo exportar mi agenda o la base de clientes?", 
                respuesta: "Podés descargar la información clave de turnos y clientes en formatos compatibles con Excel o Google Sheets para hacer tus propios reportes. Si tenés un CRM o sistema externo, también podemos evaluar integraciones a medida." 
              }
            ]}
            maqueta={<InterfazCalendario />}
          />
        } />

        {/* =========================================
            4. MENÚ DIGITAL (CARTAS)
           ========================================= */}
        <Route path="/cartas" element={
          <PaginaServicio 
            titulo="Menú Digital Interactivo QR"
            subtitulo="Gastronomía Inteligente"
            descripcion="La evolución del PDF. Un menú diseñado para vender más, con fotos en alta calidad, categorías navegables y la posibilidad de actualizar precios en segundos desde tu celular."
            detalles={[
              "Acceso instantáneo escaneando código QR",
              "Fotos HD de productos para aumentar el apetito",
              "Buscador inteligente de platos y filtros (Vegano/Sin TACC)",
              "Panel autogestionable: cambiá precios al instante",
              "Ocultá productos sin stock con un clic",
              "Soporte multi-idioma (Español/Inglés/Portugués)"
            ]}
            precios={[
              { 
                nombre: "Visual QR", 
                precio: "$55k", 
                descripcion: "Versión ideal para reemplazar las cartas impresas tradicionales.", 
                caracteristicas: [
                  "Diseño responsivo para celulares",
                  "Panel autogestionable para cambiar precios",
                  "Generación de códigos QR ilimitados",
                  "Categorías y platos ilimitados",
                  "Soporte técnico básico"
                ] 
              },
              { 
                nombre: "Full Orders", 
                precio: "$120k", 
                destacado: true, 
                descripcion: "Pensado para locales con alto volumen de pedidos.", 
                caracteristicas: [
                  "Carrito de compras y armado de pedido",
                  "Pedidos directos a WhatsApp o impresora",
                  "Opciones y adicionales por producto",
                  "Impresión de comandas en cocina/barra",
                  "Dashboard simple de ventas por día y producto"
                ] 
              },
              { 
                nombre: "Cadena Gastronómica", 
                precio: "$190k", 
                descripcion: "Para manejar varias sucursales desde un solo panel.", 
                caracteristicas: [
                  "Múltiples sucursales y cartas",
                  "Gestión de usuarios por local",
                  "Reportes consolidados de consumo",
                  "Soporte prioritario y acompañamiento en despliegue"
                ] 
              }
            ]}
            preguntas={[
              { 
                pregunta: "¿Necesito una app para usarlo?", 
                respuesta: "No. Es una Web App que funciona directamente en el navegador del celular. Tus clientes solo escanean el código QR con la cámara y el menú se abre al instante, sin descargas ni registros. Funciona tanto en Android como en iOS." 
              },
              { 
                pregunta: "¿Es difícil cambiar los precios o platos?", 
                respuesta: "Es tan simple como editar un mensaje: entrás al panel, buscás el producto y actualizás el precio o el nombre. Podés activar o desactivar platos sin borrarlos, ideal para manejar productos fuera de stock o cambios de temporada." 
              },
              { 
                pregunta: "¿Se puede usar en más de una sucursal?", 
                respuesta: "Sí. Podés tener una carta diferente por sucursal o compartir la misma en todas, según lo que más te convenga. En los planes avanzados, además, tenés reportes consolidados para ver qué se vende mejor en cada local." 
              }
            ]}
            maqueta={<InterfazMenu />}
          />
        } />

        {/* =========================================
            5. DESARROLLO A MEDIDA
           ========================================= */}
        <Route path="/desarrollo" element={
          <PaginaServicio 
            titulo="Ingeniería de Software a Medida"
            subtitulo="Soluciones Enterprise"
            descripcion="Cuando el software enlatado limita tu crecimiento, desarrollamos plataformas robustas diseñadas específicamente para los procesos únicos de tu organización. Escalabilidad, seguridad y eficiencia."
            detalles={[
              "Desarrollo de CRMs y ERPs internos personalizados",
              "Arquitecturas Cloud Escalables (AWS / Azure)",
              "Desarrollo de APIs REST y GraphQL",
              "Dashboards de Business Intelligence en tiempo real",
              "Apps Móviles Nativas (iOS / Android) o PWA",
              "Automatización de procesos complejos"
            ]}
            precios={[
              { 
                nombre: "MVP Startup", 
                precio: "Cotizar", 
                descripcion: "Lanzamiento de Producto", 
                caracteristicas: ["Alcance definido", "Tecnologías Ágiles", "Entrega en Sprints", "Código propiedad del cliente"] 
              },
              { 
                nombre: "Producto Escalable", 
                precio: "Cotizar", 
                descripcion: "Cuando el producto ya tracciona y hay que escalar.", 
                caracteristicas: [
                  "Revisión de arquitectura actual",
                  "Refactorizaciones y modularización",
                  "Automatización de procesos manuales",
                  "Monitoreo y logging configurados"
                ] 
              },
              { 
                nombre: "Enterprise", 
                precio: "Cotizar", 
                destacado: true, 
                descripcion: "Sistemas de Alta Escala", 
                caracteristicas: ["Microservicios", "Alta Disponibilidad (99.9%)", "Auditoría de Seguridad", "Soporte SLA 24/7"] 
              }
            ]}
            preguntas={[
              { 
                pregunta: "¿Cómo es el proceso de trabajo?", 
                respuesta: "Arrancamos con una etapa de discovery donde entendemos tu negocio, procesos y restricciones técnicas. A partir de ahí armamos un backlog priorizado y trabajamos en sprints cortos (generalmente de 2 semanas) con entregables visibles. En cada iteración revisamos juntos el avance, ajustamos prioridades y definimos los próximos pasos para que el producto crezca de forma controlada." 
              },
              { 
                pregunta: "¿Qué tecnologías utilizan?", 
                respuesta: "Nuestro stack principal incluye React/Next.js en frontend y Node.js o .NET en backend, con bases de datos relacionales (PostgreSQL, SQL Server) y no relacionales (MongoDB, entre otras) según la necesidad. También trabajamos con infraestructura en la nube (AWS, Azure, Render, Vercel) y buenas prácticas de seguridad, logs y monitoreo para que tu sistema sea mantenible en el tiempo." 
              },
              { 
                pregunta: "¿Pueden integrar sistemas que ya tengo?", 
                respuesta: "Sí. Analizamos las APIs o formas de exportar datos de las herramientas que usás actualmente (ERPs, CRMs, pasarelas de pago, etc.) y diseñamos integraciones a medida. Nuestro objetivo es que no tengas que duplicar información y que el nuevo software se convierta en una capa que ordene y conecte lo que ya existe." 
              }
            ]}
            maqueta={<InterfazDesarrollo />}
          />
        } />

      </Routes>
    </Router>
  );
}

export default App;