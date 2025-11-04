import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled
    ? "bg-white shadow-md text-gray-800"
    : "bg-transparent text-white";

  const links = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link
          to="/"
          className={`text-2xl md:text-3xl font-bold tracking-tight ${
            scrolled ? "text-blue-800" : "text-white"
          }`}
        >
          Topville Hotel
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`transition ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : scrolled
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button (desktop only) */}
        <a
          href="https://wa.me/254781809900"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-block px-4 py-2 rounded-lg font-semibold transition ${
            scrolled
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-white text-blue-800 hover:bg-blue-100"
          }`}
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl ${
            scrolled ? "text-blue-800" : "text-white"
          }`}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 flex flex-col items-center gap-4 text-gray-800 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={()={setMenuOpen(false)}}
              className={`hover:text-blue-600 transition ${
                location.pathname === link.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Book Now Button for Mobile */}
          <a
            href="https://wa.me/254781809900"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
