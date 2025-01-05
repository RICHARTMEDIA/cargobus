import { fleetData } from '../data/fleet-data.js';
import { $ } from '../utils/dom.js';
import { logger } from '../utils/logger.js';

export function initFleet() {
    try {
        const fleetGrid = $('.fleet-grid');
        if (!fleetGrid) {
            logger.warn('Fleet grid element not found');
            return;
        }
        
        fleetData.forEach(vehicle => {
            const card = createFleetCard(vehicle);
            fleetGrid.appendChild(card);
        });
        
        logger.info('Fleet module initialized');
    } catch (error) {
        logger.error('Error initializing fleet module:', error);
    }
}

function createFleetCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'fleet-card';
    card.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.title}" class="fleet-image" loading="lazy">
        <div class="fleet-content">
            <h3 class="fleet-title">${vehicle.title}</h3>
            <ul class="fleet-specs">
                ${vehicle.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>
    `;
    return card;
}