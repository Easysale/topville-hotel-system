import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-10">Get in Touch</h1>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700">Topville Hotel Mombasa</h2>
            <p>📍 Mombasa, Kenya</p>
            <p>📞 <a href="tel:+254781809900" className="text-blue-600 hover:underline">+254 781 809 900</a></p>
            <p>✉️ <a href="mailto:info@topvillehotel.com" className="text-blue-600 hover:underline">info@topvillehotel.com</a></p>

            <a
              href="https://wa.me/254781809900?text=Hi%20Topville%20Hotel%2C%20I'd%20like%20to%20book%20a%20room."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              💬 Book via WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange}
                placeholder="Your Name" required className="w-full border rounded-lg p-3" />
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Your Email" required className="w-full border rounded-lg p-3" />
              <textarea name="message" value={formData.message} onChange={handleChange}
                placeholder="Your Message" rows="4" required className="w-full border rounded-lg p-3" />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
          </div>
        </div>

        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Topville Hotel Location"
            src="https://www.google.com/maps?q=Topville%20Hotel%20Mombasa&output=embed"
            width="100%"
            height="360"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
