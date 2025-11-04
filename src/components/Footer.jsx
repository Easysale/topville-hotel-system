import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 text-center">
      <p className="text-lg font-semibold text-white">Topville Hotel Mombasa</p>
      <p className="text-sm italic text-gray-400 mt-2">Relax. Refresh. Reconnect.</p>
      <p className="text-xs mt-3 text-gray-500">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
