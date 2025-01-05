import { workflowSteps } from '../../data/workflow-data.js';
import { $ } from '../../utils/dom.js';
import { logger } from '../../utils/logger.js';
import { createWorkflowCard } from './components/WorkflowCard.js';

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