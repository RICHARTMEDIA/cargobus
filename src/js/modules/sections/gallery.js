import { galleryData } from '../../data/sections/gallery-data.js';
import { $ } from '../../utils/dom.js';
import { createGalleryItem } from './components/GalleryItem.js';

export function initGallery() {
    const gallerySection = $('.gallery');
    if (!gallerySection) return;

    const title = gallerySection.querySelector('.section-title');
    if (title) title.textContent = galleryData.title;

    const galleryGrid = $('.gallery-grid');
    if (galleryGrid) {
        galleryData.images.forEach(image => {
            const item = createGalleryItem(image);
            galleryGrid.appendChild(item);
        });
    }
}