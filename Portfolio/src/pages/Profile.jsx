// src/components/Profile.jsx
import React, {useEffect, useRef, useState} from "react";
import "../styles/prueba.css";
import { animateTextGroup, hoverPulse, drawSVGLogo,gravityAnimation } from "../animations/gsapAnimations";
import {
    ReactLogo,
    VueLogo,
    PythonLogo,
    KotlinLogo,
    AngularLogo,
    HtmlLogo,
    SqlLogo,
    NodejsLogo, Css3Logo, JavaLogo, JavaScriptLogo, TypeScriptLogo, MongoDbLogo, CSharpLogo, FireBaseLogo, GroovyLogo
} from "../icons/SVGIcons";
export function Profile({theme}) {
    const svgRefReact = useRef(null);
    const svgRefVue = useRef(null);
    const svgRefPython = useRef(null);
    const svgRefKotlin = useRef(null);
    const svgRefAngular = useRef(null);
    const svgRefHtml =useRef(null);
    const svgRefSql =useRef(null);
    const svgRefNodejs =useRef(null);
    const svgRefCss =useRef(null);
    const svgRefJava =useRef(null);
    const svgRefJavaScript =useRef(null);
    const svgRefTypeScript =useRef(null);
    const svgRefMongoDb =useRef(null);
    const svgRefCSharp =useRef(null);
    const svgRefFireBase =useRef(null);
    const svgRefGroovy =useRef(null);


    const [ setTheme] = useState(() => localStorage.getItem('theme'));
    const colorGroovy = theme === 'light' ? '#333' : '#fff';
    console.log("Profile theme:" + theme)


    useEffect(() => {
        animateTextGroup();
        hoverPulse(".btn-hover");
        drawSVGLogo(svgRefReact.current);
        drawSVGLogo(svgRefVue.current);
        drawSVGLogo(svgRefPython.current);
        drawSVGLogo(svgRefKotlin.current);
        drawSVGLogo(svgRefAngular.current);
        drawSVGLogo(svgRefHtml.current);
        drawSVGLogo(svgRefSql.current);
        drawSVGLogo(svgRefNodejs.current);
        drawSVGLogo(svgRefCss.current);
        drawSVGLogo(svgRefJava.current);
        drawSVGLogo(svgRefJavaScript.current);
        drawSVGLogo(svgRefTypeScript.current);
        drawSVGLogo(svgRefMongoDb.current);
        drawSVGLogo(svgRefCSharp.current);
        drawSVGLogo(svgRefFireBase.current);
        drawSVGLogo(svgRefGroovy.current);

        gravityAnimation(".gravity-text");

        }, []);


    return (
        <div className="profile-container ">
            <h2 className="gravity-text section-title text-white mt-10">React Logo con DrawSVG</h2>
            <div className="grid md:grid-cols-4 grid-cols-2 justify-center gap-4 items-center">
                <ReactLogo  ref={svgRefReact}/>
                <VueLogo  ref={svgRefVue}/>
                <PythonLogo  ref={svgRefPython}/>
                <KotlinLogo  ref={svgRefKotlin}/>
                <AngularLogo ref={svgRefAngular}/>
                <HtmlLogo ref={svgRefHtml} />
                <SqlLogo ref={svgRefSql}/>
                <NodejsLogo ref={svgRefNodejs}/>
                <Css3Logo ref={svgRefCss}/>
                <JavaLogo ref={svgRefJava}/>
                <JavaScriptLogo ref={svgRefJavaScript}/>
                <TypeScriptLogo ref={svgRefTypeScript}/>
                <MongoDbLogo ref={svgRefMongoDb}/>
                <CSharpLogo ref={svgRefCSharp}/>
                <FireBaseLogo ref={svgRefFireBase}/>
                <GroovyLogo color={colorGroovy} ref={svgRefGroovy}/>
            </div>

            {/*
            <h2 className="section-title text-white text-center mb-4">Text Animations (every 5s)</h2>
            <div className="text-group grid grid-cols-4 gap-4 justify-center">
                <p className="text-white animated-text fade-text">Texto Fade</p><span className="text-white">Desvanece</span>
                <p className="text-white animated-text scale-text">Texto Scale</p><span className="text-white">Escala</span>
                <p className="text-white animated-text rotate-text">Texto Rotate</p><span className="text-white">Rotación</span>
                <p className="text-white animated-text bounce-text">Texto Bounce</p><span className="text-white">Rebote</span>
                <p className="text-white animated-text slide-text">Texto Slide</p><span className="text-white">Desde la izquierda</span>
                <p className="text-white animated-text slide-right-text">Texto Slide Right</p><span className="text-white">Desde la derecha</span>
                <p className="text-white animated-text skew-text">Texto Skew</p><span className="text-white">Inclinación</span>
                <p className="text-white animated-text flip-text">Texto Flip</p><span className="text-white">Giro X</span>
                <p className="text-white animated-text zoom-text">Texto Zoom</p><span className="text-white">Zoom</span>
                <p className="text-white animated-text flash-text">Texto Flash</p><span className="text-white">Flash</span>
            </div>

            <h2 className="section-title text-white mt-10">Button Hover Animations</h2>
            <div className="button-group">
                <button className="text-white btn btn-hover glow">Glow</button>
                <button className="text-white btn btn-hover rise">Rise Up</button>
                <button className="text-white btn btn-hover shadow-pop">Shadow Pop</button>
                <button className="text-white btn btn-hover neon">Neon</button>
                <button className="text-white btn btn-hover ripple">Ripple</button>
                <button className="text-white btn btn-hover flip">Flip</button>
                <button className="text-white btn btn-hover heartbeat">Heartbeat</button>
                <button className="text-white btn btn-hover expand">Expand</button>
                <button className="text-white btn btn-hover shine">Shine</button>
                <button className="text-white btn btn-hover jump">Jump</button>
            </div>*/}
        </div>
    );
}

export const icon = "fa-solid fa-user";
