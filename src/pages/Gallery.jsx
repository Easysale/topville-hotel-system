<section className="pt-28 pb-16 px-6 bg-gray-50 min-h-screen text-center">
  ...
</section>

import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b0?auto=format&fit=crop&w=1200&q=80",
      alt: "Hotel Exterior - Topville Hotel Mombasa",
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      alt: "Deluxe Queen Room - Topville Hotel Mombasa",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478185-2f2b35b1c7a3?auto=format&fit=crop&w=1200&q=80",
      alt: "Executive Suite - Topville Hotel Mombasa",
    },
    {
      src: "https://images.unsplash.com/photo-1590490359854-dfba59ee8bab?auto=format&fit=crop&w=1200&q=80",
      alt: "Ocean View Balcony - Topville Hotel Mombasa",
    },
    {
      src: "https://images.unsplash.com/photo-1626041483371-5c6e9ad062b0?auto=format&fit=crop&w=1200&q=80",
      alt: "Restaurant Dining - Topville Hotel Mombasa",
    },
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      alt: "Lobby Lounge - Topville Hotel Mombasa",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      alt: "Pool Area - Topville Hotel Mombasa",
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      alt: "Evening Lights - Topville Hotel Mombasa",
    },
  ];

  return (
    <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Gallery</h1>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Discover the elegance of Topville Hotel Mombasa — from our luxurious rooms to our
          serene poolside, restaurant, and garden views.
        </p>

        <PhotoProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((image, i) => (
              <PhotoView key={i} src={image.src}>
                <div className="relative group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-60 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-lg flex justify-center items-center text-white text-sm font-medium transition">
                    View Photo
                  </div>
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}
