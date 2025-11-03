import express from "express";
import cors from "cors";
import hotelRoutes from "./routes/hotel.js";

const app = express();

// ✅ CORS must come before any routes
app.use(
  cors({
    origin: [
      "https://www.topvillehotel.com",
      "https://topville-hotel.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.options("*", cors()); // preflight handler

app.use(express.json());

// ✅ Register routes after CORS
app.use("/api", hotelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

import express from 'express';
import supabase from '../supabaseClient.js';

const router = express.Router();

router.get('/rooms', async (req, res) => {
  const { data, error } = await supabase
    .from('rooms')
    .select('id, title, description, price, features, image_url, alt_text, created_at')
    .order('price', { ascending: true });

  if (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

router.get('/bookings', async (req, res) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router;
