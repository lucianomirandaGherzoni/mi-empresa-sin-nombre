import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import "./NavBar.css";

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [hiddenOnFooter, setHiddenOnFooter] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const footer = document.querySelector('.footer-root');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth < 768) {
          setHiddenOnFooter(entry.isIntersecting);
        }
      },
      { rootMargin: "0px 0px 180px 0px", threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hiddenOnFooter ? "-150%" : 0, opacity: hiddenOnFooter ? 0 : 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="navbar-fixed"
    >
      <nav className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo-mobile">
          <img src="/assets/logo-02.png" alt="SURWEB" className="navbar-logo-img" />
        </Link>

        {/* Desktop Nav Items */}
        <div className="nav-links desktop-only">

          <Link
            to="/"
            className="nav-link"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === 0 && (
              <motion.div
                layoutId="navbar-hover"
                className="nav-hover-bg"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="nav-text">Inicio</span>
          </Link>

          <div className="nav-link nav-dropdown">
            <span className="nav-text">Productos</span>
            <div className="dropdown-content">
              <Link to="/landing-pages" className="dropdown-link">Sitios Web</Link>
              <Link to="/invitaciones" className="dropdown-link">Invitaciones</Link>
              <Link to="/turnos" className="dropdown-link">Turnos</Link>
              <Link to="/cartas" className="dropdown-link">Cartas</Link>
              <Link to="/desarrollo" className="dropdown-link">Desarrollo</Link>
            </div>
          </div>

          <Link
            to="/#que-hacemos"
            className="nav-link"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === 2 && (
              <motion.div
                layoutId="navbar-hover"
                className="nav-hover-bg"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="nav-text">Qué hacemos</span>
          </Link>

          <Link
            to="/#quienes-somos"
            className="nav-link"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === 3 && (
              <motion.div
                layoutId="navbar-hover"
                className="nav-hover-bg"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="nav-text">Quiénes somos</span>
          </Link>

          <Link
            to="/#faq"
            className="nav-link"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === 4 && (
              <motion.div
                layoutId="navbar-hover"
                className="nav-hover-bg"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="nav-text">FAQ</span>
          </Link>

        </div>

        {/* CTA Buttons (Desktop) */}
        <div className="nav-actions desktop-only">
          <button className="btn btn-outline-gray">Cotizar Proyecto</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mobile-menu-dropdown"
        >
          <div className="mobile-nav-list">

            <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>

            <div className="mobile-nav-group">
              <button
                className="mobile-nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                }}
                onClick={() => setMobileDropdownOpen((open) => !open)}
                aria-expanded={mobileDropdownOpen}
              >
                <span>Productos</span>
                {mobileDropdownOpen
                  ? <ChevronUp size={18} style={{ color: '#A1A1AA', transition: 'transform 0.2s' }} />
                  : <ChevronDown size={18} style={{ color: '#A1A1AA', transition: 'transform 0.2s' }} />
                }
              </button>
              {mobileDropdownOpen && (
                <div
                  style={{
                    border: '1px solid #A1A1AA',
                    borderRadius: '0.75rem',
                    margin: '0.25rem 0',
                    background: 'rgba(9,9,11,0.92)',
                    boxShadow: '0 4px 16px rgba(161,161,170,0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <Link
                    to="/landing-pages"
                    className="mobile-nav-link"
                    style={{ display: 'block', width: '100%', textAlign: 'left', borderBottom: '1px solid rgba(161,161,170,0.12)', margin: 0 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sitios Web
                  </Link>
                  <Link
                    to="/invitaciones"
                    className="mobile-nav-link"
                    style={{ display: 'block', width: '100%', textAlign: 'left', borderBottom: '1px solid rgba(161,161,170,0.12)', margin: 0 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Invitaciones
                  </Link>
                  <Link
                    to="/turnos"
                    className="mobile-nav-link"
                    style={{ display: 'block', width: '100%', textAlign: 'left', borderBottom: '1px solid rgba(161,161,170,0.12)', margin: 0 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Turnos
                  </Link>
                  <Link
                    to="/cartas"
                    className="mobile-nav-link"
                    style={{ display: 'block', width: '100%', textAlign: 'left', borderBottom: '1px solid rgba(161,161,170,0.12)', margin: 0 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cartas
                  </Link>
                  <Link
                    to="/desarrollo"
                    className="mobile-nav-link"
                    style={{ display: 'block', width: '100%', textAlign: 'left', margin: 0 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Desarrollo
                  </Link>
                </div>
              )}
            </div>

            <Link to="/#que-hacemos" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Qué hacemos
            </Link>

            <Link to="/#quienes-somos" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Quiénes somos
            </Link>

            <Link to="/#faq" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>

            <div className="divider" />
            <button className="btn btn-primary w-full shimmer-effect">Cotizar Proyecto</button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export { NavBar };