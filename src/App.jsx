import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- COMPONENTES GLOBALES ---
import { NavBar } from './components/NavBar/NavBar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { QuienesSomos } from './components/QuienesSomos/QuienesSomos.jsx';
import { NuestrosProyectos } from './components/NuestrosProyectos/NuestrosProyectos.jsx';
import { FAQ } from './components/PreguntasFrecuentes/PreguntasFrecuentes.jsx';
import { LlamadoFinal } from './components/LlamadoFinal/LlamadoFinal.jsx';
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat.jsx';

// --- BENTO GRID ---
import { BentoGrid } from './components/BentoGrid/BentoGrid.jsx';

// --- PAGINAS DE SERVICIOS ---
import { PaginaLandingPages } from './pages/LandingPages/LandingPages.jsx';
import { PaginaInvitaciones } from './pages/Invitaciones/Invitaciones.jsx';
import { PaginaTurnos } from './pages/Turnos/Turnos.jsx';
import { PaginaCartas } from './pages/Cartas/Cartas.jsx';
import { PaginaDesarrollo } from './pages/Desarrollo/Desarrollo.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <BentoGrid />
            <QuienesSomos />
            <NuestrosProyectos />
            <FAQ />
            <LlamadoFinal />
          </main>
        } />

        <Route path="/landing-pages" element={<PaginaLandingPages />} />
        <Route path="/invitaciones" element={<PaginaInvitaciones />} />
        <Route path="/turnos" element={<PaginaTurnos />} />
        <Route path="/cartas" element={<PaginaCartas />} />
        <Route path="/desarrollo" element={<PaginaDesarrollo />} />

      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
