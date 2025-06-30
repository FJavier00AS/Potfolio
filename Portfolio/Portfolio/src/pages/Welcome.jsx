import { useEffect, useRef } from 'react';
import '../App.css';
import fotoPerfil from '../assets/fotoPerfil.jpg';
import { gsap } from 'gsap';

export function Welcome() {
    const fotoRef = useRef(null);

    useEffect(() => {
        // Animación de entrada con rebote suave y escala
        gsap.fromTo(fotoRef.current,
            { opacity: 0, y: 100, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
        );
    }, []);

    return (
        <div className="container html mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            {/* Imagen con animación */}
            <div className="md:col-span-5 flex justify-center">
                <img
                    ref={fotoRef}
                    src={fotoPerfil}
                    alt="Foto de perfil"
                    className="profile-photo glow"
                />
            </div>

            {/* Contenido de bienvenida */}
            <div className="md:col-span-7 text-white space-y-4 animate-fade-in-up">
                <h1 className="text-4xl font-extrabold text-indigo-400 animate-slide-down-in">
                    ¡Hola! <span className="wave-hand">👋</span> Soy
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold typing">
                    Javier Martín de Soto
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Soy un <span className="text-yellow-400 font-semibold">Desarrollador Full Stack</span> con pasión por crear experiencias web modernas, dinámicas y accesibles. Me especializo en tecnologías como React, Node.js y Tailwind CSS.
                </p>

                <p className="text-md text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    En este portfolio encontrarás una selección de mis proyectos, habilidades y experiencia profesional.
                </p>
            </div>
        </div>
    );
}

export const icon = "fa-solid fa-door-open";