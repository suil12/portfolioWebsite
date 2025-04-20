const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Carica le variabili d'ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Imposta il motore di template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware per servire file statici
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importa le routes
const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

// Usa le routes
app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

// Gestione degli errori 404
app.use((req, res) => {
    res.status(404).render('404', { title: 'Pagina non trovata' });
});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});