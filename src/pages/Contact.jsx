import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("https://topville-hotel-api.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus("✅ Message sent!");
      else setStatus("❌ Failed to send.");
    } catch {
      setStatus("❌ Network error.");
    }
  };

  return (
    <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Have questions or want to book a room? We’d love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
          )}

          <div className="text-center mt-6">
            <a
              href="https://wa.me/254781809900?text=Hi%20Topville%20Hotel%2C%20I'd%20like%20to%20book%20a%20room."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              💬 Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Topville Hotel Mombasa Location"
            src="https://www.google.com/maps?q=Topville%20Hotel%20Mombasa&output=embed"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[600px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
