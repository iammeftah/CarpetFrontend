import React, { useState, useEffect } from 'react';
import MenuSidebar from './MenuSidebar';
import CartSidebar from './CartSidebar';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function Header() {
    const [isMenuSidebarOpen, setIsMenuSidebarOpen] = useState(false);
    const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
    const [cartProducts] = useState<Product[]>([]);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const scrollThreshold = 200;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > scrollThreshold);
        };

        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
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
            <header className={`fixed top-0 w-full flex flex-col items-center px-4 py-4 lg:px-32 transition-all duration-200 z-50 ${
                scrolled ? 'bg-white dark:bg-black shadow-md h-16' : 'bg-transparent h-24'
            }`}>
                {!isMobile && !scrolled && (
                    <div className="flex items-center justify-center w-full mb-4 lg:mb-0">
                        <a className="text-2xl font-bold text-black dark:text-white items-center justify-center hidden md:flex" href="/">
                            ARTCO
                        </a>
                    </div>
                )}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0 w-full lg:w-auto justify-between">
                        <button
                            className="text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70"
                            onClick={() => setIsMenuSidebarOpen(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                        <div className="relative flex-grow lg:flex-grow-0">
                            <input
                                className={`w-full lg:w-auto outline-none rounded-xl border border-neutral-300 dark:border-neutral-500 px-4 py-2 pr-10 text-sm text-black dark:text-white transition-all duration-200 hover:bg-opacity-70 dark:hover:bg-opacity-70 ${
                                    scrolled ? 'bg-white dark:bg-[#222222]' : 'bg-transparent'
                                }`}
                                placeholder="Rechercher..."
                                type="search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-300 dark:text-neutral-500"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </div>
                        <button
                            className="relative transition-transform duration-200 hover:scale-110"
                            onClick={() => setIsCartSidebarOpen(true)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black dark:text-white"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="8" cy="21" r="1"></circle>
                                <circle cx="19" cy="21" r="1"></circle>
                                <path
                                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                            </svg>
                            <span
                                className="absolute -top-2 -right-2 rounded-full bg-black dark:bg-white px-2 py-0.5 text-xs text-white dark:text-black">
                                {cartProducts.length}
                            </span>
                        </button>

                        <button
                            className="relative transition-transform duration-200 hover:scale-110"
                            onClick={() => {/* Navigate to wishlist page */}}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black dark:text-white"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>

                        <div className="relative group">
                            <button
                                className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left relative group hover:scale-110 duration-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-black dark:text-white"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </button>

                            <div
                                className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                            >
                                <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10">Mon compte</a>
                                <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10">Paramètres</a>
                                <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10">Déconnexion</a>
                            </div>
                        </div>
                    </div>
                    {!isMobile && (
                        <nav
                            className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 items-center w-full lg:w-auto">
                            <div className="relative w-full lg:w-auto group">
                                <button
                                    className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left relative group"
                                >
                                    À PROPOS
                                    <span
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                                </button>
                                <div
                                    className="lg:absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="rounded-md" role="menu" aria-orientation="vertical">
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10"
                                           role="menuitem">Notre histoire</a>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10"
                                           role="menuitem">Notre équipe</a>
                                        <a href="#"
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
                                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                                </a>
                            </div>
                            <a className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full lg:w-auto text-left relative group"
                               href="/nouvelle-collection">
                                NOUVELLE COLLECTION
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                            </a>
                            <div className="rounded-md relative w-full lg:w-auto group">
                                <button
                                    className="rounded-md text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left relative group"
                                >
                                    ESPACE PROS
                                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black dark:bg-white transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 bg-opacity-60 dark:bg-opacity-60"></span>
                                </button>
                                <div className="lg:absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="rounded-md" role="menu" aria-orientation="vertical">
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Catalogue professionnel</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Demande de devis</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-[#AAAAAA] dark:hover:bg-[#EEEEEE] hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Espace revendeur</a>
                                    </div>
                                </div>
                            </div>
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
                isMobile={isMobile}
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
            />
            <CartSidebar
                isOpen={isCartSidebarOpen}
                onClose={() => setIsCartSidebarOpen(false)}
                products={cartProducts}
            />
        </>
    );
}