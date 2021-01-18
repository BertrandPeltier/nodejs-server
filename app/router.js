// Module express import
const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.render('accueil');
});

module.exports = router;