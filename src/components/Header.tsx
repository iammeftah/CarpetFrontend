import React, { useState, useEffect } from 'react';
import MenuSidebar from './MenuSidebar';


export default function Header() {
    const [isMenuSidebarOpen, setIsMenuSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const scrollThreshold = 100;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > scrollThreshold);
        };

        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('darkMode');
            return saved === 'true';
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <header
                className={`fixed h-auto top-0 w-full flex flex-col items-center px-4 py-4 lg:px-32 transition-all duration-200 z-50 ${
                    scrolled
                        ? 'bg-gradient-to-b from-white/50 to-white/0 dark:from-black/50 dark:to-black/0 backdrop-blur-md lg:bg-white lg:dark:bg-black lg:bg-none lg:backdrop-blur-none h-16'
                        : 'bg-transparent h-24'
                }`}>
                {!isMobile && !scrolled && (
                    <div className="flex items-center justify-center w-full my-4 lg:mb-0">
                        <a className="text-2xl font-bold text-black dark:text-white items-center justify-center hidden md:flex"
                           href="/">
                            ARTCO
                        </a>
                    </div>
                )}
                <div className="flex flex-col lg:flex-row items-center justify-center w-full ">
                    {isMobile && (
                        <div className="flex items-center space-x-4 mb-4 lg:mb-0 w-full lg:w-auto justify-between">
                            <button
                                className="text-neutral-600 dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70"
                                onClick={() => setIsMenuSidebarOpen(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                    )}
                    {!isMobile && (
                        <nav
                            className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 items-center w-full lg:w-auto ">
                            <div className="relative w-full lg:w-auto group">
                                <a
                                    href="/"
                                    className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left relative group"
                                >
                                    ACCUEIL
                                    <span
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                                </a>
                            </div>

                            <div className="relative w-full lg:w-auto group">
                                <a
                                    href="/about"
                                    className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left relative group"
                                >
                                    À PROPOS
                                    <span
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                                </a>
                                <div
                                    className="lg:absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="rounded-md" role="menu" aria-orientation="vertical">
                                        <a href="/about/#history"
                                           className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10"
                                           role="menuitem">Notre histoire</a>
                                        <a href="/about/#team"
                                           className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10"
                                           role="menuitem">Notre équipe</a>
                                        <a href="/about/#values"
                                           className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10"
                                           role="menuitem">Nos valeurs</a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full lg:w-auto group">
                                <a
                                    href="/tapis"
                                    className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left relative group"
                                >
                                    NOS TAPIS
                                    <span
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                                </a>
                            </div>
                            <div className="relative w-full lg:w-auto group">
                                <a
                                    href="/custom"
                                    className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left relative group"
                                >
                                    TAPIS PERSONALISÉ
                                    <span
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                                </a>
                            </div>
                            <a className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full lg:w-auto text-left relative group"
                               href="/contact">
                                CONTACTEZ NOUS
                                <span
                                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                            </a>

                            <button
                                className="text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-transform duration-200 hover:scale-110"
                                onClick={toggleDarkMode}
                            >
                                {isDarkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                                    </svg>
                                )}
                            </button>
                        </nav>
                    )}
                </div>
            </header>

            <MenuSidebar
                isOpen={isMenuSidebarOpen}
                onClose={() => setIsMenuSidebarOpen(false)}
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
            />
        </>
    );
}