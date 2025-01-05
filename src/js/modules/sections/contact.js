import { contactData } from '../../data/sections/contact-data.js';
import { $ } from '../../utils/dom.js';
import { handleContactForm } from '../handlers/contact-handler.js';
import { isMobileDevice } from '../../utils/device.js';
import { openModal } from '../modal/handlers.js';

export function initContact() {
    const contactSection = $('#kontakt');
    if (!contactSection) return;

    const title = contactSection.querySelector('.section-title');
    if (title) title.textContent = contactData.title;

    initContactInfo();
    initContactForm();
}

function initContactInfo() {
    const contactInfo = $('.contact-details');
    if (!contactInfo) return;

    const { address, phone, email } = contactData;
    const phoneNumber = phone.value.replace(/\s/g, '');
    
    contactInfo.innerHTML = `
        <div class="contact-item">
            <span class="contact-icon">${address.icon}</span>
            <span class="contact-text">${address.value}</span>
        </div>
        <div class="contact-item">
            <span class="contact-icon">${phone.icon}</span>
            <a href="#" class="contact-text phone-link">${phone.value}</a>
        </div>
        <div class="contact-item">
            <span class="contact-icon">${email.icon}</span>
            <a href="mailto:${email.value}" class="contact-text">${email.value}</a>
        </div>
    `;

    // Add click handler for phone number
    const phoneLink = contactInfo.querySelector('.phone-link');
    if (phoneLink) {
        phoneLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (isMobileDevice()) {
                window.location.href = `tel:${phoneNumber}`;
            } else {
                openModal();
            }
        });
    }
}

function initContactForm() {
    const form = $('.contact-form');
    if (!form) return;

    form.addEventListener('submit', handleContactForm);
}