import { logger } from '../../utils/logger.js';
import { createModal } from './modal.js';
import { handleFormSubmit } from '../../sendTg.js'; 

export function openModal() {
    const BOT_TOKEN = "8081817089:AAHRQ3YfIRC4N5KEgSY-alMnPHL7xRObONg";
    const CHAT_ID = "-1002450325460";
    const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const existingModal = document.querySelector('.modal');
    if (existingModal) return;

    const modal = createModal(); // Создаём модальное окно
    document.body.appendChild(modal);

    // Назначаем обработчик отправки формы
    const form = modal.querySelector('#transportForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            handleFormSubmit(e, API_URL, CHAT_ID)
                .then(() => {
                    form.reset();
                    closeModal(modal);
                })
                .catch((error) => {
                    console.error('Ошибка при отправке:', error);
                    alert('Ошибка отправки сообщения. Попробуйте ещё раз.');
                });
        });
    }

    // Плавное открытие модального окна
    requestAnimationFrame(() => {
        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
    });
}

export function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 300);
}
