import { VEHICLE_OPTIONS } from './constants.js';

export function createModalTemplate() {
    return `
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
}