import { logger } from '../../utils/logger.js';
import pl from '../../data/translations/pl.js';
import en from '../../data/translations/en.js';
import ua from '../../data/translations/ua.js';

const translations = { pl, en, ua };
let currentLang = 'pl';

export function updatePageTranslations(lang) {
    try {
        if (!translations[lang]) {
            logger.warn(`Translation not found for language: ${lang}`);
            return;
        }

        currentLang = lang;
        document.documentElement.lang = lang;
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });
        
        logger.info('Translations updated successfully');
    } catch (error) {
        logger.error('Error updating translations:', error);
    }
}

function getTranslation(key) {
    try {
        const keys = key.split('.');
        let value = translations[currentLang];
        
        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) break;
        }
        
        return value || key;
    } catch (error) {
        logger.error('Error getting translation:', error);
        return key;
    }
}