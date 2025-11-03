import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";      // ✅ your Home file is inside pages/
import Rooms from "./pages/Rooms.jsx";    // ✅ we’ll add this file next
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
