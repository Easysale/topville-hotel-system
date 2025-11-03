import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo and brand */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/logo192.png"
          alt="Topville Hotel Mombasa Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-xl font-semibold text-blue-700">
          Topville Hotel Mombasa
        </span>
      </Link>

      {/* Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/rooms" className="hover:text-blue-600 transition">Rooms</Link>
        <Link to="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </div>

      {/* Book Now button */}
      <a
        href="/rooms"
        className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Book Now
      </a>
    </nav>
  );
}
