import { $ } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';

export function initHero() {
    try {
        const scrollIndicator = $('.scroll-indicator');
        if (!scrollIndicator) {
            logger.warn('Scroll indicator not found');
            return;
        }

        scrollIndicator.addEventListener('click', () => {
            const fleetSection = $('#nasza-flota');
            if (fleetSection) {
                fleetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        logger.info('Hero module initialized');
    } catch (error) {
        logger.error('Error initializing hero module:', error);
    }
}