

var myMap = L.map('myMap').setView([41.3870154, 2.1700471], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([41.3868561,2.1661102]).addTo(myMap);
marker.bindPopup("<h1>Restaurant Centfocs</h1></br><p>Restaurante Mediterráneo</p><p>Carrer de Balmes, 16, 08007 Barcelona</p>").openPopup('onclick');