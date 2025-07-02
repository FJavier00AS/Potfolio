import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import '../App.css';
import fotoPerfil from '../assets/fotoPerfil.jpg';
import { gsap } from 'gsap';

export function Welcome() {
    const fotoRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        // Animación de entrada con GSAP
        const tl = gsap.timeline();
        
        tl.fromTo(fotoRef.current,
            { opacity: 0, y: 100, scale: 0.8, rotation: -10 },
            { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }
        )
        .fromTo(heroRef.current.children,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
            "-=1"
        );
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="flex-1 flex items-center justify-center px-4 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Imagen con efectos mejorados */}
                    <motion.div 
                        className="flex justify-center lg:order-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <img
                                ref={fotoRef}
                                src={fotoPerfil}
                                alt="Javier Martín de Soto"
                                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm">Disponible</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contenido principal */}
                    <motion.div 
                        ref={heroRef}
                        className="text-center lg:text-left lg:order-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
                                👋 ¡Hola! Soy desarrollador Full Stack
                            </span>
                        </motion.div>

                        <motion.h1 
                            variants={itemVariants}
                            className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
                        >
                            Javier Martín
                            <br />
                            <span className="text-4xl lg:text-6xl text-blue-400">de Soto</span>
                        </motion.h1>

                        <motion.p 
                            variants={itemVariants}
                            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
                        >
                            Transformo ideas en experiencias digitales excepcionales. 
                            Especializado en <span className="text-blue-400 font-semibold">React</span>, 
                            <span className="text-green-400 font-semibold"> Node.js</span> y 
                            <span className="text-purple-400 font-semibold"> tecnologías modernas</span>.
                        </motion.p>

                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <Download size={20} />
                                Descargar CV
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                <Mail size={20} />
                                Contactar
                            </motion.button>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="flex gap-6 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="https://github.com/javiermartin"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                            >
                                <Github size={24} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/javiermartin"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                            >
                                <Linkedin size={24} />
                            </motion.a>
                            <motion.a
                                href="mailto:javier@example.com"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="p-3 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors"
                            >
                                <Mail size={24} />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll indicator */}
            <motion.div 
                className="flex justify-center pb-8"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="text-gray-400" size={32} />
            </motion.div>

            {/* Stats Section */}
            <section className="py-20 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
                            <div className="text-gray-400">Años de experiencia</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
                            <div className="text-gray-400">Proyectos completados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                            <div className="text-gray-400">Tecnologías dominadas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                            <div className="text-gray-400">Satisfacción del cliente</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export const icon = "fa-solid fa-home";