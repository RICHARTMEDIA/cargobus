import { initFleet } from './modules/fleet.js';
import { initFeatures } from './modules/features.js';

document.addEventListener('DOMContentLoaded', () => {
    initFleet();
    initFeatures();
});