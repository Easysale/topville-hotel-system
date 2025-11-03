import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-700 py-8 mt-10 text-center">
      <h3 className="text-lg font-semibold text-blue-700 mb-2">
        Topville Hotel Mombasa
      </h3>
      <p>📍 Mombasa, Kenya</p>
      <p>📞 +254 781 809 900</p>
      <p>✉️ info@topvillehotel.com</p>
      <p className="italic text-gray-500 mt-2">
        “Relax. Refresh. Reconnect.”
      </p>
      <p className="text-gray-400 text-sm mt-4">
        © {new Date().getFullYear()} Topville Hotel Mombasa. All rights reserved.
      </p>
    </footer>
  );
}
