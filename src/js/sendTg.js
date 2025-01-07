document.addEventListener("DOMContentLoaded", () => {
    const BOT_TOKEN = "8081817089:AAHRQ3YfIRC4N5KEgSY-alMnPHL7xRObONg"; 
    const CHAT_ID = "-1002450325460";
    const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // Обработчик для contact-form
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => handleFormSubmit(e, API_URL, CHAT_ID));
    }

});
// sendTg.js
export async function handleFormSubmit(e, apiUrl, chatId) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const message = `Новая заявка с сайта starko.pl\n\n` +
    `Имя: ${formData.get("name")}\n` +
    `Телефон: ${formData.get("phone")}\n` +
    (formData.has("vehicleType") ? `Тип транспорта: ${formData.get("vehicleType")}\n` : "") +
    `Сообщение: ${formData.get("message") || "Нет сообщения"}\n`;

    const data = {
        chat_id: chatId,
        text: message,
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            form.reset();
        } else {
            const error = await response.json();
            console.error("Ошибка:", error);
            alert("Ошибка отправки сообщения.");
        }
    } catch (error) {
        console.error("Ошибка:", error);
        alert("Ошибка отправки сообщения.");
    }
}
