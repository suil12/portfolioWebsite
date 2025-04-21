// routes/projects.js
const express = require('express');
const router = express.Router();

// Dati di esempio per i progetti
const projects = [
    {
        id: 1,
        title: 'App Mobile - ResAdvisor, your local\' restaurant advisor',
        description: 'Un applicazione android, sviluppata in android studio in linguaggio java e con retrive dei dati da firebase.',
        image: '/images/resadviser.png',
        technologies: ['Java', 'Firebase', 'Git', 'AndroidStudio'],
        github: 'https://github.com/suil12/ResAdviser',
        demo: 'https://project1-demo.com'
    },
    {
        id: 2,
        title: 'MechFinder - piattaforma web per professionisti e meccanici',
        description: 'Un sito web che permette a meccanici e privati di accordarsi in riparazioni e non solo, di veicoli, in piena libertà.',
        image: '/images/mechfinder.png',
        technologies: ['Node.js', 'SQL'],
        github: 'https://github.com/suil12/mechFinder',
        demo: 'https://project2-demo.com'
    },
    {
        id: 3,
        title: 'Mobishare - Shared Mobility Software',
        description: 'Un software in rete di mobilità sostenibile gestito con microservizi.',
        image: '/images/mobishare.png',
        technologies: ['C#', 'Sql', 'GitLab', 'Blazor'],
        github: 'https://github.com/suil12/Mobishare',
        demo: 'https://project3-demo.com'
    }
];

router.get('/', (req, res) => {
    res.render('projects', { 
        title: 'I Miei Progetti',
        projects: projects
    });
});

router.get('/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    
    if (!project) {
        return res.status(404).render('404', { 
            title: 'Progetto non trovato' 
        });
    }
    
    res.render('project-detail', { 
        title: project.title,
        project: project
    });
});

module.exports = router;