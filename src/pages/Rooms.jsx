import { useEffect, useState } from "react";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  "https://topville-hotel-api.onrender.com";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/rooms`)
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading rooms...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Our Rooms
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={room.image_url}
              alt={room.alt_text}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
              <p className="text-gray-600 mb-3">{room.description}</p>
              <p className="font-bold text-lg text-blue-700 mb-3">
                {room.price}
              </p>
              {Array.isArray(room.features) && (
                <ul className="text-gray-500 text-sm mb-3">
                  {room.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              )}
              <button className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
