import { createElement } from '../../../utils/dom.js';

export function createFeatureCard(feature) {
    const card = createElement('div', 'feature-card');
    card.innerHTML = `
        <div class="feature-icon">${feature.icon}</div>
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-description">${feature.description}</p>
    `;
    return card;
}