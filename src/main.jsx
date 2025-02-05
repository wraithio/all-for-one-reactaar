import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent.jsx";
import Game1 from "./components/Game1.jsx";
// import Game2 from "./components/Game2.jsx";
// import Game3 from "./components/Game3.jsx";
// import Game4 from "./components/Game4.jsx";
// import Game5 from "./components/Game5.jsx";
// import Game6 from "./components/Game6.jsx";
// import Game7 from "./components/Game7.jsx";
// import Game8 from "./components/Game8.jsx";
// import Game9 from "./components/Game9.jsx";
// import Game0 from "./components/Game0.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game1" element={<Game1 />} />
        {/* <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/game5" element={<Game5 />} />
        <Route path="/game6" element={<Game6 />} />
        <Route path="/game7" element={<Game7 />} />
        <Route path="/game8" element={<Game8 />} />
        <Route path="/game9" element={<Game9 />} />
        <Route path="/game0" element={<Game0 />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


