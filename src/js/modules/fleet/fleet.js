import { fleetData } from '../../data/fleet-data.js';
import { $ } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';
import { createFleetCard } from './components/FleetCard.js';

export function initFleet() {
    const fleetGrid = $('.fleet-grid');
    if (!fleetGrid) {
        logger.warn('Fleet grid element not found');
        return;
    }
    
    fleetData.forEach(vehicle => {
        const card = createFleetCard(vehicle);
        fleetGrid.appendChild(card);
    });
}