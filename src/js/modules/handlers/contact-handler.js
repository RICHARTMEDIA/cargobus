import { logger } from '../../utils/logger.js';

export function handleContactForm(e) {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your backend
        console.log('Form submitted:', data);
        
        e.target.reset();
        alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
    } catch (error) {
        logger.error('Error submitting contact form:', error);
        alert('Wystąpił błąd. Spróbuj ponownie później.');
    }
}