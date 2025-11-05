import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Element } from "react-scroll";

export default function Home() {
  const [rooms, setRooms] = useState([]);

  // ✅ Fetch rooms dynamically from your API (Render backend)
  useEffect(() => {
    fetch("https://topville-hotel-api.onrender.com/api/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch(() => console.log("Error fetching rooms"));
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1590490359854-dfba59ee8bab?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <main className="bg-white text-gray-800 scroll-smooth">
      {/* 🏝️ Hero Section */}
      <Element name="hero">
        <section
          id="hero"
          className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="bg-black/50 absolute inset-0"></div>
          <div className="relative z-10 max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Topville Hotel Mombasa
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Relax. Refresh. Reconnect — Modern Luxury by the Coast.
            </p>
            <a
              href="https://wa.me/254781809900"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Book Now on WhatsApp
            </a>
          </div>
        </section>
      </Element>

      {/* 🛏️ Rooms Section */}
      <Element name="rooms">
        <section id="rooms" className="py-20 bg-gray-50 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-800 mb-8">
              Our Rooms
            </h2>
            <p className="text-gray-600 mb-12">
              Experience coastal elegance and modern comfort in every stay.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.length > 0 ? (
                rooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                  >
                    <img
                      src={room.image_url}
                      alt={room.alt_text}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-5 text-left">
                      <h3 className="text-xl font-semibold mb-2 text-blue-800">
                        {room.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {room.description}
                      </p>
                      <p className="text-blue-700 font-bold mb-3">
                        {room.price}
                      </p>
                      <a
                        href="https://wa.me/254781809900"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                      >
                        Book Room
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">Loading rooms...</p>
              )}
            </div>
          </div>
        </section>
      </Element>

      {/* 🖼️ Gallery Section */}
      <Element name="gallery">
        <section
          id="gallery"
          className="py-20 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-blue-800 mb-8">Gallery</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover the beauty of Topville Hotel Mombasa — where every moment
              is a masterpiece of comfort and style.
            </p>

            <PhotoProvider>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {galleryImages.map((src, i) => (
                  <PhotoView key={i} src={src}>
                    <img
                      src={src}
                      alt={`Gallery image ${i}`}
                      className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          </div>
        </section>
      </Element>

      {/* 📍 Contact Section */}
      <Element name="contact">
        <section id="contact" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-blue-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                We’d love to hear from you. Whether it’s bookings or questions,
                we’re here to help.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right - Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Topville Hotel Mombasa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.80543255492!2d39.66820631475342!3d-4.033106497026097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840127f0c70d7cd%3A0x54b59c48ed47f745!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1677868304342!5m2!1sen!2ske"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </Element>

      {/* ⚓ Footer */}
      <footer className="bg-blue-950 text-gray-200 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Topville Hotel Mombasa
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Experience modern luxury and coastal comfort in the heart of
              Mombasa. Relax, Refresh, and Reconnect with us.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#rooms" className="hover:text-blue-400">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>📞 +254 781 809 900</li>
              <li>✉️ info@topvillehotel.com</li>
              <li>
                <a
                  href="https://wa.me/254781809900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition inline-flex items-center"
                >
                  💬 Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8 mx-6"></div>
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Topville Hotel Mombasa. All rights
          reserved.
        </div>
      </footer>
    </main>
  );
}
