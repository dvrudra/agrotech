const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  const crop = String(req.query.crop || '').trim();
  res.json({ success: true, crop: crop || null, data: [], message: 'Market endpoint is working.', note: 'Live mandi prices are not connected yet.' });
});
module.exports = router;
