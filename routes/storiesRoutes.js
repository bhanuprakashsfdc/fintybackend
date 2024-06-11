const express = require('express');
const router = express.Router();
const stories = require('../data/storiesData');

router.get('/stories', (req, res) => {
    res.json(stories);
});

module.exports = router;
