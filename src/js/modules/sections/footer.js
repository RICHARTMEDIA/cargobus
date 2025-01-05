import { footerData } from '../../data/sections/footer-data.js';
import { $ } from '../../utils/dom.js';

export function initFooter() {
    const footerText = $('.footer-text');
    if (!footerText) return;

    const { copyright, licensing, credits } = footerData;
    footerText.textContent = `${copyright} ${licensing} ${credits}`;
}