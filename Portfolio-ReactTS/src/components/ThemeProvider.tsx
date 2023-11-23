import { ReactNode, createContext } from "react";
import useName from "../hooks/useName";

interface ThemeContextType{
    theme: "bg-light" | "bg-dark"
    setTheme: (theme : "bg-light" | "bg-dark") => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

function ThemeProvider({ children } : { children : ReactNode}) {
    const { theme, setTheme } = useTheme();

    return {
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    }
    } 