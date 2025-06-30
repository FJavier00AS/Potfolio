import { useEffect, useRef } from 'react';
import { drawSVGLogo, gravityAnimation, fadeIn, chainEntrance } from '../animations/gsapAnimations';
import {
    ReactLogo,
    VueLogo,
    PythonLogo,
    KotlinLogo,
    AngularLogo,
    HtmlLogo,
    SqlLogo,
    NodejsLogo,
    Css3Logo,
    JavaLogo,
    JavaScriptLogo,
    TypeScriptLogo,
    MongoDbLogo,
    CSharpLogo,
    FireBaseLogo,
    GroovyLogo
} from '../icons/SVGIcons';

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

export function Experiencia() {
    // SVG refs for animations
    const svgRefs = {
        react: useRef(null),
        vue: useRef(null),
        python: useRef(null),
        kotlin: useRef(null),
        angular: useRef(null),
        html: useRef(null),
        sql: useRef(null),
        nodejs: useRef(null),
        css: useRef(null),
        java: useRef(null),
        javascript: useRef(null),
        typescript: useRef(null),
        mongodb: useRef(null),
        csharp: useRef(null),
        firebase: useRef(null),
        groovy: useRef(null)
    };

    const skills = [
        {
            nombre: "Angular",
            component: AngularLogo,
            ref: svgRefs.angular,
            category: "Frontend"
        },
        {
            nombre: "React",
            component: ReactLogo,
            ref: svgRefs.react,
            category: "Frontend"
        },
        {
            nombre: "Vue.js",
            component: VueLogo,
            ref: svgRefs.vue,
            category: "Frontend"
        },
        {
            nombre: "JavaScript",
            component: JavaScriptLogo,
            ref: svgRefs.javascript,
            category: "Language"
        },
        {
            nombre: "TypeScript",
            component: TypeScriptLogo,
            ref: svgRefs.typescript,
            category: "Language"
        },
        {
            nombre: "HTML5",
            component: HtmlLogo,
            ref: svgRefs.html,
            category: "Frontend"
        },
        {
            nombre: "CSS3",
            component: Css3Logo,
            ref: svgRefs.css,
            category: "Frontend"
        },
        {
            nombre: "Java",
            component: JavaLogo,
            ref: svgRefs.java,
            category: "Language"
        },
        {
            nombre: "Python",
            component: PythonLogo,
            ref: svgRefs.python,
            category: "Language"
        },
        {
            nombre: "Kotlin",
            component: KotlinLogo,
            ref: svgRefs.kotlin,
            category: "Language"
        },
        {
            nombre: "C#",
            component: CSharpLogo,
            ref: svgRefs.csharp,
            category: "Language"
        },
        {
            nombre: "Groovy",
            component: GroovyLogo,
            ref: svgRefs.groovy,
            category: "Language"
        },
        {
            nombre: "Node.js",
            component: NodejsLogo,
            ref: svgRefs.nodejs,
            category: "Backend"
        },
        {
            nombre: "SQL",
            component: SqlLogo,
            ref: svgRefs.sql,
            category: "Database"
        },
        {
            nombre: "MongoDB",
            component: MongoDbLogo,
            ref: svgRefs.mongodb,
            category: "Database"
        },
        {
            nombre: "Firebase",
            component: FireBaseLogo,
            ref: svgRefs.firebase,
            category: "Backend"
        }
    ];

    const trabajos = [
        {
            cargo: "Desarrollador Full Stack",
            empresa: "Diagonal Company",
            tiempo: "2024 - 2025",
            descripcion: "Responsable de la configuración avanzada, mantenimiento y desarrollo de personalizaciones dentro del entorno Recordm, integrando funcionalidades complejas mediante JavaScript, Groovy y Handlebars, optimizando interfaces de usuario, procesos de negocio y rendimiento mediante técnicas de scripting, definición de librerías y consumo de APIs internas.",
            tecnologias: ["JavaScript", "Groovy", "HTML5", "CSS3"]
        },
        {
            cargo: "Frontend Developer",
            empresa: "Agencia Creativa XYZ",
            tiempo: "2023 - Actualidad",
            descripcion: "Desarrollo de interfaces modernas con React y TailwindCSS. Optimización del rendimiento web y diseño UX/UI responsivo.",
            tecnologias: ["React", "JavaScript", "CSS3", "HTML5"]
        }
    ];

    const estudios = [
        {
            grado: "Ingeniería en Sistemas",
            institucion: "Universidad Nacional",
            tiempo: "2017 - 2022",
            descripcion: "Formación integral en desarrollo de software, bases de datos, algoritmos y estructuras de datos."
        },
        {
            grado: "Curso Profesional de React",
            institucion: "Platzi / Udemy",
            tiempo: "2022",
            descripcion: "Especialización en desarrollo frontend moderno con React, hooks, context API y mejores prácticas."
        }
    ];

    useScrollAnimation();

    useEffect(() => {
        // Animate title
        gravityAnimation(".gravity-title");
        
        // Animate all SVG logos
        Object.values(svgRefs).forEach(ref => {
            if (ref.current) {
                drawSVGLogo(ref.current);
            }
        });

        // Chain entrance animations for sections
        setTimeout(() => {
            chainEntrance(".experience-card");
        }, 500);

        setTimeout(() => {
            fadeIn(".skills-grid", 1.5);
        }, 1000);

    }, []);

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
            {/* Header */}
            <div className="text-center">
                <h2 className="gravity-title text-4xl font-bold text-white mb-4">
                    Experiencia y Estudios
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Skills Section with Animated SVGs */}
            <div className="skills-grid fade-up animate-on-scroll">
                <h3 className="text-2xl font-semibold text-indigo-200 mb-8 text-center">
                    Tecnologías y Herramientas
                </h3>

                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <div key={category} className="mb-12">
                        <h4 className="text-lg font-medium text-indigo-300 mb-6 text-center">
                            {category === 'Frontend' && '🎨 Frontend'}
                            {category === 'Backend' && '⚙️ Backend'}
                            {category === 'Language' && '💻 Lenguajes'}
                            {category === 'Database' && '🗄️ Bases de Datos'}
                        </h4>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                            {categorySkills.map(({ nombre, component: Component, ref }) => (
                                <div
                                    key={nombre}
                                    className="group flex flex-col items-center space-y-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <Component 
                                            ref={ref} 
                                            className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                                        {nombre}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Experience Section */}
            <div className="zoom-in animate-on-scroll">
                <h3 className="text-2xl font-semibold text-indigo-100 mb-8 text-center">
                    💼 Experiencia Profesional
                </h3>
                <div className="space-y-8">
                    {trabajos.map(({ cargo, empresa, tiempo, descripcion, tecnologias }, index) => (
                        <div 
                            key={cargo} 
                            className="experience-card bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">
                                        {cargo}
                                    </h4>
                                    <p className="text-lg text-indigo-300 font-semibold">
                                        {empresa}
                                    </p>
                                </div>
                                <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full mt-2 md:mt-0">
                                    {tiempo}
                                </span>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed mb-4">
                                {descripcion}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {tecnologias.map(tech => (
                                    <span 
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <div className="slide-left animate-on-scroll">
                <h3 className="text-2xl font-semibold text-indigo-200 mb-8 text-center">
                    🎓 Formación Académica
                </h3>
                <div className="space-y-6">
                    {estudios.map(({ grado, institucion, tiempo, descripcion }, index) => (
                        <div 
                            key={grado} 
                            className="experience-card bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">
                                        {grado}
                                    </h4>
                                    <p className="text-purple-300 font-medium">
                                        {institucion}
                                    </p>
                                </div>
                                <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full mt-2 md:mt-0">
                                    {tiempo}
                                </span>
                            </div>
                            
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center fade-up animate-on-scroll">
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                        ¿Interesado en colaborar?
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Siempre estoy abierto a nuevos desafíos y oportunidades de crecimiento profesional.
                    </p>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                        Contáctame
                    </button>
                </div>
            </div>
        </section>
    );
}

export const icon = "fa-solid fa-flask";