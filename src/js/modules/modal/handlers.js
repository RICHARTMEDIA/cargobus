import { logger } from '../../utils/logger.js';
import { createModal } from './modal.js';

export function handleModalSubmit(e, modal) {
    e.preventDefault();
    
    try {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        logger.info('Modal form submitted:', data);
        closeModal(modal);
        alert('Dziękujemy za zapytanie! Skontaktujemy się wkrótce.');
    } catch (error) {
        logger.error('Error submitting modal form:', error);
        alert('Wystąpił błąd. Spróbuj ponownie później.');
    }
}

export function openModal() {
    const existingModal = document.querySelector('.modal');
    if (existingModal) return;

    const modal = createModal();
    document.body.appendChild(modal);
    
    requestAnimationFrame(() => {
        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
    });
}

export function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
}