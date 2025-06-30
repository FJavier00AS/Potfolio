import { useState, useEffect } from 'react';

const routes = import.meta.glob('../pages/*.jsx', { eager: true });

const menuItems = Object.entries(routes).map(([path, module]) => {
    const name = path.split('/').pop().replace('.jsx', '');
    return {
        path: '/' + name.toLowerCase(),
        icon: module.icon || '❓',
        label: name,
    };
});

export function Navegacion({ onThemeChange }) {
    const [expanded, setExpanded] = useState(false);
    const [selectedPath, setSelectedPath] = useState(null);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        document.documentElement.classList.toggle('light', !darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleMenu = () => setExpanded(prev => !prev);
    const handleItemClick = (path) => setSelectedPath(path);
    const toggleDarkMode = () => {
        const newTheme = darkMode ? 'light' : 'dark';
        setDarkMode(!darkMode);
        onThemeChange?.(newTheme);
    };

    return (
        <nav className={`
            fixed bottom-4 left-1/2 transform -translate-x-1/2
            p-2
            bg-nav-gradient dark:bg-gray-800 backdrop-blur-md border border-gray-800
            shadow-xl shadow-gray-900 rounded-full
            flex items-center z-50 gap-2
            transition-all duration-300
            ${expanded ? 'px-4 w-auto' : 'px-2 w-16 justify-center'}
        `}>

            {menuItems.map(({ path, icon, label }, index) => (
                <a
                    key={path}
                    href={`#${path}`}
                    onClick={() => handleItemClick(path)}
                    className={`
                        flex items-center justify-center
                        w-14 h-14 
                        text-white rounded-full shadow-md hover:shadow-2xl
                        transform transition-all duration-300 hover:scale-110
                        ${expanded ? 'opacity-100 translate-y-0 pointer-events-auto animate-fade-in-up' : 'hidden'}
                        ${selectedPath === path
                        ? 'bg-blue-500 text-black scale-150 ring-2 ring-white'
                        : 'bg-button-gradient hover:from-pink-500 hover:to-yellow-500'}
                    `}
                    style={{ animationDelay: `${index * 80}ms` }}
                    title={label}
                >
                    <i className={`text-xl ${icon}`}></i>
                </a>
            ))}

            {expanded && (
                <button
                    onClick={toggleDarkMode}
                    className="w-10 h-10 bg-yellow-400 dark:bg-gray-700 text-black dark:text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
                    title="Cambiar tema"
                >
                    <i className={`fas ${darkMode ? 'fa-moon text-white' : 'fa-sun'}`}></i>
                </button>
            )}

            <button
                onClick={toggleMenu}
                className={`
                    w-10 h-10 flex items-center justify-center 
                    bg-gray-900 dark:bg-gray-700 text-white rounded-full shadow-md
                    hover:bg-indigo-600 transition-all duration-300 cursor-pointer
                `}
                title={expanded ? 'Colapsar menú' : 'Expandir menú'}
            >
                {expanded ? '−' : '+'}
            </button>
        </nav>
    );
}
