
// routes/contact.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact', { 
        title: 'Contattami'
    });
});

// Gestione dell'invio del form di contatto
router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    
    // Qui andrà inserita la logica per l'invio dell'email
    // Per ora, simuliamo un invio riuscito
    
    console.log('Messaggio ricevuto:');
    console.log({ name, email, message });
    
    res.render('contact', {
        title: 'Contattami',
        success: 'Grazie per il tuo messaggio! Ti risponderò presto.'
    });
});

module.exports = router;module.exports = router;