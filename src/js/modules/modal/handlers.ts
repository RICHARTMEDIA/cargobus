import { logger } from '../../utils/logger';
import { ModalFormData } from './types';
import { createModal } from './modal';

export function handleModalSubmit(e: SubmitEvent, modal: HTMLElement) {
    e.preventDefault();
    
    try {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData) as ModalFormData;
        
        logger.info('Modal form submitted:', data);
        closeModal(modal);
        alert('Dziękujemy za zapytanie! Skontaktujemy się wkrótce.');
    } catch (error) {
        logger.error('Error submitting modal form:', error);
        alert('Wystąpił błąd. Spróbuj ponownie później.');
    }
}

export function openModal(): void {
    const existingModal = document.querySelector('.modal');
    if (existingModal) return;

    const modal = createModal();
    document.body.appendChild(modal);
    
    requestAnimationFrame(() => {
        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
    });
}

export function closeModal(modal: HTMLElement): void {
    if (!modal) return;
    
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
}