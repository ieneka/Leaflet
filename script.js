var myMap = L.map('myMap').setView([42.533645, 1.521554], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14,
}).addTo(myMap);

//en el clusters almaceno todos los markers
var markers = L.markerClusterGroup();
let data_markers = [];


function onMapLoad() {

    const url = 'http://localhost/mapa/api/apiRestaurants.php';
    
    fetch(url)
	.then(response => response.json())
    .then(data => {

		data_markers = data;
		render_to_map(data_markers,"Todos");
    });
    
    };
    

 /*
	FASE 3.1
		1) Relleno el data_markers con una petición a la api
		2) Añado de forma dinámica en el select los posibles tipos de restaurantes
		3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
    */

$('#kind_food_selector').on('change', function() {
  console.log(this.value);
  render_to_map(data_markers, this.value);
  
});



function render_to_map(data_markers,filter){
        
        
    if (filter == "Todos"){
        markers.clearLayers();
        $.each(data_markers, function (index) {		
            data_markers[index].name;
            data_markers[index].adress;
            data_markers[index].lat;
            data_markers[index].lng;
            data_markers[index].king_food;
                
            marker= L.marker([data_markers[index].lat,data_markers[index].lng])
            .bindPopup('<h3>' + data_markers[index].name + '</h3>' + data_markers[index].adress
            + '<br/><b>' + data_markers[index].king_food +'</b>'); 

            markers.addLayer(marker)
            
        });    

        myMap.addLayer(markers);
    }
    else{
        markers.clearLayers();
        $.each(data_markers, function (index) {	
            var comida = data_markers[index].king_food.split(",");

            if(comida.includes(filter)){
                data_markers[index].name;
                data_markers[index].adress;
                data_markers[index].lat;
                data_markers[index].lng;
                
                    
                marker= L.marker([data_markers[index].lat,data_markers[index].lng])
                .bindPopup('<h3>' + data_markers[index].name + '</h3>' + data_markers[index].adress
                + '<br/><b>' + data_markers[index].king_food +'</b>'); 
    
                markers.addLayer(marker)
            }	       
         
        });    
        myMap.addLayer(markers);
    }
}


        
	/*
	FASE 3.2
		1) Limpio todos los marcadores
		2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
	*/	
    