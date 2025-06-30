// src/utils/gsapAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
// Registrar todos los plugins disponibles
gsap.registerPlugin(
    ScrollTrigger,
    DrawSVGPlugin,
    MorphSVGPlugin,
    MotionPathPlugin,
    Flip,
    Draggable,
    SplitText,
    TextPlugin,
    Physics2DPlugin
);

/* 1. Animaciones compuestas: Timeline con scroll y SVG */
export function complexScrollDraw(target, svg) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
    });
    tl.from(target, { opacity: 0, y: 100, duration: 1 })
        .from(svg, { drawSVG: "0%", duration: 2 });
}

/* 2. Transformar entre formas SVG */
export function morphShape(from, to) {
    gsap.to(from, {
        morphSVG: to,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
    });
}

/* 3. Movimiento a lo largo de un path */
export function animateAlongPath(target, path) {
    gsap.to(target, {
        duration: 2,
        motionPath: {
            path,
            align: path,
            autoRotate: true,
        },
        ease: "power1.inOut",
    });
}

/* 4. Flip: reorganizar visualmente */
export function flipReorder(state, targets, duration = 0.5) {
    Flip.from(state, {
        state,
        duration,
        absolute: true,
        targets,
    });
}

/* 5. Draggable: hacer elementos arrastrables */
export function makeDraggable(target) {
    Draggable.create(target, {
        type: "x,y",
        inertia: true,
    });
}

/* 6. SplitText con animación de texto */
export function animateText(target) {
    const split = new SplitText(target, { type: "chars" });
    gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.5,
    });
    gsap.to(target, { text: "¡Animado!", duration: 1 });
}

/* 7. Efecto drawSVG en hover (subrayado animado en botones) */
export function buttonDrawHover(btnSelector, svgLine) {
    const tween = gsap.fromTo(svgLine, { drawSVG: "0%" }, {
        drawSVG: "100%",
        duration: 0.5,
        paused: true,
    });
    document.querySelector(btnSelector).addEventListener("mouseenter", () => tween.play(0));
    document.querySelector(btnSelector).addEventListener("mouseleave", () => tween.reverse());
}

/* 8. Hover pulse */
export function hoverPulse(target) {
    gsap.set(target, { transformOrigin: "center center" });
    document.querySelectorAll(target).forEach(el => {
        el.addEventListener("mouseenter", () => gsap.to(el, { scale: 1.1, duration: 0.2 }));
        el.addEventListener("mouseleave", () => gsap.to(el, { scale: 1, duration: 0.2 }));
    });
}

/* 9. FadeIn básico */
export function fadeIn(target, duration = 1) {
    gsap.from(target, { opacity: 0, duration });
}

/* 10. Shake */
export function shake(target) {
    gsap.fromTo(target, {
        x: -5
    }, {
        x: 5,
        yoyo: true,
        repeat: 3,
        duration: 0.1,
        ease: "power1.inOut"
    });
}

/* 11. Timeline encadenado de entrada */
export function chainEntrance(targets) {
    gsap.from(targets, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
    });
}

/* 12. Animación tipo "explosión" de texto */
export function explodeText(target) {
    const split = new SplitText(target, { type: "chars" });
    gsap.from(split.chars, {
        scale: 2,
        opacity: 0,
        rotation: 180,
        y: -50,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(2)"
    });
}

/* 13. Loop infinito con rebote */
export function bouncingLoop(target) {
    gsap.to(target, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power1.inOut"
    });
}

/* 14. Floating efecto */
export function floatingEffect(target) {
    gsap.to(target, {
        y: "+=10",
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    });
}

/* 15. Rotación continua */
export function infiniteRotate(target, speed = 10) {
    gsap.to(target, {
        rotation: 360,
        duration: speed,
        ease: "none",
        repeat: -1
    });
}

/* 16. Expandir/contraer */
export function expandContract(target) {
    gsap.fromTo(target, {
        scale: 1
    }, {
        scale: 1.1,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
    });
}

/* 17. Entrada tipo "drop" */
export function dropIn(target) {
    gsap.from(target, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "bounce.out"
    });
}

/* 18. Escribir texto (con TextPlugin) */
export function typingEffect(target, message) {
    gsap.to(target, {
        duration: 2,
        text: message,
        ease: "none"
    });
}

/* 19. Rotación de entrada con rebote */
export function rotateBounceIn(target) {
    gsap.from(target, {
        rotation: -360,
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "bounce.out"
    });
}

/* 20. Aparecer desde el fondo */
export function popFromBack(target) {
    gsap.from(target, {
        z: -500,
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power4.out"
    });
}

export function animateTextGroup() {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    tl.fromTo(".fade-text", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(".scale-text", { scale: 0.5 }, { scale: 1, duration: 1 }, "<")
        .fromTo(".rotate-text", { rotation: 0 }, { rotation: 360, duration: 1 }, "<")
        .fromTo(".bounce-text", { y: -50 }, { y: 0, ease: "bounce.out", duration: 1 }, "<")
        .fromTo(".slide-text", { x: -200 }, { x: 0, duration: 1 }, "<")
        .fromTo(".slide-right-text", { x: 200 }, { x: 0, duration: 1 }, "<")
        .fromTo(".skew-text", { skewX: 45 }, { skewX: 0, duration: 1 }, "<")
        .fromTo(".flip-text", { rotationX: 180 }, { rotationX: 0, duration: 1 }, "<")
        .fromTo(".zoom-text", { scale: 2 }, { scale: 1, duration: 1 }, "<")
        .fromTo(".flash-text", { opacity: 1 }, { opacity: 0.2, yoyo: true, repeat: 3, duration: 0.3 }, "<");
}

export function drawSVGLogo(svgRef) {
    if (!svgRef) return;

    const elements = svgRef.querySelectorAll("path, ellipse, line, polyline, polygon, circle,rect, g, text");
    gsap.set(elements, { drawSVG: "0%" });

    elements.forEach(el => {
        const strokeColor = el.getAttribute("stroke");
        const fillColor = el.getAttribute("fill");
        const hasFill = fillColor && fillColor !== "none" ;
        const hasStroke = !!strokeColor;

        const animProps = {
            ease: "power2.out",
            repeat: -1,


        };
        if (hasFill) {
            gsap.fromTo(
                el,
                { fillOpacity: 0 },
                {
                    ...animProps,
                    fillOpacity: 1,
                    duration: 8,
                    repeatDelay:2
                }
            );
        }

        // Si tiene stroke, animar drawSVG
        if (hasStroke) {
            gsap.fromTo(
                el,
                {
                    fillOpacity:0,
                    drawSVG: "0%" ,

                },
                { ...animProps,
                    drawSVG: "101%" ,
                    duration: 6,
                    repeatDelay:4


                }
            );
        }

    });
}


export function gravityAnimation(target) {
    const split = new SplitText(target, { type: "chars" });
    gsap.fromTo(
        split.chars,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, ease: "bounce.out", duration: 1, stagger: 0.2 }
    );
}
