import { useEffect, useState } from 'react';
import './App.css';
import { Welcome } from "./pages/Welcome.jsx";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Navegacion } from "./components/Navegacion.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Experiencia } from "./pages/Experiencia.jsx";

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [animateClass, setAnimateClass] = useState('');
    const [bgGradient, setBgGradient] = useState('');

    useEffect(() => {
        const root = document.documentElement;
       /* root.classList.toggle('dark', theme === 'dark');
        root.classList.toggle('light', theme === 'light');
        localStorage.setItem('theme', theme);*/
        console.log('Theme:', theme)


        const animClass = theme === 'dark' ? 'gradient-animate-dark' : 'gradient-animate-light';
        const finalBg = theme === 'dark'
            ? 'bg-final-dark'
            : 'bg-final-light';
        setAnimateClass(animClass);
        console.log('animclass:', animClass)
        const timeout = setTimeout(() => {
            setAnimateClass(animClass);
            setBgGradient(finalBg);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [theme]);

    return (
        <Router>
            <div className={`min-h-screen w-screen grid pb-5 transition-colors duration-500 ${animateClass} `}>

                <Routes>
                    <Route path="/" element={<Welcome message="Bienvenido" />} />
                    <Route path="/welcome" element={<Welcome message="Bienvenido" />} />
                    <Route path="/profile" element={<Profile theme={theme} />} />
                    <Route path="/experiencia" element={<Experiencia />} />
                </Routes>
            </div>
            <div className="w-screen flex bottom-0">
                <Navegacion onThemeChange={setTheme} />
            </div>
        </Router>
    );
}
export default App;
