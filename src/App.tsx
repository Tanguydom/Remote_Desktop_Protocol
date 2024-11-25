import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './PageRDP/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Introduction from './PageRDP/introduction/Introduction';
import TypeAttack from "./PageRDP/TypeAttaque/TypeAttack";
import Demonstration from "./PageRDP/Demonstration/Demonstration"
import Security from "./PageRDP/MesureSecuriteProtection/Security";
import Other from "./PageRDP/ComparaisonAutresProtocoles/Other";
import Analyse from "./PageRDP/AnnalyseResultat/Analyse";
import Conclusion from "./PageRDP/Conclusion/Conclusion";

import './App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <div className="app__content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/introduction" element={<Introduction />} />
                        <Route path="/type-attack" element={<TypeAttack />} />
                        <Route path="/demonstration" element={<Demonstration />} />
                        <Route path="/security-measures" element={<Security />} />
                        <Route path="/others-protocols" element={<Other />} />
                        <Route path="/analyse" element={<Analyse />} />
                        <Route path="/conclusion" element={<Conclusion />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
