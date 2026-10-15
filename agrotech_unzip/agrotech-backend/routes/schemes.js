const express = require('express');
const router = express.Router();
router.get('/', (_req, res) => res.json({ success: true, data: [], message: 'Government schemes endpoint is working.', note: 'Verified scheme data source is not connected yet.' }));
module.exports = router;
