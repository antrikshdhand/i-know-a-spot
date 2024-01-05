import { locations } from '../data/locations.js'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function initializeMap() {
    let map = L.map('leaflet-map').setView([-33.89358647468046, 150.92264228237204], 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    return map;
}

function addAllLocationsToMap(map) {
    locations.forEach((location) => {
        const latLong = location.latLong.split(', ');
        const marker = L.marker(latLong).addTo(map);
        marker.bindPopup(`
            <h2>${location.name}</h2>
            <div class="popup-grid">
                <p>
                    <strong>${capitalizeFirstLetter(location.type)}</strong>
                    <br>
                    ${location.description}
                    <br>
                </p>
                <img class="leaflet-popup-image" src=${location.img}>
            </div>
        `);
    });
}

let map = initializeMap();
addAllLocationsToMap(map);

function onMapClick(e) {
    // When the user clicks on a 
    let popup = L.popup();
        popup
            .setLatLng(e.latlng)
            // .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
}

map.on('click', onMapClick);