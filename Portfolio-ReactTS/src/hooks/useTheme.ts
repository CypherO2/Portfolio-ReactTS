import { useState } from "react";

function useTheme() {
  const storedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState<"bg-light" | "bg-dark">(storedTheme === "bg-dark" ? storedTheme : "bg-light");
 
  const saveTheme = (theme: "bg-light" | "bg-dark") => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return { theme, setTheme: saveTheme };
}

export default useTheme;
