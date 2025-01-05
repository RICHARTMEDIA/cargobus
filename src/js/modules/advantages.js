import { advantagesData } from '../data/advantages-data.js';

export function initAdvantages() {
    const advantagesSection = document.querySelector('.advantages-grid');
    if (!advantagesSection) return;
    
    advantagesData.forEach(advantage => {
        const item = createAdvantageItem(advantage);
        advantagesSection.appendChild(item);
    });
}

function createAdvantageItem(advantage) {
    const item = document.createElement('div');
    item.className = 'advantage-item';
    item.innerHTML = `
        <span class="advantage-icon">${advantage.icon}</span>
        <span class="advantage-text">${advantage.text}</span>
    `;
    return item;
}