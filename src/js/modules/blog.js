import { blogPosts } from '../data/blog-data.js';
import { $ } from '../utils/dom.js';
import { logger } from '../utils/logger.js';

export function initBlog() {
    const blogGrid = $('.blog-grid');
    if (!blogGrid) {
        logger.warn('Blog grid element not found');
        return;
    }
    
    const displayPosts = blogPosts.slice(0, 3);
    displayPosts.forEach(post => {
        const card = createBlogCard(post);
        blogGrid.appendChild(card);
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="blog-image" loading="lazy">
        <div class="blog-content">
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="${post.readMoreUrl}" class="blog-link">
                Czytaj więcej
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    `;
    return card;
}