$(document).ready(function(){
  var map = new L.Map('map', {center: new L.LatLng(53.201210, 5.813510), zoom: 11});

  var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');


  var track = new L.GPX("track.gpx", {async: true})
    .on("loaded", function(e) { map.fitBounds(e.target.getBounds()); });
  //var layer = new L.StamenTileLayer("toner");

  map.addLayer(track);
   //map.addLayer(layer);
  map.addLayer(osm);
  //map.addControl(new L.Control.Layers({}, {'GPX':track}));
})
