import { createElement } from '../../../utils/dom.js';

export function createWorkflowCard(step) {
    const card = createElement('div', 'workflow-card');
    card.innerHTML = `
        <div class="workflow-icon">${step.icon}</div>
        <div class="workflow-content">
            <div class="workflow-number">${step.number}</div>
            <h3 class="workflow-title">${step.title}</h3>
            <p class="workflow-description">${step.description}</p>
        </div>
    `;
    return card;
}