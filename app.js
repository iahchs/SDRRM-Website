require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

// Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');

// Routes
app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
