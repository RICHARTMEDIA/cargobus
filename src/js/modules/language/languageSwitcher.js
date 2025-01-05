import { $, createElement } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';
import { updatePageTranslations } from './translations.js';

const LANGUAGES = {
    pl: { flag: '🇵🇱', label: 'Polski' },
    en: { flag: '🇬🇧', label: 'English' },
    ua: { flag: '🇺🇦', label: 'Українська' }
};

export function initLanguageSwitcher() {
    try {
        const nav = $('.nav-menu');
        if (!nav) {
            logger.warn('Navigation menu not found');
            return;
        }

        const switcher = createLanguageSwitcher();
        nav.insertBefore(switcher, nav.lastElementChild);
        
        // Initialize translations with default language
        updatePageTranslations('pl');
        
        logger.info('Language switcher initialized');
    } catch (error) {
        logger.error('Error initializing language switcher:', error);
    }
}

function createLanguageSwitcher() {
    const container = createElement('div', 'language-switcher');
    const button = createElement('button', 'language-button', LANGUAGES.pl.flag);
    const dropdown = createElement('div', 'language-dropdown');
    
    Object.entries(LANGUAGES).forEach(([lang, { flag, label }]) => {
        const option = createElement('button', 'language-option', `${flag} ${label}`);
        option.onclick = () => {
            updatePageTranslations(lang);
            button.innerHTML = flag;
            dropdown.classList.remove('show');
        };
        dropdown.appendChild(option);
    });
    
    button.onclick = (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    };
    
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    container.appendChild(button);
    container.appendChild(dropdown);
    return container;
}