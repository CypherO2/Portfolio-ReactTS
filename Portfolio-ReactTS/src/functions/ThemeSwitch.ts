function getTheme() {
    const storedScreenMode = localStorage.getItem("screen-mode");
    return storedScreenMode ? storedScreenMode : "bg-light";
}
 
function setTheme(screenMode: "bg-dark" | "bg-light") {
    localStorage.setItem("screen-mode", screenMode);
}

function switchTheme() {
    const currentTheme = getTheme();
    setTheme(currentTheme === "bg-dark" ? "bg-light" : "bg-dark");
}
 
export { getTheme, setTheme, switchTheme };