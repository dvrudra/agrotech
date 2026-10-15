const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  const city = String(req.query.city || '').trim();
  if (!city) return res.status(400).json({ success: false, message: 'Please provide a city name.', example: '/api/weather?city=Lucknow' });
  res.json({ success: true, city, message: 'Weather endpoint is working.', data: null, note: 'Live weather provider is not connected yet.' });
});
module.exports = router;
