// My first nodejs server !

// Modules import
require('dotenv').config();

const express = require('express');

const app = express();

// router import
const router = require('./app/router');

// Port setup
const PORT = process.env.PORT || 3000;

// Templates engine setup
app.set('view engine', 'ejs');

// Templates folder
app.set('views', './views');

// Static files folder
app.use(express.static('./public'));

// Static files folder - Front development
app.use(express.static('./www'));

// Routing
app.use(router);

// 404
app.use((request, response) => {
  response.status(404).render('404');
});

// Launch server
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
  