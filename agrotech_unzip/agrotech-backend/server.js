require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');
const marketRoutes = require('./routes/market');
const schemeRoutes = require('./routes/schemes');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (_req, res) => res.json({ success: true, name: 'AGROTECH API', status: 'running' }));
app.get('/api/health', (_req, res) => res.json({ success: true, message: 'AGROTECH backend is running.' }));
app.use('/api/weather', weatherRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/schemes', schemeRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Unexpected server error.' });
});
app.listen(PORT, () => console.log(`AGROTECH API running at http://localhost:${PORT}`));
