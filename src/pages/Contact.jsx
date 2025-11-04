import React from "react";

export default function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <p>📍 Mombasa, Kenya</p>
    </section>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />   {/* ✅ add this */}
      </Routes>
    </Router>
  );
}

<section className="contact-page py-16 px-6 bg-gray-50 text-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <p className="text-lg mb-10">
      Have questions or want to make a booking? We’d love to hear from you.
    </p>

    <div className="grid md:grid-cols-2 gap-8 text-left">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Topville Hotel Mombasa
        </h2>
        <p>📍 Mombasa, Kenya</p>
        <p>📞 <a href="tel:+254781809900" className="text-blue-600">+254 781 809 900</a></p>
        <p>✉️ <a href="mailto:info@topvillehotel.com" className="text-blue-600">info@topvillehotel.com</a></p>
        <a
          href="https://wa.me/254781809900?text=Hi%20Topville%20Hotel%2C%20I%27d%20like%20to%20book%20a%20room."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-green-700"
        >
          💬 Book via WhatsApp
        </a>
      </div>

      <div>
        <iframe
          title="Topville Hotel Mombasa Location"
          src="https://www.google.com/maps?q=Topville%20Hotel%20Mombasa&output=embed"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  </div>
</section>
