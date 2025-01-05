import { apiService } from '../../services/api';
import { $ } from '../../utils/dom';
import { formatPhoneNumber } from '../../utils/format';

export class ContactForm {
    constructor(formSelector) {
        this.form = $(formSelector);
        if (!this.form) return;
        
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        try {
            await apiService.sendContactForm(data);
            this.form.reset();
            alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
        } catch (error) {
            alert('Wystąpił błąd. Spróbuj ponownie później.');
        }
    }
}