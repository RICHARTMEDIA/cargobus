import { openModal } from './handlers';
import { logger } from '../../utils/logger';

export function initModalTriggers(): void {
    try {
        const triggers = document.querySelectorAll<HTMLElement>(
            '.cta-button, .nav-button:not([href^="tel:"])'
        );
        
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

export { openModal, closeModal } from './handlers';