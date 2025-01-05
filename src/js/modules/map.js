export function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Coordinates for ul. Filipinki 6, Warszawa
    const location = { lat: 52.2081, lng: 21.0021 };

    const map = new google.maps.Map(mapElement, {
        center: location,
        zoom: 15,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{"weight": "2.00"}]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#9c9c9c"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [{"visibility": "on"}]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Starko Transport'
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h3 style="margin: 0 0 5px; color: #0052FF;">Starko Transport</h3>
                <p style="margin: 0;">ul. Filipinki 6<br>02-207 Warszawa</p>
            </div>
        `
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}