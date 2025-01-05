import { $ } from '../utils/dom.js';

export function initHeaderScroll() {
    const header = $('.header');
    if (!header) return;

    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}