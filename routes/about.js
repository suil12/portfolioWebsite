// routes/about.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Dati di esempio per la pagina about
    const aboutData = {
        name: 'Souhail Nmili',
        title: 'Computer Science Graduate and Full Stack Developer',
        bio: 'I am a computer science graduate, engaged in an internship as a software developer for an IT company that produces software for clinical studies.I also have a semester abroad at the Universidad De Sevilla, where I improved myself on a personal and institutional level, also expanding my linguistic skills.\nI have created and developed various projects, for university exams and otherwise, below you can see the main ones.',
        skills: [
            { name: 'C / C#', level: 85 },
            { name: 'JavaScript', level: 90 },
            { name: 'HTML/CSS', level: 90 },
            { name: 'Node.js', level: 85 },
            { name: 'React', level: 80 },
            { name: 'MongoDB', level: 80 },
            { name: 'SQL', level: 80 },
            { name: 'Java', level: 90 },
            { name: 'Git', level: 90 }
        ],
        experience: [
            {
                company: 'Nubilaria Srl',
                position: 'Internship - Software Developer',
                period: '01/2025 - 05/2025',
                description: 'Software development for software testing automation in Node.js and cucmber framework'
            },
            {
                company: 'NovaCoop GDO',
                position: 'Cashier and shelfman',
                period: '07/2022 - 09/2022',
               description: 'Shelves stocking and checkout management'
            },
            {
                company: 'Amazon Italia',
                position: 'Warehouse operator',
                period: '11/2021 - 01/2022',
                description: 'Storage, packaging and distribution of parcels'
            },
            {
                company: 'O.m.s. Group',
                position: 'Stage - Electrician operator',
                period: '06/2019 - 07/2019',
                description: 'Reading diagrams and assembling and testing electrical machinery'
            }
        ],
        education: [
            {
                institution: 'Università del Piemonte Orientale',
                degree: 'Computer Science Degree',
                period: '2021 - 2025'
            },
            {
                institution: 'Universidad De Sevilla',
                degree: 'Grado en Ingenieria Informatica',
                period: '01/2024 - 07/2024'
            },
            {
                institution: 'Istituto Tecnico Da Vinci',
                degree: 'Diploma di perito Elettronico ed Elettrotecnico',
                period: '2016 - 2021'
            }
        ]
    };

    res.render('about', { 
        title: 'Who I am',
        about: aboutData
    });
});
module.exports = router;module.exports = router;