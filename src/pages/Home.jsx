import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "bg-white shadow-lg"
    : "bg-transparent backdrop-blur-md";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-800 tracking-tight">
          Topville Hotel
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          {["Home", "Rooms", "Contact"].map((name) => {
            const path = name === "Home" ? "/" : `/${name.toLowerCase()}`;
            const active = location.pathname === path;
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`hover:text-blue-600 ${active ? "text-blue-600 font-semibold" : ""}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
