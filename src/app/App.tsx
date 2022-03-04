import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
import './App.scss';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    );
}
