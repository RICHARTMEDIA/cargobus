import { workflowSteps } from '../data/workflow-data.js';
import { $ } from '../utils/dom.js';
import { logger } from '../utils/logger.js';

export function initWorkflow() {
    const workflowGrid = $('.workflow-grid');
    if (!workflowGrid) {
        logger.warn('Workflow grid element not found');
        return;
    }
    
    workflowSteps.forEach(step => {
        const card = createWorkflowCard(step);
        workflowGrid.appendChild(card);
    });
}

function createWorkflowCard(step) {
    const card = document.createElement('div');
    card.className = 'workflow-card';
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