import express from 'express';
import supabase from '../supabaseClient.js';

const router = express.Router();

// Get all rooms (with price, features, and image)
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

// Get all bookings (optional)
router.get('/bookings', async (req, res) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router;

Update rooms API to include price, features, and image data
