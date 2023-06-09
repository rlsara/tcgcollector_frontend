import "./App.css";
import Navbar from "./nav/nav";
import Sets from "./sets/sets";
import Home from "./home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./cards/cards";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/cards/:set" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
