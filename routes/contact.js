
// routes/contact.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact', { 
        title: 'Contact me'
    });
});

// Gestione dell'invio del form di contatto
router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    
    // Qui andrà inserita la logica per l'invio dell'email
    // Per ora, simuliamo un invio riuscito
    
    console.log('Messagge recieved:');
    console.log({ name, email, message });
    
    res.render('contact', {
        title: 'Contact me',
        success: 'Thanks for your messagge. I\'ll get in touch with you soon!'
    });
});

module.exports = router;module.exports = router;