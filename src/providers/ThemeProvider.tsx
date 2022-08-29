import React, {createContext, useEffect, useState} from "react";
import {darkTheme, lightTheme, ThemeRoot} from '../../styles/stitches.config';

export type ThemeContextType = {
    theme: any,
    toggleTheme: () => void
}

export type ThemeProviderType = {
    children: JSX.Element,
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({children}: ThemeProviderType) {
    const [theme, setTheme] = useState<any>(lightTheme);

    const isThemeActivated = false;

    useEffect(() => {
        if (isThemeActivated) {
            initMatchMedia();
        }
    }, []);

    function toggleTheme() {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    }

    function initMatchMedia() {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme(darkTheme);
            } else {
                setTheme(lightTheme);
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (e.matches) {
                    setTheme(darkTheme);
                } else {
                    setTheme(lightTheme);
                }
            });
        }
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeRoot className={theme}>
                {children}
            </ThemeRoot>
        </ThemeContext.Provider>
    )
}