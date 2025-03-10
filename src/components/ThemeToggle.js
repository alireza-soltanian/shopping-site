import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;

