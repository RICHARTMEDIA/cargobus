import { heroData } from '../../data/sections/hero-data.js';
import { $ } from '../../utils/dom.js';

export function initHero() {
    const heroContent = $('.hero-content');
    if (!heroContent) return;

    const h1 = heroContent.querySelector('h1');
    const p = heroContent.querySelector('p');
    const button = heroContent.querySelector('.cta-button');

    if (h1) h1.textContent = heroData.title;
    if (p) p.textContent = heroData.subtitle;
    if (button) button.textContent = heroData.ctaText;

    const hero = $('.hero');
    if (hero) {
        hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroData.backgroundImage}')`;
    }
}