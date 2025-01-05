import { openModal } from './handlers.js';
import { logger } from '../../utils/logger.js';

export function initModalTriggers() {
    try {
        const triggers = document.querySelectorAll('.cta-button');
        
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });

        logger.info('Modal triggers initialized');
    } catch (error) {
        logger.error('Error initializing modal triggers:', error);
    }
}

export { openModal, closeModal } from './handlers.js';