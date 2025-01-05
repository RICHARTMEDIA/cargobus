import { createElement } from '../../../utils/dom.js';

export function createGalleryItem(image) {
    const item = createElement('div', 'gallery-item');
    item.innerHTML = `
        <img 
            src="${image.url}" 
            alt="${image.alt}" 
            class="gallery-image"
            loading="lazy"
        >
    `;
    return item;
}