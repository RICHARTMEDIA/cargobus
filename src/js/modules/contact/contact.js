import { $ } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';
import { formatPhoneNumber } from '../../utils/format.js';
import { CONFIG } from '../../config/constants.js';

export function initContact() {
    try {
        const form = $('.contact-form');
        const phoneElement = $('.contact-phone');
        
        if (phoneElement) {
            phoneElement.innerHTML = `
                <span class="contact-icon">📞</span>
                <a href="tel:${CONFIG.PHONE}" class="contact-text">
                    ${formatPhoneNumber(CONFIG.PHONE)}
                </a>
            `;
        }

        if (form) {
            form.addEventListener('submit', handleSubmit);
        }
        
        logger.info('Contact module initialized');
    } catch (error) {
        logger.error('Error initializing contact module:', error);
    }
}

async function handleSubmit(e) {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your backend
        console.log('Form submitted:', data);
        
        e.target.reset();
        alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
    } catch (error) {
        logger.error('Error submitting form:', error);
        alert('Wystąpił błąd. Spróbuj ponownie później.');
    }
}