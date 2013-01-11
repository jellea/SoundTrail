function cursorWalk (){
  cursor = L.marker([L.route[0].lat,L.route[0].lon]).addTo(map);
  i=1135;
  setInterval(function(){
    if (i < L.route.length){
      if (L.route[i].lat != undefined){
        cursor.setLatLng([L.route[i].lat,L.route[i].lon]);
        cursor.update();
      }
      i++;
    }
  },1000)
}

$(document).ready(function(){

  window.map = new L.Map('mapid', {center: new L.LatLng(53.201210, 5.813510), zoom: 11});

  var track = new L.GPX("track.gpx", {async: true})
    .on("loaded", function(e) {
      map.fitBounds(e.target.getBounds());
      cursorWalk();
    });

  map.addLayer(track);

  //var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  var layer = new L.StamenTileLayer("toner");

  map.addLayer(layer);
  //map.addControl(new L.Control.Layers({}, {'GPX':track}));

})
