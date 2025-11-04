import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#fff", padding: "1rem", borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ marginRight: "1rem", fontWeight: "bold", color: "#0366d6" }}>
        Topville Hotel Mombasa
      </Link>
      <Link to="/rooms" style={{ marginRight: "1rem" }}>Rooms</Link>
      <Link to="/gallery" style={{ marginRight: "1rem" }}>Gallery</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/contact" className="hover:text-blue-500">Contact</Link>
    </nav>
  );
}
