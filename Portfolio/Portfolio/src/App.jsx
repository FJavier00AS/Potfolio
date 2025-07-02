import { useEffect, useState } from 'react';
import './App.css';
import { Welcome } from "./pages/Welcome.jsx";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navegacion } from "./components/Navegacion.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Experiencia } from "./pages/Experiencia.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Contact } from "./pages/Contact.jsx";

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        root.classList.toggle('light', theme === 'light');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <Router>
            <div className={`min-h-screen w-screen transition-colors duration-500 ${
                theme === 'dark' 
                    ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
                    : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100'
            }`}>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/profile" element={<Profile theme={theme} />} />
                    <Route path="/experiencia" element={<Experiencia />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Navegacion onThemeChange={setTheme} />
            </div>
        </Router>
    );
}

export default App;