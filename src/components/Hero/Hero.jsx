import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LogoMarquee } from '../LogoMarquee/LogoMarquee.jsx';
import './Hero.css';

const variantesRevelado = {
    oculto: { y: "100%" },
    visible: (i) => ({
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: i * 0.1,
        },
    }),
};

function FrasesAnimadasHero() {
    return (
        <motion.span
            className="bloque frase-hero-animada"
            variants={variantesRevelado}
            initial="oculto"
            animate="visible"
            custom={1}
        >
            Construida a medida.
        </motion.span>
    );
}

export function Hero() {
    return (
        <section className="seccion-heroe">
            <div className="fondo-gradiente" />
            <div className="grid-corner" />
            
            <div className="contenedor-heroe">
                <h1 className="titulo-principal">
                    <span className="mascara-texto">
                        <motion.span
                            className="bloque peso-fino titulo-negocio"
                            variants={variantesRevelado}
                            initial="oculto"
                            animate="visible"
                            custom={0}
                        >
                            <em>Presencia digital</em>
                        </motion.span>
                    </span>
                    <span className="mascara-texto">
                        <FrasesAnimadasHero />
                    </span>
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="descripcion-heroe startup-centro"
                >
            {/*         Somos una startup digital creativa */}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grupo-botones"
                >
                    <button className="boton-heroe primario">
                        Solicitar Cotización 
                    </button>
                    <button className="boton-heroe contorno">
                        Ver Proyectos
                    </button>
                </motion.div>
            </div>
            
            {/* Scroll Indicator - Solo móviles */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="scroll-indicator"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                aria-label="Desplazar hacia abajo"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={28} />
                </motion.div>
            </motion.button>
            
            {/* LogoMarquee integrado */}
            <LogoMarquee />
        </section>
    );
}