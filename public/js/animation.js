// animations.js - Script per gestire e inizializzare le animazioni

document.addEventListener('DOMContentLoaded', function() {
    // Inizializza le animazioni
    initAnimations();
    
    // Imposta gli ascoltatori di eventi
    setupEventListeners();
    
    // Inizializza il cursore personalizzato (opzionale)
    // initCustomCursor();
});

/**
 * Inizializza tutte le animazioni di base
 */
function initAnimations() {
    // Attiva le animazioni scroll-based
    setupScrollAnimations();
    
    // Anima le skill bars quando sono visibili
    animateSkillBars();
    
    // Attiva le animazioni per i project cards
    animateProjectCards();
    
    // Aggiungi classi di animazione a elementi specifici
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('animated-section');
    });
    
    document.querySelectorAll('.timeline-item').forEach(el => {
        el.classList.add('animated-timeline');
    });
    
    // Ritardo nella visualizzazione delle card dei progetti
    document.querySelectorAll('.projects-grid .project-card').forEach((card, index) => {
        card.style.animationDelay = `${0.2 * index}s`;
    });
}

/**
 * Configura le animazioni che si attivano allo scroll
 */
function setupScrollAnimations() {
    // Utility per verificare se un elemento è visibile nella viewport
    function isElementInViewport(el, offset = 100) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }
    
    // Elementi che si animeranno allo scroll
    const animatedSections = document.querySelectorAll('.animated-section');
    const animatedTimelines = document.querySelectorAll('.animated-timeline');
    const projectCards = document.querySelectorAll('.project-card');
    const skillBars = document.querySelectorAll('.skill-level');
    const pageHeaders = document.querySelectorAll('.page-header');
    
    // Funzione per controllare e attivare le animazioni
    function checkScroll() {
        // Anima le sezioni
        animatedSections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
        
        // Anima le timeline
        animatedTimelines.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
            }
        });
        
        // Anima le project cards
        projectCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('visible');
            }
        });
        
        // Anima le skill bars
        skillBars.forEach(bar => {
            if (isElementInViewport(bar)) {
                // Estrai la larghezza dallo stile inline
                const width = bar.style.width;
                // Imposta la variabile CSS personalizzata
                bar.style.setProperty('--skill-percent', width);
                // Aggiungi la classe di animazione
                bar.classList.add('animated');
            }
        });
        
        // Anima gli header delle pagine
        pageHeaders.forEach(header => {
            if (isElementInViewport(header)) {
                header.classList.add('visible');
            }
        });
    }
    
    // Esegui al caricamento e ad ogni scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
}

/**
 * Anima le barre delle competenze
 */
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
        // Salva la larghezza originale dalla proprietà style
        const originalWidth = bar.style.width;
        
        // Imposta la larghezza a 0 per l'animazione
        bar.style.width = '0';
        
        // Riapplica la larghezza originale dopo un breve ritardo per attivare l'animazione
        setTimeout(() => {
            bar.style.width = originalWidth;
            bar.classList.add('animated');
        }, 200);
    });
}

/**
 * Configura le animazioni per le cards dei progetti
 */
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Imposta una trasformazione iniziale
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Anima con un ritardo progressivo
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
}

/**
 * Inizializza il cursore personalizzato (funzione opzionale)
 */
function initCustomCursor() {
    // Crea l'elemento cursore
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    // Aggiorna la posizione del cursore
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Mostra il cursore solo quando il mouse si muove
        if (!cursor.classList.contains('visible')) {
            cursor.classList.add('visible');
        }
    });
    
    // Cambia lo stato del cursore sui link e bottoni
    document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
    
    // Nascondi il cursore quando esce dalla finestra
    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('visible');
    });
}

/**
 * Configura gli ascoltatori di eventi per varie animazioni
 */
function setupEventListeners() {
    // Animazione per il menu mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    
    // Aggiungi animazioni di hover su elementi specifici
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.project-image').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-image').style.transform = 'scale(1)';
        });
    });
    
    // Effetto parallasse sul movimento del mouse (opzionale)
    document.addEventListener('mousemove', function(e) {
        const hero = document.querySelector('.hero');
        if (hero) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            const heroImage = hero.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        }
    });
    
    // Aggiungi effetto ripple ai bottoni (opzionale)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Aggiungi effetti di testo digitato per l'hero section
 * @param {string} selector - Selettore dell'elemento da animare
 * @param {array} texts - Array di testi da mostrare
 */
function typeText(selector, texts) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    let deletingDelay = 75;
    let newTextDelay = 2000;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Cancella caratteri
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = deletingDelay;
        } else {
            // Aggiungi caratteri
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }
        
        // Cambia stato
        if (!isDeleting && charIndex === currentText.length) {
            // Attendi prima di cancellare
            typingDelay = newTextDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Passa al testo successivo
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, typingDelay);
    }
    
    // Avvia l'animazione
    setTimeout(type, newTextDelay);
}

// Funzione per avviare l'effetto di scrittura sulla hero section
function initTypewriterEffect() {
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        // Array di testi da alternare
        const texts = [
            originalText,
            "Web Developer",
            "App Developer",
            "UI Designer"
        ];
        
        typeText('.hero-content h2', texts);
    }
}

// Uncomment to enable typewriter effect
// window.addEventListener('load', initTypewriterEffect);