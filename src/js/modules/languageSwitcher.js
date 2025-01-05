import { languageStore } from './i18n/languageStore.js';
import { updatePageTranslations } from './i18n/translator.js';

const LANGUAGES = {
    pl: { flag: '🇵🇱', label: 'Polski' },
    en: { flag: '🇬🇧', label: 'English' },
    ua: { flag: '🇺🇦', label: 'Українська' }
};

export function initLanguageSwitcher() {
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;

    const switcher = createLanguageSwitcher();
    nav.insertBefore(switcher, nav.lastElementChild);
    
    updatePageTranslations();
    languageStore.subscribe(updatePageTranslations);
}

function createLanguageSwitcher() {
    const container = document.createElement('div');
    container.className = 'language-switcher';
    
    const button = document.createElement('button');
    button.className = 'language-button';
    button.innerHTML = `${LANGUAGES[languageStore.getCurrentLanguage()].flag}`;
    
    const dropdown = document.createElement('div');
    dropdown.className = 'language-dropdown';
    
    Object.entries(LANGUAGES).forEach(([lang, { flag, label }]) => {
        const option = document.createElement('button');
        option.className = 'language-option';
        option.innerHTML = `${flag} ${label}`;
        option.onclick = () => {
            languageStore.setLanguage(lang);
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