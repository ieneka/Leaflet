var myMap = L.map('myMap').setView([41.3870154, 2.1700471], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(myMap);

var popup = L.popup();
var marker = {};

function onMarker(e) {
    myMap.removeLayer(marker);
    marker = L.marker([e.latlng.lat,e.latlng.lng],).addTo(myMap)
    .bindPopup("Has hecho click en la coordenada:<br> " +  e.latlng.lat.toString() + "," +  e.latlng.lng.toString())
    .openPopup();

    myMap.flyTo([e.latlng.lat,e.latlng.lng],18);
}



myMap.on('click',onMarker);
