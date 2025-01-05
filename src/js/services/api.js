import { CONFIG } from '../config/constants';

class ApiService {
    async sendContactForm(data) {
        try {
            // Simulate API call
            console.log('Sending form data:', data);
            return { success: true };
        } catch (error) {
            console.error('Error sending form:', error);
            throw error;
        }
    }
}

export const apiService = new ApiService();