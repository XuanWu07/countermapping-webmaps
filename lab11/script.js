
mapboxgl.accessToken = 'pk.eyJ1IjoieHVhbnd1MDciLCJhIjoiY2xuMXdhN29kMDJqeTJqbDl2ZWMxdHB0ciJ9.OB0_cwfVLHeaeHjL43cY_g';

var map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/xuanwu07/clokv5sds000b01nwh8isb07n', 
  center: [-122.4194, 37.7749], 
  zoom: 12 
});

map.on('load',function(){
  //console.log('map');

  map.addSource('restaurantSource',{
    'type':'vector',
    'url':'mapbox://xuanwu07.brae8h85'
  });

  map.addLayer({
  'id': 'restaurantLayer',
  'type': 'circle',
  'source': 'restaurantSource',
  'source-layer': 'Historical_Restaurant_Scores_-427hq0',
  'paint': {
  'circle-color': [
    'step',
    ['to-number',
    ['get', 'inspection_score']],
    '#aaaaaa',
    45, '#440154',
    80, '#3b528b',
    85, '#21908d',
    90, '#5dc963',
    95, '#fde725'
    ]
   }
  });

  map.on('mouseenter', 'inspections', (e) => {
    var name = e.features[0]['properties']['business_name'];
    var textField = document.getElementById('restText');
    textField.innerHTML = name
  });
})