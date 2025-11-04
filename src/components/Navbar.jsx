import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className={`text-2xl font-bold tracking-tight ${
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
                className={`hover:text-blue-600 transition ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : scrolled
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          className={`md:hidden bg-white shadow-md py-4 px-6 flex flex-col gap-4 text-gray-700 font-medium`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-blue-600 transition ${
                location.pathname === link.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
