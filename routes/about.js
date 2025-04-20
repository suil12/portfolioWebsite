// routes/about.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Dati di esempio per la pagina about
    const aboutData = {
        name: 'Souhail Nmili',
        title: 'Laureando informatico e Sviluppatore Full Stack',
        bio: 'Sono un laureando in informatica, impegnato in uno stage da svipuppatore software per azienda informatica di software per studi clinici.\nCon alle spalle anche un semestre all\'estero presso la Universidad De Sevilla, dove mi sono migliorato a livello personale e istituzionale, ampliando anche le mie doti linguistiche.\nHo creato e sviluppato vari progetti, per esami universitari e non, di seguito potete visionarne i maggiori.',
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
                position: 'Internship - Sviluppatore Software',
                period: '01/2025 - 05/2025',
                description: 'Sviluppo di software per automazione del testing software in Node.js e framework cucmber'
            },
            {
                company: 'NovaCoop GDO',
                position: 'Cassiere e scaffalista',
                period: '07/2022 - 09/2022',
                description: 'Gestione cassa e articoli del punto vendita'
            },
            {
                company: 'Amazon Italia',
                position: 'Operatore di magazzino',
                period: '11/2021 - 01/2022',
                description: 'Stockaggio, impacchettamento e distribuzione pacchi'
            },
            {
                company: 'O.m.s. Group',
                position: 'Stage - Operaio elettrico',
                period: '06/2019 - 07/2019',
                description: 'Lettura schemi ed assemblaggio e collaudo macchinari elettrici'
            }
        ],
        education: [
            {
                institution: 'Università del Piemonte Orientale',
                degree: 'Laurea in Informatica',
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
        title: 'Chi Sono',
        about: aboutData
    });
});
module.exports = router;module.exports = router;