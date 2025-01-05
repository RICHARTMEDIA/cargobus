import { VEHICLE_OPTIONS } from './modal/constants.js';

function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-container">
            <button class="modal-close">×</button>
            <div class="modal-content">
                <h2 class="modal-title">Zostaw prośbę o transport</h2>
                <form class="modal-form" id="transportForm">
                    <div class="form-group">
                        <label for="vehicleType">Typ pojazdu (opcjonalnie)</label>
                        <select id="vehicleType" name="vehicleType" class="select-vehicle">
                            <option value="">Wybierz typ pojazdu</option>
                            ${VEHICLE_OPTIONS.map(option => `
                                <option value="${option.value}">
                                    ${option.label} - ${option.details}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">Imię *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Telefon *</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <button type="submit" class="button button-primary">Zostaw zgłoszenie</button>
                </form>
            </div>
        </div>
    `;

    const overlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-close');
    const form = modal.querySelector('#transportForm');
    
    overlay.addEventListener('click', () => closeModal(modal));
    closeBtn.addEventListener('click', () => closeModal(modal));
    form.addEventListener('submit', (e) => handleSubmit(e, modal));

    return modal;
}

function handleSubmit(e, modal) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        vehicleType: formData.get('vehicleType') || 'not_selected',
        name: formData.get('name'),
        phone: formData.get('phone')
    };
    
    console.log('Form submitted:', data);
    closeModal(modal);
    alert('Dziękujemy za zgłoszenie! Skontaktujemy się wkrótce.');
}

function openModal(modal) {
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
}

export function initModal() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const modal = createModal();
            document.body.appendChild(modal);
            openModal(modal);
        });
    }
}