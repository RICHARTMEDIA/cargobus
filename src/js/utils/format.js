export function formatPhoneNumber(phone) {
    // Remove any non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Format as: +48 721 895 873
    const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{3})$/);
    
    if (match) {
        return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
    }
    
    return phone;
}