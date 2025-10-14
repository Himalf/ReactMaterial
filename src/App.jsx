import { useContext, useRef } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ShowHideText from "./component/ShowHideText";
import FocusInput from "./component/FocusInput";
import TimerApp from "./component/TimerApp";
import Timer from "./components/Timer";
import TitleChanger from "./components/TitleChanger";
import Products from "./components/Products";
import ProductCard from "./component/ProductCard";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default App;
