import express from 'express';
import hotelRouter from './routes/hotel.js';

const app = express();
app.use(express.json());

app.use('/api', hotelRouter);

app.get('/api/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API running on port ${port}`));
