import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import "./NavBar.css";

const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Productos",
    dropdown: [
      { label: "Sitios Web", href: "/landing-pages" },
      { label: "Invitaciones", href: "/invitaciones" },
      { label: "Turnos", href: "/turnos" },
      { label: "Cartas", href: "/cartas" },
      { label: "Desarrollo", href: "/desarrollo" }
    ]
  },
  { label: "Qué hacemos", href: "/#que-hacemos" },
  { label: "Quiénes somos", href: "/#quienes-somos" },
  { label: "FAQ", href: "/#faq" },
];

export function NavBar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Efecto para bloquear el scroll cuando el menú móvil está abierto (opcional)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="navbar-fixed"
    >
      <nav className="navbar-container">
        {/* Logo */}
       
        <Link to="/" className="logo-mobile"> Origen digital</Link>

        {/* Desktop Nav Items */}
        <div className="nav-links desktop-only">
          {navItems.map((item, index) => (
            item.dropdown ? (
              <div className="nav-link nav-dropdown" key={item.label}>
                <span className="nav-text">{item.label}</span>
                <div className="dropdown-content">
                  {item.dropdown.map((dropItem) => (
                    <Link key={dropItem.label} to={dropItem.href} className="dropdown-link">
                      {dropItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.href ? (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="nav-hover-bg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="nav-text">{item.label}</span>
              </Link>
            ) : (
              <span key={item.label} className="nav-link nav-text">{item.label}</span>
            )
          ))}
        </div>

        {/* CTA Buttons (Desktop) */}
        <div className="nav-actions desktop-only">
          <button className="btn btn-primary shimmer-effect">Cotizar Proyecto</button>
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
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="mobile-nav-group">
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
                    <span>{item.label}</span>
                    {mobileDropdownOpen ? <ChevronUp size={18} style={{ color: '#B5A2D2', transition: 'transform 0.2s' }} /> : <ChevronDown size={18} style={{ color: '#B5A2D2', transition: 'transform 0.2s' }} />}
                  </button>
                  {mobileDropdownOpen && (
                    <div
                      style={{
                        border: '1px solid #B5A2D2',
                        borderRadius: '0.75rem',
                        margin: '0.25rem 0',
                        background: 'rgba(9,9,11,0.92)',
                        boxShadow: '0 4px 16px rgba(181,162,210,0.08)',
                        overflow: 'hidden',
                      }}
                    >
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          to={dropItem.href}
                          className="mobile-nav-link"
                          style={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            borderBottom: '1px solid rgba(181,162,210,0.12)',
                            margin: 0,
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="divider" />
            <button className="btn btn-primary w-full shimmer-effect">Cotizar Proyecto</button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}