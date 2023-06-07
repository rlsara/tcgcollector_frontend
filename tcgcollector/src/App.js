import "./App.css";
import Navbar from "./nav/nav";
import Sets from "./sets/sets";
import Home from "./home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sets" element={<Sets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
