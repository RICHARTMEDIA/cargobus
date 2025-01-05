export const fadeIn = (element, duration = 300) => {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    requestAnimationFrame(() => {
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = '1';
    });
};

export const fadeOut = (element, duration = 300) => {
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = '0';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
};