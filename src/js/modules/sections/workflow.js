import { workflowData } from '../../data/sections/workflow-data.js';
import { $ } from '../../utils/dom.js';

export function initWorkflow() {
    const workflowGrid = $('.workflow-grid');
    if (!workflowGrid) return;

    const title = $('#jak-pracujemy .section-title');
    const subtitle = $('#jak-pracujemy .section-subtitle');

    if (title) title.textContent = workflowData.title;
    if (subtitle) subtitle.textContent = workflowData.subtitle;

    workflowData.steps.forEach(step => {
        const card = createWorkflowCard(step);
        workflowGrid.appendChild(card);
    });
}

function createWorkflowCard(step) {
    const card = document.createElement('div');
    card.className = 'workflow-card';
    card.innerHTML = `
        <div class="workflow-number">${step.number}</div>
        <h3 class="workflow-title">${step.title}</h3>
        <p class="workflow-description">${step.description}</p>
    `;
    return card;
}