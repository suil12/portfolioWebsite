// public/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Chiudi il menu quando si fa clic su un link (su mobile)
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Animazione per le skill bar
    const skillBars = document.querySelectorAll('.skill-level');
    
    // Funzione per verificare se un elemento è visibile nella viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Animazione delle skill bar quando sono nella viewport
    function animateSkillBars() {
        skillBars.forEach(bar => {
            if (isElementInViewport(bar)) {
                // Recupera la larghezza dalla proprietà style
                const width = bar.style.width;
                
                // Reset della larghezza per l'animazione
                bar.style.width = '0';
                
                // Animazione
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease-in-out';
                    bar.style.width = width;
                }, 200);
            }
        });
    }
    
    // Verifica all'inizio e su scroll
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);
    
    // Validazione form di contatto
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Recupera i campi del form
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Rimuovi eventuali messaggi di errore precedenti
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(message => message.remove());
            
            // Valida il nome
            if (nameInput.value.trim() === '') {
                isValid = false;
                showError(nameInput, 'Il nome è obbligatorio');
            }
            
            // Valida l'email
            if (emailInput.value.trim() === '') {
                isValid = false;
                showError(emailInput, 'L\'email è obbligatoria');
            } else if (!isValidEmail(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Inserisci un\'email valida');
            }
            
            // Valida il messaggio
            if (messageInput.value.trim() === '') {
                isValid = false;
                showError(messageInput, 'Il messaggio è obbligatorio');
            }
            
            // Se ci sono errori, impedisci l'invio del form
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Funzione per mostrare un messaggio di errore sotto un input
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = message;
        errorDiv.style.color = 'var(--error-color)';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        formGroup.appendChild(errorDiv);
        
        // Aggiungi una classe all'input per mostrare visivamente l'errore
        input.style.borderColor = 'var(--error-color)';
        
        // Rimuovi l'errore quando l'utente inizia a digitare
        input.addEventListener('input', function() {
            const error = formGroup.querySelector('.error-message');
            if (error) {
                error.remove();
                input.style.borderColor = '';
            }
        });
    }
    
    // Funzione per validare l'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Effetto di scroll fluido per i link di navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});