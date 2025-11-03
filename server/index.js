import express from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: [
      "https://www.topvillehotel.com",
      "https://topville-hotel.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: [
      "https://www.topvillehotel.com",
      "https://topville-hotel.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
