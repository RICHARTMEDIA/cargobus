import { formatPhoneNumber } from '../utils/format.js';

export function initContact() {
    const form = document.querySelector('.contact-form');
    const phoneElement = document.querySelector('.contact-phone');
    
    if (phoneElement) {
        const phone = '+48721895873';
        phoneElement.innerHTML = `
            <span class="contact-icon">📞</span>
            <a href="tel:${phone}" class="contact-text">${formatPhoneNumber(phone)}</a>
        `;
    }

    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    
    // Clear form
    e.target.reset();
    
    // Show success message
    alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
}