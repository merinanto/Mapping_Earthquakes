// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);