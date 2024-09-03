import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Homepage } from "./pages/Homepage";
import { TapisPage } from './pages/Tapis';
import Aboutpage from './pages/Aboutpage';
import Contact from "./pages/Contact";
import CarpetCustomizer from "./pages/CustomCarpets";
import { TitleSetter } from './hooks/useDocumentTitle';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'true') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <Router>
            <TitleSetter /> {/* Add the TitleSetter component here */}
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/a-propos" element={<Aboutpage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/tapis" element={<TapisPage />} />
                    <Route path="/custom" element={<CarpetCustomizer />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;