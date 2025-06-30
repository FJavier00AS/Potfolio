import { useEffect } from 'react';

function useScrollAnimation() {
    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}

export default useScrollAnimation;




export function Experiencia() {

    const skills = [
        {
            nombre: "Angular",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
        },
        {
            nombre: "SQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
        },
        {
            nombre: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        },
        {
            nombre: "GitHub",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        },
        {
            nombre: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
            nombre: "TailwindCSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        },
        {
            nombre: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        },
        {
            nombre: "JavaScript",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            nombre:"TypeScript",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        },
        {
            nombre:"HTML5",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            nombre:"CSS3",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
            nombre: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
            nombre: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
            nombre: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        },
        {
            nombre: "Kotlin",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        },
        {
            nombre: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
        },
        {
            nombre: "Android Studio",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
        },
        {
            nombre:"Kibana",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original.svg"
        },

        {
            nombre: "Groovy",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/groovy/groovy-original.svg"
        },
        {
            nombre:"HandleBars",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original.svg"
        },
        {
            nombre:"Mariadb",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg"
        },
        {
            nombre:"Matlab",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"
        }

    ];

    const trabajos = [
        {
            cargo: "Frontend Developer",
            empresa: "Agencia Creativa XYZ",
            tiempo: "2023 - Actualidad",
            descripcion: "Desarrollo de interfaces modernas con React y TailwindCSS. Optimización del rendimiento web y diseño UX/UI responsivo."
        },
        {
            cargo: "Desarrollador Full Stack",
            empresa: "Diagonal Company",
            tiempo: "2024 - 2025",
            descripcion: "Responsable de la configuración avanzada, mantenimiento y desarrollo de personalizaciones dentro del entorno Recordm, integrando funcionalidades complejas mediante JavaScript, Groovy y Handlebars, optimizando interfaces de usuario, procesos de negocio y rendimiento mediante técnicas de scripting, definición de librerías y consumo de APIs internas."
        }
    ];

    const estudios = [
        {
            grado: "Ingeniería en Sistemas",
            institucion: "Universidad Nacional",
            tiempo: "2017 - 2022"
        },
        {
            grado: "Curso Profesional de React",
            institucion: "Platzi / Udemy",
            tiempo: "2022"
        }
    ];
    useScrollAnimation();
    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl typing font-bold text-center text-white mb-10">
                Experiencia y Estudios
            </h2>



            {/* Skills con íconos */}
            <div className="mb-12 fade-up animate-on-scroll">
                <h3 className="text-xl font-semibold text-indigo-200 mb-4">Lenguajes y Tecnologías</h3>

                <div className="flex flex-wrap gap-4 ">
                    {skills.map(({ nombre, icon }) => (
                        <div
                            key={nombre}
                            className="skill-badge"
                        >
                            <img src={icon} alt={nombre} className="w-6 h-6" />
                            <span >
                                {nombre}
                            </span>
                        </div>



                    ))}
                </div>
            </div>

            {/* Experiencia Laboral */}
            <div className="mb-12 zoom-in animate-on-scroll">
                <h3 className="text-xl font-semibold text-indigo-100 mb-4">Experiencia Profesional</h3>
                <ul className="space-y-6">
                    {trabajos.map(({ cargo, empresa, tiempo, descripcion }) => (
                        <li key={cargo} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                            <h4 className="text-lg font-bold text-white">{cargo} - <span className="text-indigo-300">{empresa}</span></h4>
                            <p className="text-sm text-gray-400 mb-2">{tiempo}</p>
                            <p className="text-gray-300">{descripcion}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Formación Académica */}
            <div className="slide-left animate-on-scroll">
                <h3 className="text-xl font-semibold text-indigo-200 mb-4">Formación Académica</h3>
                <ul className="space-y-4">
                    {estudios.map(({ grado, institucion, tiempo }) => (
                        <li key={grado} className="bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-lg transition">
                            <h4 className="text-white font-semibold">{grado}</h4>
                            <p className="text-sm text-gray-400">{institucion} - {tiempo}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export const icon = "fa-solid fa-flask";
