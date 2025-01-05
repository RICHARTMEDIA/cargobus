import { initHero } from './sections/hero.js';
import { initWorkflow } from './sections/workflow.js';
import { initFleet } from './sections/fleet.js';
import { initFeatures } from './sections/features.js';
import { initGallery } from './sections/gallery.js';
import { initContact } from './sections/contact.js';
import { initHeader } from './sections/header.js';
import { initFooter } from './sections/footer.js';
import { initModalTriggers } from './modal/index.js';

export function initModules() {
    // Initialize all modules
    initHeader();
    initHero();
    initWorkflow();
    initFleet();
    initFeatures();
    initGallery();
    initContact();
    initFooter();
    
    // Initialize modal triggers last
    initModalTriggers();
}