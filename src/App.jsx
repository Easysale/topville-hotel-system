import { useEffect, useState } from "react";
import {
  BedDouble, Utensils, Wifi, Car, Sparkles, MapPin, Phone, Mail,
  Star, ChevronRight, Instagram, Facebook, Twitter
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining" },
  { id: "amenities", label: "Amenities" },
  { id: "gallery", label: "Gallery" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const ids = navItems.map(n => n.id);
      const offsets = ids.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0]?.id || "home");
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header active={active} onNavigate={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero onBook={() => scrollTo("contact")} />
      <About />
      <Rooms />
      <Dining />
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
      <Footer onNavigate={scrollTo} />
    </div>
  );
}

function Header({ active, onNavigate, menuOpen, setMenuOpen }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <a href="#home" onClick={(e)=>{e.preventDefault(); onNavigate("home");}} className="font-semibold tracking-tight">
              Toville Hotel Mombasa
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${active === item.id ? "text-gray-900" : "text-gray-500"}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e)=>{e.preventDefault(); onNavigate("contact");}}
              className="ml-2 inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-gray-900/10 hover:shadow md:ml-4"
            >
              Book Now
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </nav>
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center rounded-xl p-2 ring-1 ring-gray-300"
            onClick={() => setMenuOpen(v => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.id}
                 href={`#${item.id}`}
                 onClick={(e)=>{e.preventDefault(); onNavigate(item.id);}}
                 className={`block rounded-xl px-3 py-2 text-sm ${active===item.id?"bg-gray-900 text-white":"hover:bg-gray-100"}`}>
                {item.label}
              </a>
            ))}
            <a href="#contact"
               onClick={(e)=>{e.preventDefault(); onNavigate("contact");}}
               className="block rounded-xl px-3 py-2 text-sm bg-gray-900 text-white text-center">
               Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onBook }) {
  return (
    <section id="home" className="relative pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="h-[70vh] w-full bg-[url('/gallery/23.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[70vh] flex flex-col justify-center text-white">
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Toville Hotel Mombasa
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Where Indian Ocean breezes meet modern comfort. Wake up to sun-kissed shores, curated dining, and warm Kenyan hospitality.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onBook}
                    className="rounded-2xl bg-white text-gray-900 px-5 py-3 font-semibold shadow hover:shadow-lg">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    "/gallery/23.jpg", "/gallery/10.jpg", "/gallery/2.jpg", "/gallery/39.jpg",
    "/gallery/30.jpg", "/gallery/27.jpg", "/gallery/19.jpg", "/gallery/Breakfast.jpg"
  ];
  const [idx, setIdx] = useState(null);

  // Lightbox navigation
  useEffect(() => {
    if (idx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % imgs.length);
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + imgs.length) % imgs.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [idx]);

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Gallery</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {imgs.map((src, i) => (
            <button key={i}
                    onClick={() => setIdx(i)}
                    className="group aspect-square rounded-2xl overflow-hidden ring-1 ring-gray-200">
              <img src={src} alt={`Hotel photo ${i + 1}`} loading="lazy"
                   className="w-full h-full object-cover transition-transform group-hover:scale-[1.02]" />
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setIdx(null)}>
          <img src={imgs[idx]} alt={`Photo ${idx + 1}`}
               className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}

