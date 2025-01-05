import { galleryImages } from '../data/gallery-data.js';

export function initGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryImages.forEach(image => {
        const item = createGalleryItem(image);
        galleryGrid.appendChild(item);
    });
}

function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
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