import React, { useEffect, useState } from "react";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://topville-hotel-api.onrender.com/api/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Our Rooms</h1>
        {loading ? (
          <p>Loading rooms...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-md p-4 text-left"
              >
                <img
                  src={room.image_url}
                  alt={room.alt_text}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />
                <h2 className="text-xl font-semibold mb-2">{room.title}</h2>
                <p className="text-gray-600 mb-2">{room.description}</p>
                <p className="font-bold text-blue-700 mb-2">{room.price}</p>
                <ul className="text-sm text-gray-500 list-disc pl-5">
                  {room.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
