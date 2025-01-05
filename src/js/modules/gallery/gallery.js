import { galleryImages } from '../../data/gallery-data.js';
import { $ } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';
import { createGalleryItem } from './components/GalleryItem.js';

export function initGallery() {
    const galleryGrid = $('.gallery-grid');
    if (!galleryGrid) {
        logger.warn('Gallery grid element not found');
        return;
    }
    
    galleryImages.forEach(image => {
        const item = createGalleryItem(image);
        galleryGrid.appendChild(item);
    });
}