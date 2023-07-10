import Home from "./components/Home";
import Watch from "./components/Watch";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const darkMode = () => {
    document.querySelector("html")?.classList.toggle("dark");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="pt-[60px] dark:text-white">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
      <div
        className="flex items-center justify-center fixed w-[50px] h-[50px] rounded-full bottom-5 right-5 text-white bg-gray-950 dark:bg-white shadow-xl cursor-pointer dark:text-gray-950 "
        onClick={darkMode}
      >
        {theme}
      </div>
    </div>
  );
}

export default App;
