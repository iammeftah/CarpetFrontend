import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";

function APropos() {
    return <h2>À propos</h2>;
}

function NosTapis() {
    return <h2>Nos Tapis</h2>;
}

function NouvelleCollection() {
    return <h2>Nouvelle Collection</h2>;
}

function EspacePros() {
    return <h2>Espace Pros</h2>;
}

function App() {
    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'true') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (

        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path="/nos-tapis" element={<NosTapis />} />
                    <Route path="/nouvelle-collection" element={<NouvelleCollection />} />
                    <Route path="/espace-pros" element={<EspacePros />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
