// ... (previous imports and code) ...

function createFleetCards() {
    const fleetGrid = document.querySelector('.fleet-grid');
    
    fleetData.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'fleet-card';
        card.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.title}" class="fleet-image">
            <div class="fleet-content">
                <h3 class="fleet-title">${vehicle.title}</h3>
                <ul class="fleet-specs">
                    ${vehicle.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
        `;
        fleetGrid.appendChild(card);
    });
}

function createFeatureCards() {
    const featuresGrid = document.querySelector('.features-grid');
    const features = [
        {
            title: '5+ lat doświadczenia',
            description: 'Od ponad 5 lat świadczymy niezawodne usługi transportowe.',
            icon: '🏆'
        },
        {
            title: 'Dostępność 24/7',
            description: 'Pracujemy bez przerw, zawsze gotowi pomóc.',
            icon: '⏰'
        },
        {
            title: '4000 zadowolonych klientów',
            description: '70% nowych klientów pochodzi z poleceń.',
            icon: '👥'
        },
        {
            title: 'Nowoczesna flota',
            description: 'Regularne przeglądy techniczne zapewniają niezawodność.',
            icon: '🚛'
        },
        {
            title: 'Profesjonalizm',
            description: 'Kierowcy Starko to doświadczeni specjaliści z doskonałą znajomością dróg Polski i UE.',
            icon: '✨'
        }
    ];
    
    features.forEach(feature => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.innerHTML = `
            <div class="feature-icon">${feature.icon}</div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
        `;
        featuresGrid.appendChild(card);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFleetCards();
    createFeatureCards();
    // ... (previous initialization code) ...
});