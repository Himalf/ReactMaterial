import { useContext, useRef } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ShowHideText from "./component/ShowHideText";
import FocusInput from "./component/FocusInput";
import TimerApp from "./component/TimerApp";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111827",
      }}
    >
      <h1 className="text-3xl font-bold mb-6">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </h1>
      <button
        // onClick={toggleTheme}
        className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition-all duration-300"
      >
        Toggle Theme
      </button>

      <TimerApp />
    </div>
  );
};

export default App;

// useRef
// useRef-> means reference - It gives direct access to DOM nodes or mutable vlues.
// DOM Nodes-> <input> <button> <div> etc.

// const myRef = useRef()
