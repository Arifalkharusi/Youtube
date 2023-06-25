import Home from "./components/Home";
import Watch from "./components/Watch";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="pt-[60px]">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
