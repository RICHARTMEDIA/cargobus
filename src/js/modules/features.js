import { featuresData } from '../data/features-data.js';
import { $ } from '../utils/dom.js';
import { logger } from '../utils/logger.js';

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

function createFeatureCard(feature) {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
        <div class="feature-icon">${feature.icon}</div>
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-description">${feature.description}</p>
    `;
    return card;
}