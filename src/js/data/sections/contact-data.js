export const contactData = {
    title: 'Kontakt',
    address: {
        icon: '📍',
        label: 'Adres:',
        value: 'ul. Filipinki 6, 02-207 Warszawa'
    },
    phone: {
        icon: '📞',
        label: 'Telefon:',
        value: '+48 721 895 873'
    },
    email: {
        icon: '✉️',
        label: 'E-mail:',
        value: 'biuro@starko.com.pl'
    },
    form: {
        title: 'Formularz kontaktowy:',
        fields: [
            { name: 'name', label: 'Imię', type: 'text', required: true },
            { name: 'phone', label: 'Telefon', type: 'tel', required: true },
            { name: 'message', label: 'Wiadomość', type: 'textarea', required: true }
        ],
        submitText: 'Wyślij wiadomość'
    }
};