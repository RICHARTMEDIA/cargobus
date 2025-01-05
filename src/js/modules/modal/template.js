import { VEHICLE_OPTIONS } from './constants.js';

export function getModalTemplate() {
    return `
        <div class="modal-overlay"></div>
        <div class="modal-container">
            <button class="modal-close" aria-label="Zamknij">×</button>
            <div class="modal-content">
                <h2 class="modal-title">Złóż zapytanie o transport</h2>
                <form class="modal-form" id="transportForm">
                    <div class="form-group">
                        <label for="vehicleType">Typ pojazdu</label>
                        <select id="vehicleType" name="vehicleType" class="select-vehicle" required>
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
                    <div class="form-group">
                        <label for="message">Wiadomość</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" class="button button-primary">Wyślij zapytanie</button>
                </form>
            </div>
        </div>
    `;
}