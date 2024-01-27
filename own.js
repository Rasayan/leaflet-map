var mymap = L.map('mapid').setView([22.481358, 88.377492],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
L.marker([22.481358, 88.377492]).addTo(mymap)
    .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

// making a fixed pop-up 
var popup = L.popup()
    .setLatLng([22.399358, 88.277492])
    .setContent("I am a standalone popup.")
    .openOn(mymap);


// finding latitude // longitude on click
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
    
mymap.on('click', onMapClick);