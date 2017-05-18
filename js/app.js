/**
 * 
 *  main page
 */

window.addEventListener('load', function () {


    var map = L.map('mapid',{scrollWheelZoom:false}).setView([35.2271, -80.8431], 13); 


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

}); 