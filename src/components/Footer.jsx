import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Topville Hotel Mombasa — All Rights Reserved.
        </p>
        <p className="text-xs mt-2 italic">Relax. Refresh. Reconnect.</p>
      </div>
    </footer>
  );
}
