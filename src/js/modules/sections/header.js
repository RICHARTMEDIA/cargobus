import { $ } from '../../utils/dom.js';
import { CONFIG } from '../../config/constants.js';
import { isMobileDevice } from '../../utils/device.js';
import { openModal } from '../modal/handlers.js';

export function initHeader() {
    const header = $('.header');
    if (!header) return;

    const phoneButton = header.querySelector('.nav-button');
    if (phoneButton) {
        phoneButton.textContent = CONFIG.PHONE;
        
        phoneButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (isMobileDevice()) {
                window.location.href = `tel:${CONFIG.PHONE.replace(/\s/g, '')}`;
            } else {
                openModal();
            }
        });
    }

    initScrollBehavior(header);
}

function initScrollBehavior(header) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScroll = currentScroll;
    });
}