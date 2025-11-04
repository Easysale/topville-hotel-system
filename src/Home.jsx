import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center py-16 bg-blue-50 min-h-screen">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">
        Welcome to Topville Hotel Mombasa
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience modern luxury and personalized comfort in the heart of Mombasa.
      </p>
      <Link
        to="/rooms"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        View Our Rooms
      </Link>
    </section>
  );
}
