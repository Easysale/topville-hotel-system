import express from "express";
import cors from "cors";

const app = express();

// ✅ put this FIRST, right after you create `app`
app.use(
  cors({
    origin: [
      "https://www.topvillehotel.com",
      "https://topville-hotel.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// optional convenience
app.options("*", cors());   // handle pre-flight requests

// now the rest of your middleware and routes
app.use(express.json());

app.get("/api/rooms", async (req, res) => {
  // example static data
  const rooms = [
    { id: 1, title: "Deluxe Queen Room", price: "$150" },
    { id: 2, title: "Executive King Suite", price: "$250" }
  ];
  res.json(rooms);
});

// ...other routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
