import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-10">
          We’d love to hear from you. You can reach us through any of the
          following channels:
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md text-left space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            Topville Hotel Mombasa
          </h2>
          <p>📍 Mombasa, Kenya</p>
          <p>
            📞{" "}
            <a href="tel:+254781809900" className="text-blue-600">
              +254 781 809 900
            </a>
          </p>
          <p>
            ✉️{" "}
            <a href="mailto:info@topvillehotel.com" className="text-blue-600">
              info@topvillehotel.com
            </a>
          </p>

          <a
            href="https://wa.me/254781809900?text=Hi%20Topville%20Hotel%2C%20I%27d%20like%20to%20book%20a%20room."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-green-700 transition"
          >
            💬 Book via WhatsApp
          </a>
        </div>

        <div className="mt-12">
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
    </section>
  );
}
