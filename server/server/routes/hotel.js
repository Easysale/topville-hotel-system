import express from 'express';
import supabase from '../supabaseClient.js';

const router = express.Router();

// Get all rooms
router.get('/rooms', async (req, res) => {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .order('room_name', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Get all bookings
router.get('/bookings', async (req, res) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router;
