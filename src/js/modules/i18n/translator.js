import pl from '../../data/translations/pl.js';
import en from '../../data/translations/en.js';
import ua from '../../data/translations/ua.js';
import { languageStore } from './languageStore.js';

const translations = { pl, en, ua };

export function translate(key) {
    const keys = key.split('.');
    let value = translations[languageStore.getCurrentLanguage()];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

export function updatePageTranslations() {
    const currentLang = languageStore.getCurrentLanguage();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translate(key);
    });
    
    // Update dynamic content
    updateDynamicContent(currentLang);
}

function updateDynamicContent(currentLang) {
    updateFleetCards(currentLang);
    updateFeatureCards(currentLang);
}

function updateFleetCards(currentLang) {
    const fleetGrid = document.querySelector('.fleet-grid');
    if (!fleetGrid) return;

    const vehicleTranslations = translations[currentLang]?.sections?.fleet?.vehicles;
    if (!vehicleTranslations) return;

    fleetGrid.querySelectorAll('.fleet-card').forEach(card => {
        const title = card.querySelector('.fleet-title');
        if (!title) return;

        if (title.textContent.includes('8 palet')) {
            title.textContent = vehicleTranslations.bus8;
        } else if (title.textContent.includes('10 palet')) {
            title.textContent = vehicleTranslations.bus10;
        } else if (title.textContent.includes('windą')) {
            title.textContent = vehicleTranslations.busLift;
        }
    });
}

function updateFeatureCards(currentLang) {
    const featuresGrid = document.querySelector('.features-grid');
    if (!featuresGrid) return;

    const features = translations[currentLang]?.sections?.whyUs?.features;
    if (!features) return;

    featuresGrid.querySelectorAll('.feature-card').forEach(card => {
        const title = card.querySelector('.feature-title');
        const description = card.querySelector('.feature-description');
        if (!title || !description) return;

        if (title.textContent.includes('5+')) {
            title.textContent = features.experience.title;
            description.textContent = features.experience.description;
        } else if (title.textContent.includes('24/7')) {
            title.textContent = features.availability.title;
            description.textContent = features.availability.description;
        } else if (title.textContent.includes('4000')) {
            title.textContent = features.clients.title;
            description.textContent = features.clients.description;
        } else if (title.textContent.includes('flota')) {
            title.textContent = features.fleet.title;
            description.textContent = features.fleet.description;
        } else if (title.textContent.includes('Profesjonalizm')) {
            title.textContent = features.professionalism.title;
            description.textContent = features.professionalism.description;
        }
    });
}