import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import KnowYourFees from "./components/KnowYourFees";
import Fees from "./components/Fees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mangalore" element={<KnowYourFees />} />
          <Route path="/fees" element={<Fees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
