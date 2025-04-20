// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Il Mio Portfolio',
        description: 'Benvenuto nel mio portfolio professionale'
    });
});

module.exports = router;





