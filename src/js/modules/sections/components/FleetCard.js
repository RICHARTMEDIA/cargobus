import { createElement } from '../../../utils/dom.js';

export function createFleetCard(vehicle) {
    const card = createElement('div', 'fleet-card');
    card.innerHTML = `
        <img 
            src="${vehicle.image}" 
            alt="${vehicle.title}" 
            class="fleet-image" 
            loading="lazy"
        >
        <div class="fleet-content">
            <h3 class="fleet-title">${vehicle.title}</h3>
            <ul class="fleet-specs">
                ${vehicle.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>
    `;
    return card;
}