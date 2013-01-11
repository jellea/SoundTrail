function startCounter() {
  var counter = 0;
  setInterval(function(){
    AddTimeMarker(counter);
    console.log('bla');
    counter++;
  }, 1000)
}
