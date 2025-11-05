import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar(){const [menuOpen,setMenuOpen]=useState(false);const [scrolled,setScrolled]=useState(false);
useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>10);window.addEventListener("scroll",onScroll);return()=>window.removeEventListener("scroll",onScroll);},[]);
const links=[{name:"Home",to:"hero"},{name:"Rooms",to:"rooms"},{name:"Gallery",to:"gallery"},{name:"Contact",to:"contact"}];
return (<nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled?"bg-white shadow-md text-gray-800":"bg-transparent text-white"}`}>
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    <ScrollLink to="hero" smooth duration={800} offset={-80} className={`cursor-pointer text-2xl md:text-3xl font-bold ${scrolled?"text-[#1E3A8A]":"text-white"}`}>Topville Hotel</ScrollLink>
    <ul className="hidden md:flex gap-8 font-medium">{links.map(link=>(<li key={link.name}><ScrollLink to={link.to} smooth duration={800} offset={-80} spy activeClass="text-[#1E3A8A] font-semibold" className={`cursor-pointer transition ${scrolled?"text-gray-800 hover:text-[#1E3A8A]":"text-white hover:text-blue-300"}`}>{link.name}</ScrollLink></li>))}</ul>
    <a href="https://wa.me/254781809900" target="_blank" rel="noreferrer" className={`hidden md:inline-block px-4 py-2 rounded-lg font-semibold transition ${scrolled?"bg-[#1E3A8A] text-white hover:bg-[#0F1E63]":"bg-white text-[#1E3A8A] hover:bg-gray-100"}`}>Book Now</a>
    <button onClick={()=>setMenuOpen(!menuOpen)} className={`md:hidden text-3xl ${scrolled?"text-[#1E3A8A]":"text-white"}`}>☰</button>
  </div>
  {menuOpen&&(<div className="md:hidden bg-white shadow-lg py-4 flex flex-col items-center gap-4 text-gray-800 font-medium">{links.map(link=>(<ScrollLink key={link.name} to={link.to} smooth duration={800} offset={-80} onClick={()=>setMenuOpen(false)} className="cursor-pointer hover:text-[#1E3A8A] transition">{link.name}</ScrollLink>))}<a href="https://wa.me/254781809900" target="_blank" rel="noreferrer" className="bg-[#1E3A8A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0F1E63] transition">Book Now</a></div>)}
</nav>);}
