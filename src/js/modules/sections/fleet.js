import { fleetData } from '../../data/sections/fleet-data.js';
import { $ } from '../../utils/dom.js';
import { createFleetCard } from './components/FleetCard.js';

export function initFleet() {
    const fleetSection = $('#nasza-flota');
    if (!fleetSection) return;

    const title = fleetSection.querySelector('.section-title');
    const subtitle = fleetSection.querySelector('.section-subtitle');

    if (title) title.textContent = fleetData.title;
    if (subtitle) subtitle.textContent = fleetData.subtitle;

    const fleetGrid = $('.fleet-grid');
    if (fleetGrid) {
        fleetData.vehicles.forEach(vehicle => {
            const card = createFleetCard(vehicle);
            fleetGrid.appendChild(card);
        });
    }
}