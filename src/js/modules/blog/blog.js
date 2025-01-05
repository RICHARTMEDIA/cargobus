import { blogPosts } from '../../data/blog-data.js';
import { $ } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';
import { createBlogCard } from './components/BlogCard.js';

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