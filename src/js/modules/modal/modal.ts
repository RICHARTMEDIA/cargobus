import { getModalTemplate } from './template';
import { handleModalSubmit, closeModal } from './handlers';

export function createModal(): HTMLElement {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = getModalTemplate();

    setupModalEvents(modal);
    return modal;
}

function setupModalEvents(modal: HTMLElement): void {
    const overlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-close');
    const form = modal.querySelector('#transportForm');
    
    if (overlay) {
        overlay.addEventListener('click', () => closeModal(modal));
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(modal));
    }
    
    if (form) {
        form.addEventListener('submit', (e) => handleModalSubmit(e, modal));
    }
}