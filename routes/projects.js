// routes/projects.js
const express = require('express');
const router = express.Router();

// Dati di esempio per i progetti
const projects = [
    {
        id: 1,
        title: 'App Mobile - ResAdvisor, your local\' restaurant advisor',
        description: 'An android application, developed in android studio in Java language and with data retrive from firebase.',
        image: '/images/resadviser.png',
        technologies: ['Java', 'Firebase', 'Git', 'AndroidStudio'],
        github: 'https://github.com/suil12/ResAdviser',
        demo: 'https://project1-demo.com'
    },
    {
        id: 2,
        title: 'MechFinder - web platform for mechanics, freelancers and customers',
        description: 'A website that allows mechanics and private individuals to agree upon repairs and more, on vehicles, in complete freedom.',
        image: '/images/mechfinder.png',
        technologies: ['Node.js', 'Javascript', 'Html/CSS', 'Bootstrap','SQL'],
        github: 'https://github.com/suil12/mechFinder',
        demo: 'https://project2-demo.com'
    },
    {
        id: 3,
        title: 'Mobishare - Shared Sustainable Mobility Software',
        description: 'A complete software for sustainable mobility sharing, with mqtt service.',
        image: '/images/mobishare.png',
        technologies: ['C#', 'Sql', 'GitLab', 'Blazor'],
        github: 'https://github.com/suil12/Mobishare',
        demo: 'https://project3-demo.com'
    }
];

router.get('/', (req, res) => {
    res.render('projects', { 
        title: 'My Projects',
        projects: projects
    });
});

router.get('/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    
    if (!project) {
        return res.status(404).render('404', { 
            title: 'Project Not Found' 
        });
    }
    
    res.render('project-detail', { 
        title: project.title,
        project: project
    });
});

module.exports = router;