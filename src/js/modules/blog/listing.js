import { blogPosts } from '../../data/blog-data.js';
import { debounce } from '../../utils/debounce.js';

export function initBlogListing() {
    const searchInput = document.getElementById('searchInput');
    const blogGrid = document.getElementById('blogGrid');
    
    if (!searchInput || !blogGrid) return;

    // Initial render of all posts
    renderPosts(blogPosts, blogGrid);

    // Setup search with debounce
    searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPosts = filterPosts(blogPosts, searchTerm);
        renderPosts(filteredPosts, blogGrid);
    }, 300));
}

function filterPosts(posts, searchTerm) {
    if (!searchTerm) return posts;
    
    return posts.filter(post => {
        return post.title.toLowerCase().includes(searchTerm) ||
               post.excerpt.toLowerCase().includes(searchTerm);
    });
}

function renderPosts(posts, container) {
    container.innerHTML = posts.length ? 
        posts.map(post => createBlogCard(post)).join('') :
        '<p class="no-results">Nie znaleziono artykułów.</p>';
}

function createBlogCard(post) {
    return `
        <div class="blog-card">
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
        </div>
    `;
}