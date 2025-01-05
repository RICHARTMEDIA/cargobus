import { featuresData } from '../../data/sections/features-data.js';
import { $ } from '../../utils/dom.js';

export function initFeatures() {
    const featuresGrid = $('.features-grid');
    if (!featuresGrid) return;

    const title = $('#dlaczego-my .section-title');
    const subtitle = $('#dlaczego-my .section-subtitle');

    if (title) title.textContent = featuresData.title;
    if (subtitle) subtitle.textContent = featuresData.subtitle;

    featuresData.features.forEach(feature => {
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