import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1501117716987-c8e1ecb210b0?auto=format&fit=crop&w=1950&q=80"
          alt="Topville Hotel Mombasa"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Hero content */}
      <div
        className={`transition-all duration-1000 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4 drop-shadow-lg">
          Modern Luxury Awaits in Mombasa
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Relax. Refresh. Reconnect. Experience comfort and elegance at Topville Hotel Mombasa.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/rooms"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Explore Our Rooms
          </Link>
          <a
            href="https://wa.me/254781809900?text=Hi%20Topville%20Hotel%2C%20I'd%20like%20to%20book%20a%20room."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            💬 Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
