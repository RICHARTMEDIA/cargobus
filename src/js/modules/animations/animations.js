import { $$ } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';

export function initAnimations() {
    try {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = $$('.animate-on-scroll');
        animatedElements.forEach(element => observer.observe(element));

        logger.info('Animations initialized');
    } catch (error) {
        logger.error('Error initializing animations:', error);
    }
}