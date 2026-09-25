import { useTheme } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/theme";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

  return (
    <nav
      className={`${styles.navbar} ${
        theme === LIGHT_THEME ? styles.light : styles.dark
      }`}
    >
      <span className={styles.brand}>React App</span>
      <button className={styles.toggleButton} onClick={toggleTheme}>
        Switch to {nextTheme} Mode
      </button>
    </nav>
  );
};

export default Navbar;