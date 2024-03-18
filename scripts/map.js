import { auth } from './firebase.js'
import { locations, addLocation } from '../data/locations.js'

function checkLoggedIn() {
    console.log(auth.currentUser);
    const user = auth.currentUser;
    if (user) {
        console.log("User is logged in:", user.email);
        // Redirect or show authenticated content here
    } else {
        console.log("User is not logged in");
        // Redirect to login page or show login form
    }
}

// Check if a user is logged in after page loads
document.addEventListener('DOMContentLoaded', checkLoggedIn());

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

export function addAllLocationsToMap(map) {
    locations.forEach((location) => {
        const latLong = location.latLong.split(',');
        latLong[0] = Number(latLong[0].trim());
        latLong[1] = Number(latLong[1].trim());

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

export const map = initializeMap();
addAllLocationsToMap(map);

function formatLatLng(latlng) {
    const lat = latlng.lat.toFixed(5);
    const lng = latlng.lng.toFixed(5);

    return `${lat}, ${lng}`;
}

let marker;
function onMapClick(e) {
    // If a marker already exists, remove it from the map
    if (marker) {
        map.removeLayer(marker);
    }

    // Create a new marker at the clicked location and add it to the map
    marker = L.marker(e.latlng, {
        'title': 'New location'
    }).addTo(map);

    const markerString = formatLatLng(e.latlng);
    document.getElementById('lat-long').value = markerString;
}

map.on('click', onMapClick);

document.getElementById('new-location-submit-button').addEventListener('click', addLocation);
