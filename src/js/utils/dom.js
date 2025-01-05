export const $ = (selector, context = document) => context.querySelector(selector);
export const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

export const createElement = (tag, className, content = '') => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
};

export const addEventListeners = (element, events) => {
    Object.entries(events).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
    });
};