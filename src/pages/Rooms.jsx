import React, { useEffect, useState } from "react";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://topville-hotel-api.onrender.com/api/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <section className="pt-28 pb-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-10">Our Rooms</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={room.image_url}
                alt={room.alt_text}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {room.title}
                </h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <p className="text-blue-700 font-bold mb-2">{room.price}</p>
                <ul className="text-sm text-gray-500 list-disc pl-5">
                  {room.features?.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
