const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const companiesRoutes = require('../routes/companiesRoutes');
const storiesRoutes = require('../routes/storiesRoutes');
const cors = require('cors');

// Middleware
app.use(cors());

// Use Routes
app.use('/api', companiesRoutes);
app.use('/api', storiesRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
