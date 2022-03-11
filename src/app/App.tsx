import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
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

    useEffect(() => {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                console.log('darkTheme');
                setTheme(darkTheme);
            } else {
                console.log('lightTheme');
                setTheme(lightTheme);
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (e.matches) {
                    console.log('darkTheme');
                    setTheme(darkTheme);
                } else {
                    console.log('lightTheme');
                    setTheme(lightTheme);
                }
            });
        }
    }, []);

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
