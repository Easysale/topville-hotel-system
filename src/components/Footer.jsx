import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 — About */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Topville Hotel Mombasa</h3>
          <p className="text-gray-400 leading-relaxed">
            Experience modern luxury and coastal comfort in the heart of Mombasa.
            Relax, Refresh, and Reconnect with us at Topville Hotel Mombasa — where
            hospitality meets elegance.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-blue-400">Rooms</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 — Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <MdPhone className="text-blue-400 text-lg" />
              <span>+254 781 809 900</span>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-blue-400 text-lg" />
              <span>info@topvillehotel.com</span>
            </li>
            <li>
              <a
                href="https://wa.me/254781809900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8 mx-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Topville Hotel Mombasa. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
