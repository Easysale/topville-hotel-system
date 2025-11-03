import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function Home() {
  return <h1 style={{ textAlign: "center", marginTop: "4rem" }}>Home page works</h1>
}

function Rooms() {
  return <h1 style={{ textAlign: "center", marginTop: "4rem" }}>Rooms page works</h1>
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import Home from "./Home.jsx"
