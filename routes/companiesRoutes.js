const express = require('express');
const router = express.Router();
const companies = require('../data/companiesData');

router.get('/companies', (req, res) => {
    res.json(companies);
});

module.exports = router;
