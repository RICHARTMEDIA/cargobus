import { fleetData } from '../data/fleet-data.js';

export function initFleet() {
    const fleetGrid = document.querySelector('.fleet-grid');
    if (!fleetGrid) return;
    
    fleetData.forEach(vehicle => {
        const card = createFleetCard(vehicle);
        fleetGrid.appendChild(card);
    });
}

function createFleetCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'fleet-card';
    card.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.title}" class="fleet-image">
        <div class="fleet-content">
            <h3 class="fleet-title">${vehicle.title}</h3>
            <ul class="fleet-specs">
                ${vehicle.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>
    `;
    return card;
}