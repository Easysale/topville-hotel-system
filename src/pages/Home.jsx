import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Home(){
  const [rooms,setRooms]=useState([]);
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://topville-hotel-api.onrender.com";

  useEffect(()=>{fetch(`${API_BASE}/api/rooms`).then(r=>r.json()).then(d=>setRooms(d)).catch(()=>{console.log("rooms fetch failed")});},[API_BASE]);

  const galleryImages=["/src/assets/hero-optim.jpeg","https://images.unsplash.com/photo-1590490359854-dfba59ee8bab?auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60"];

  return (<div className="font-sans text-gray-800">
    <section id="hero" className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white" style={{backgroundImage:"url('/src/assets/hero-optim.jpeg')"}}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-3 text-[#EAB308] drop-shadow-lg">Topville Hotel Mombasa</h1>
        <p className="text-xl mb-6 text-gray-100 font-light">Relax. Refresh. Reconnect.</p>
        <a href="https://wa.me/254781809900" target="_blank" rel="noreferrer" className="btn-accent font-semibold shadow-lg hover:scale-105 transition-transform">Book via WhatsApp</a>
      </div>
    </section>

    <section id="rooms" className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Rooms</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {(rooms.length>0?rooms:[{id:1,title:'Deluxe Queen Room',description:'A spacious room with a queen bed.',price:'$150',image_url:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60',alt_text:'Deluxe'},{id:2,title:'Executive King Suite',description:'Luxury suite with king bed.',price:'$250',image_url:'https://images.unsplash.com/photo-1590490359854-dfba59ee8bab?auto=format&fit=crop&w=800&q=60',alt_text:'Executive'},{id:3,title:'Family Garden Room',description:'Perfect for families.',price:'$200',image_url:'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60',alt_text:'Family'}]).map(room=>(
          <div key={room.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src={room.image_url} alt={room.alt_text} className="rounded-t-lg w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.title}</h3>
              <p className="text-gray-600 mt-2">{room.description}</p>
              <p className="text-[#1E3A8A] font-bold mt-2">{room.price}/night</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section id="gallery" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Gallery</h2>
      <PhotoProvider>
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6">
          {galleryImages.map((src,i)=>(<PhotoView key={i} src={src}><img src={src} alt={'g'+i} className="w-full h-64 object-cover rounded-lg shadow cursor-pointer hover:opacity-80" /></PhotoView>))}
        </div>
      </PhotoProvider>
    </section>

    <section id="contact" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto px-6 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Topville Hotel Mombasa</h3>
          <p className="mb-2">📍 Mombasa, Kenya</p>
          <p className="mb-2">📞 +254 781 809 900</p>
          <p className="mb-2">✉️ info@topvillehotel.com</p>
          <p className="mb-4">🌐 www.topvillehotel.com</p>
          <a href="https://wa.me/254781809900" target="_blank" rel="noreferrer" className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition">Chat on WhatsApp</a>
        </div>
        <iframe className="w-full h-64 rounded-lg shadow" src="https://www.google.com/maps?q=mombasa&output=embed" allowFullScreen></iframe>
      </div>
    </section>

    <footer className="bg-[#0f172a] text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Topville Hotel Mombasa — Modern Luxury</p>
    </footer>
  </div>);
}
