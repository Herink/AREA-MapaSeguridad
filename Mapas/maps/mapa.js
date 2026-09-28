var map = L.map('map', {
    maxZoom: 17,
    minZoom: 13,
    attributionControl:true,
	//el zoom maximo que uno puede acercarse //entre mas alto el numero, mas cercana la distancia//
    maxBounds: [
        //south west
        [-37.1948, -57.0312],
        //north east
        [-37.0164, -56.7004]
        ],
		//el limite impuesto a el mapa
}).setView([-37.1206, -56.8659], 13);
    //la vista predeterminada junto con el zoom
   L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles &copy; Esri'
    }
).addTo(map);
var credctrl = L.controlCredits({
    image: "./dist/images/logo.png",
    link: "http://www.pinamar.gov.ar/",
    text: " "
}).addTo(map);
