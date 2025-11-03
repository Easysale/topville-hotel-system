export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Welcome to Topville Hotel Mombasa
      </h1>
      <p className="text-gray-600 mb-6 italic">Relax. Refresh. Reconnect.</p>
      <a
        href="/rooms"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        View Our Rooms
      </a>
    </main>
  );
}

export default function Home() {
  return <h1 style={{ textAlign: "center", marginTop: "4rem" }}>Home page works</h1>
}
