import { featuresData } from '../data/features-data.js';

export function initFeatures() {
    const featuresGrid = document.querySelector('.features-grid');
    if (!featuresGrid) return;
    
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