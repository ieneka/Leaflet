var myMap = L.map("myMap").setView([42.533645, 1.521554], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 14,
}).addTo(myMap);

var markers = L.markerClusterGroup();
let data_markers = [];
let kind_food = [];
let food = [];

function onMapLoad() {
  const url = "http://localhost/mapa/api/apiRestaurants.php";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data_markers = data;
      render_to_map(data_markers, "Todos");
      Select(data_markers);
    });
}

function Select(data_markers){
  $.each(data_markers, function (index) {    
    kind_food.push(data_markers[index].kind_food.split(","));
  });
  food = [].concat.apply([], kind_food);
  for(var i = food.length -1; i >=0; i--){
    if(food.indexOf(food[i]) !== i) food.splice(i,1);
  }
  for(var i=0;i<=food.length -1;i++){
    $('#kind_food_selector').append('<option value='+ food[i]+'>'+ food[i] +'</option>');
  }
  
  
console.log(food)
}
$("#kind_food_selector").on("change", function () {
  console.log(this.value);
  render_to_map(data_markers, this.value);
});

function render_to_map(data_markers, filter) {
  markers.clearLayers();
  $.each(data_markers, function (index) {
       var comida = data_markers[index].kind_food.split(",");
    if (
      filter == "Todos" ||
      comida.includes(filter)
    ) {
        marker = L.marker([
        data_markers[index].lat,
        data_markers[index].lng,
      ]).bindPopup("<b>" + data_markers[index].name + "</b>" + "<p>"+ data_markers[index].adress +"</p>" +  "<b>"+ comida + "</b>" );
      markers.addLayer(marker);
    } else {
    }
    markers.addTo(myMap);
  });
  
      
}
