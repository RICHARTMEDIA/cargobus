import { initBlogListing } from './modules/blog/listing.js';
import { initLanguageSwitcher } from './modules/languageSwitcher.js';
import { initHeaderScroll } from './modules/header.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initLanguageSwitcher();
    initBlogListing();
});