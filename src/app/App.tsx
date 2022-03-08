import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
// import './App.scss';
import ThemeProvider from "./components/theme-provider/ThemeProvider";
import {darkTheme, lightTheme} from "../theme/theme";

export default function App() {
    const [theme, setTheme] = useState(lightTheme);

    function toggleTheme() {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    }

    return (
        <ThemeProvider className={theme}>
            <Router>
                <Routes>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme}/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
