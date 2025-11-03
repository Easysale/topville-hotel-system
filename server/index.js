import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow requests from your website
app.use(
  cors({
    origin: ["https://www.topvillehotel.com", "https://topville-hotel.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
