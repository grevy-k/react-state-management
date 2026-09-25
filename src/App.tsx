import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import { useTheme } from "./context/ThemeContext";
import { LIGHT_THEME } from "./constants/theme";
import styles from "./App.module.css";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.app} ${
        theme === LIGHT_THEME ? styles.light : styles.dark
      }`}
    >
      <Navbar />
      <TaskManager />
    </div>
  );
}

export default App;