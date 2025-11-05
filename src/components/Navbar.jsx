import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "bg-white shadow-md text-gray-800"
    : "bg-transparent text-white";

  const links = [
    { name: "Home", to: "hero" },
    { name: "Rooms", to: "rooms" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={800}
          offset={-80}
          className={`cursor-pointer text-2xl md:text-3xl font-bold tracking-tight ${
            scrolled ? "text-blue-800" : "text-white"
          }`}
        >
          Topville Hotel
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                activeClass="text-blue-600 font-semibold"
                className={`cursor-pointer transition ${
                  scrolled
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
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
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {link.name}
            </ScrollLink>
          ))}
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
