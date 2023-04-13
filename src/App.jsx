import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import KnowYourFees from "./components/KnowYourFees";
import Fees from "./components/Fees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowyourfees/:place" element={<KnowYourFees />} />
          <Route path="/fees" element={<Fees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
