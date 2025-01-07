/* gallery.js */

// 1) Импортируем нужные модули из Swiper (Navigation, Pagination и т.п.)
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { galleryData } from '../../data/sections/gallery-data.js';
import { $ } from '../../utils/dom.js';
import { createGalleryItem } from './components/GalleryItem.js';

// Главная функция инициализации
export function initGallery() {
    const gallerySection = $('.gallery');
    if (!gallerySection) return;

    // Заголовок
    const title = gallerySection.querySelector('.section-title');
    if (title) title.textContent = galleryData.title;

    // Контейнер для изображений (грид)
    const galleryGrid = $('.gallery-grid');
    if (galleryGrid) {
        // Очищаем на всякий случай
        galleryGrid.innerHTML = '';

        // Создаем .gallery-item для каждого изображения
        galleryData.images.forEach((image) => {
            const item = createGalleryItem(image);
            galleryGrid.appendChild(item);
        });
    }

    // Проверяем, мобильное ли устройство (max-width: 768px)
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile && galleryGrid) {
        // Запускаем слайдер только на мобильных
        initMobileSlider(galleryGrid);
    }
}

/**
 * Превращает вашу .gallery-grid в слайдер Swiper
 * только на мобильном разрешении
 */
function initMobileSlider(galleryGrid) {
    // 1) Создаём контейнер под Swiper
    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper', 'gallery-swiper');

    // 2) Создаём обёртку для слайдов
    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');

    // 3) Переносим все .gallery-item -> .swiper-slide
    const items = Array.from(galleryGrid.children); // ваши div.gallery-item
    items.forEach((item) => {
        item.classList.remove('gallery-item');
        item.classList.add('swiper-slide');
        swiperWrapper.appendChild(item);
    });

    // 4) Вставляем обёртку в контейнер
    swiperContainer.appendChild(swiperWrapper);

    // 5) Добавляем элементы навигации (стрелки) — если нужны
    const btnPrev = document.createElement('div');
    btnPrev.classList.add('swiper-button-prev');
    swiperContainer.appendChild(btnPrev);

    const btnNext = document.createElement('div');
    btnNext.classList.add('swiper-button-next');
    swiperContainer.appendChild(btnNext);

    // Можно добавить pagination (точки), если нужно
    const paginationEl = document.createElement('div');
    paginationEl.classList.add('swiper-pagination');
    swiperContainer.appendChild(paginationEl);

    // 6) Заменяем вашу .gallery-grid на новый swiper-контейнер
    galleryGrid.parentNode.replaceChild(swiperContainer, galleryGrid);

    // 7) Инициализируем Swiper
    new Swiper(swiperContainer, {
        // Подключаем модули
        modules: [Navigation, Pagination],

        // Настройки
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Убираем или оставляем, если нужно листать мышкой:
        simulateTouch: true, // свайп пальцем (по умолчанию true)
        // grabCursor: true,   // если нужно, чтобы курсор был "рукой"

        // Если вы захотите показывать сразу несколько слайдов на «планшете»,
        // можете добавить breakpoints:
        breakpoints: {
            // например, всё, что больше 768, оставляет грид (но у нас сейчас замена)
            // если хотите в Swiper тоже другие настройки, можете задать:
            // 769: {
            //   slidesPerView: 3
            // }
        },
    });
}
