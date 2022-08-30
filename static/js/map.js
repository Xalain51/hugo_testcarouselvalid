var map = L.map('map').setView([49.2588217, 4.0304717], 14);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap'
}).addTo(map);