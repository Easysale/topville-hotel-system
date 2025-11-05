
const express = require('express');
const app = express();
app.get('/api/health', (req,res)=>res.json({ok:true}));
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log('Server running on', PORT));
