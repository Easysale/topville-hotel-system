import express from "express";
import cors from "cors";
import hotelRoutes from "./routes/hotel.js";

const app = express();

// ✅ 1️⃣ Add CORS middleware BEFORE routes
app.use(
  cors({
    origin: [
      "https://www.topvillehotel.com",
      "https://topville-hotel.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ 2️⃣ Handle preflight requests
app.options("*", cors());

// ✅ 3️⃣ Add JSON middleware AFTER CORS, BEFORE routes
app.use(express.json());

// ✅ 4️⃣ Register your router
app.use("/api", hotelRoutes);

// ✅ 5️⃣ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
