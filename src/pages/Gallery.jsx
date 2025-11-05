import React from "react";

export default function Gallery() {
  return (
    <section className="pt-28 pb-16 px-6 bg-gray-50 min-h-screen text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Gallery</h1>
      <p className="text-gray-700 mb-12">
        Discover the beauty and comfort of Topville Hotel Mombasa.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
          alt="Deluxe Queen Room"
          className="w-full h-60 object-cover rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1590490359854-dfba59ee8bab?auto=format&fit=crop&w=800&q=60"
          alt="Executive King Suite"
          className="w-full h-60 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
