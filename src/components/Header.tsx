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
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [cartProducts] = useState<Product[]>([]);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const scrollThreshold = 500; // Adjust this value to change when the header background appears

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <>
            <header className={`fixed top-0 w-full flex flex-col items-center px-4 py-4 lg:px-32 h-auto lg:h-24 transition-all duration-300 ${
                scrolled ? 'bg-white dark:bg-black shadow-md' : 'bg-transparent'
            }`}>
                <div className="flex items-center justify-center w-full mb-4 lg:mb-0">
                    <a className="text-2xl font-bold text-black dark:text-white items-center justify-center hidden md:flex" href="/homepage">
                        ARTCO
                    </a>
                </div>
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
                                className={`w-full lg:w-auto outline-none rounded-xl border border-gray-300 dark:border-gray-500 px-4 py-2 pr-10 text-sm text-black dark:text-white transition-all duration-200 hover:bg-opacity-70 dark:hover:bg-opacity-70 ${
                                    scrolled ? 'bg-white dark:bg-[#222222] shadow-md' : 'bg-transparent'
                                }`}
                                placeholder="Rechercher..."
                                type="search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300 dark:text-gray-500"
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
                        <div className="flex items-center space-x-4">
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
                            <button className="transition-transform duration-200 hover:scale-110">
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
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </svg>
                            </button>
                            <div className="relative">
                                <button
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    className="transition-transform duration-200 hover:scale-110"
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
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </button>

                                {isUserMenuOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical"
                                             aria-labelledby="options-menu">
                                            <a href="#"
                                               className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
                                               role="menuitem">Mon compte</a>
                                            <a href="#"
                                               className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
                                               role="menuitem">Déconnexion</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative">
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
                            </div>
                        </div>
                    </div>
                    <nav className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 items-center w-full lg:w-auto">
                        <div className="relative w-full lg:w-auto">
                            <button
                                className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left"
                                onClick={() => toggleDropdown('about')}
                            >
                                À PROPOS
                            </button>
                            {activeDropdown === 'about' && (
                                <div className="lg:absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Notre histoire</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Notre équipe</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Nos valeurs</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative w-full lg:w-auto">
                            <button
                                className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left"
                                onClick={() => toggleDropdown('carpets')}
                            >
                                NOS TAPIS
                            </button>
                            {activeDropdown === 'carpets' && (
                                <div className="lg:absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Tapis modernes</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Tapis classiques</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Tapis sur mesure</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <a className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full lg:w-auto text-left"
                           href="/nouvelle-collection">
                            NOUVELLE COLLECTION
                        </a>
                        <div className="relative w-full lg:w-auto">
                            <button
                                className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 w-full text-left"
                                onClick={() => toggleDropdown('pros')}
                            >
                                ESPACE PROS
                            </button>
                            {activeDropdown === 'pros' && (
                                <div className="lg:absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Catalogue professionnel</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Demande de devis</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-opacity-10 dark:hover:bg-opacity-10" role="menuitem">Espace revendeur</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </header>

            <MenuSidebar isOpen={isMenuSidebarOpen} onClose={() => setIsMenuSidebarOpen(false)}/>
            <CartSidebar
                isOpen={isCartSidebarOpen}
                onClose={() => setIsCartSidebarOpen(false)}
                products={cartProducts}
            />
        </>
    );
}