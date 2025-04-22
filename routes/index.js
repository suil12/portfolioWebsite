// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'My Portfolio',
        description: 'Welcome to my professional personal portfolio.'
    });
});

module.exports = router;





