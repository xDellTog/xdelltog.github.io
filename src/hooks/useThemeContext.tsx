import {useContext} from "react";
import {ThemeContext} from "../providers/ThemeProvider";

const useThemeContext = () => {
    const {
        theme,
        toggleTheme,
    } = useContext(ThemeContext);

    return {
        theme,
        toggleTheme,
    }
};

export default useThemeContext;