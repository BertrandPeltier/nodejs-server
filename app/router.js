// Module express import
const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send('Welcome to my first Nodejs server !')
});

module.exports = router;