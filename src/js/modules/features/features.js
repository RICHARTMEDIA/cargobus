import { featuresData } from '../../data/features-data.js';
import { $ } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';
import { createFeatureCard } from './components/FeatureCard.js';

export function initFeatures() {
    const featuresGrid = $('.features-grid');
    if (!featuresGrid) {
        logger.warn('Features grid element not found');
        return;
    }
    
    featuresData.forEach(feature => {
        const card = createFeatureCard(feature);
        featuresGrid.appendChild(card);
    });
}