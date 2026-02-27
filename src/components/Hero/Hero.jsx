import { motion } from 'framer-motion';
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
        <span className="bloque frase-hero-animada">Con pasión y dedicación</span>
    );
}

export function Hero() {
    return (
        <section className="seccion-heroe">
            <div className="fondo-gradiente" />
            <div className="grid-corner" />
            
            <div className="resplandor-acento" />
            
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
                            Creamos experiencias digitales.
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
                    Somos una startup digital creativa
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
        </section>
    );
}