// Add console.log to check to see if our code is working.
console.log("working");
// An array containing each city's location, state, and population.
// Get data from cities.js


// Create the map object with a center and zoom level.
//let mymap = L.map('mapid').setView([40.7, -94.5], 4);
// Create the map object with center at the San Francisco airport.
let mymap = L.map('mapid').setView([37.6213, -122.3790], 5);
/*
L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);

*/
 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(mymap);
/*
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(mymap);*/

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(mymap);
//let cityData = cities;


// Get data from cities.js
let cityData = cities;

L.circle([34.0522, -118.2437], {
    radius: 3000
 }).addTo(mymap);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    //[37.6213, -122.3790],
    [30.1975,-97.6664],
   // [40.7899, -111.9791],
   [43.6777,-79.6248]
    //[47.4502, -122.3088]
  ];
// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
   color: "yellow"
}).addTo(mymap);

/*
 L.circleMarker([34.0522, -118.2437], {
    radius: 3000,color:'white',fillColor:'#ffffa1'
 }).addTo(mymap);
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker([34.0522, -118.2437], {
        radius: 100,color:'white',fillColor:'#ffffa1'
     }).
    //L.marker(city.location).
    bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(mymap);
   });*/