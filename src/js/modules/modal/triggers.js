import { openModal } from './modal.js';
import { $ } from '../../utils/dom.js';

export function initModalTriggers() {
    // Get all buttons that should trigger the modal
    const triggers = document.querySelectorAll('.cta-button, .nav-button:not([href^="tel:"])');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });
}