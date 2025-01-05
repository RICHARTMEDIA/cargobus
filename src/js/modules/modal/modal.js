import { getModalTemplate } from './template.js';
import { handleModalSubmit, closeModal } from './handlers.js';

export function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = getModalTemplate();

    setupModalEvents(modal);
    return modal;
}

function setupModalEvents(modal) {
    const overlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-close');
    const form = modal.querySelector('#transportForm');
    
    overlay?.addEventListener('click', () => closeModal(modal));
    closeBtn?.addEventListener('click', () => closeModal(modal));
    form?.addEventListener('submit', (e) => handleModalSubmit(e, modal));
}