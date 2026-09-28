function getColor(d) {
  return d > 20  ? '#800026' :
         d > 16  ? '#BD0026' :
         d > 12  ? '#E31A1C' :
         d > 8  ? '#FC4E2A' :
         d > 4   ? '#FD8D3C' :
         d > 2  ? '#FEB24C' :
         d > 1  ? '#FED976' :
                  '#FFEDA0';
}
function style(feature) {
    return {
        fillColor: getColor(feature.properties.Densidad),
        weight: 2,
        opacity: 0.9,
        color: 'white',
        dashArray: '4',
        fillOpacity: 0.4
    };
}
function onEachFeature(feature, layer) {
    if (feature.properties) {
      content = "<b>Caratula:</b> " + feature.properties.Caratula + "<br><b>Fecha:</b> " + feature.properties.Fecha + "<br><b>Hora:</b> " + feature.properties.Hora + "<br><b>Sector:</b> " + feature.properties.Sector + "<br><b>Calle:</b> " + feature.properties.Calle + "<br><b>Lugar:</b> " + feature.properties.Lugar + "<br><b>Denunciante:</b> " + feature.properties.Denunciant + "<br><b>Imputado:</b> " + feature.properties.Imputado + "<br><b>Sintesis:</b> " + feature.properties.Sintesis;
layer.bindPopup(content);
}
}

var markerClusters = L.markerClusterGroup.layerSupport().addTo(map);
{
myIcon=  L.divIcon({className: 'leaflet-div-icon'})
function estiloIcon(feature, latlng) {
return L.marker(latlng, {icon: myIcon})
}
}
//ENERO///////////////////////////////////////////////////////////////////////////////////////////
var trobosEnero =
L.geoJson(entrobo, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (enstrobo, {style: style}).addTo(trobosEnero);
var thurtosEnero =
L.geoJson(enthurto, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (ensthurto, {style: style}).addTo(thurtosEnero);
var robosEnero =
L.geoJson(enrobos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (ensrobos, {style: style}).addTo(robosEnero);
var hurtosEnero =
L.geoJson(enhurtos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (enshurtos, {style: style}).addTo(hurtosEnero);
var danosEnero =
L.geoJson(endanos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (ensdanos, {style: style}).addTo(danosEnero);
var lesionesEnero =
L.geoJson(enlesiones, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (enslesiones, {style: style}).addTo(lesionesEnero);
var ley23737Enero =
L.geoJson(enley23737, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (ensley23737, {style: style}).addTo(ley23737Enero);
var totalEnero =
L.geoJson(entotal, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (enstotal, {style: style}).addTo(totalEnero);
//FEBRERO///////////////////////////////////////////////////////////////////////////////////////////
var trobosFebrero =
L.geoJson(fetrobo, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (festrobo, {style: style}).addTo(trobosFebrero);
var thurtosFebrero =
L.geoJson(fethurto, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (festhurto, {style: style}).addTo(thurtosFebrero);
var robosFebrero =
L.geoJson(ferobos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (fesrobos, {style: style}).addTo(robosFebrero);
var hurtosFebrero =
L.geoJson(fehurtos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (feshurtos, {style: style}).addTo(hurtosFebrero);
var danosFebrero =
L.geoJson(fedanos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (fesdanos, {style: style}).addTo(danosFebrero);
var lesionesFebrero =
L.geoJson(felesiones, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (feslesiones, {style: style}).addTo(lesionesFebrero);
var ley23737Febrero =
L.geoJson(feley23737, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (fesley23737, {style: style}).addTo(ley23737Febrero);
var totalFebrero =
L.geoJson(fetotal, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (festotal, {style: style}).addTo(totalFebrero);
//MARZO///////////////////////////////////////////////////////////////////////////////////////////
var trobosMarzo =
L.geoJson(matrobo, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (mastrobo, {style: style}).addTo(trobosMarzo);
var thurtosMarzo =
L.geoJson(mathurto, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (masthurto, {style: style}).addTo(thurtosMarzo);
var robosMarzo =
L.geoJson(marobos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (masrobos, {style: style}).addTo(robosMarzo);
var hurtosMarzo =
L.geoJson(mahurtos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (mashurtos, {style: style}).addTo(hurtosMarzo);
var danosMarzo =
L.geoJson(madanos, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (masdanos, {style: style}).addTo(danosMarzo);
var lesionesMarzo =
L.geoJson(malesiones, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (maslesiones, {style: style}).addTo(lesionesMarzo);
var ley23737Marzo =
L.geoJson(maley23737, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (masley23737, {style: style}).addTo(ley23737Marzo);
var totalMarzo =
L.geoJson(matotal, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (mastotal, {style: style}).addTo(totalMarzo);

//ABRIL///////////////////////////////////////////////////////////////////////////////////////////
var trobosAbril =
L.geoJson(abrobo, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (abstrobo, {style: style}).addTo(trobosAbril);
var thurtosAbril =
L.geoJson(abthurto, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (absthurto, {style: style}).addTo(thurtosAbril);
var robosAbril =
L.geoJson(abrobo, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (absrobo, {style: style}).addTo(robosAbril);
var hurtosAbril =
L.geoJson(abhurto, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (abshurto, {style: style}).addTo(hurtosAbril);
var danosAbril =
L.geoJson(abdano, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (absdano, {style: style}).addTo(danosAbril);
var lesionesAbril =
L.geoJson(ablesiones, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (abslesiones, {style: style}).addTo(lesionesAbril);
var ley23737Abril =
L.geoJson(abley23737, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (absley23737, {style: style}).addTo(ley23737Abril);
var totalAbril =
L.geoJson(abtotal, {pointToLayer: estiloIcon, onEachFeature: onEachFeature}).addTo(markerClusters);
L.geoJson (abstotal, {style: style}).addTo(totalAbril);
//var geo2 = L.layerGroup().addTo(markerClusters);
var basemaps = [
]
    var overlay= [
      {
      groupName: "Enero",
      expanded: false,
      layers: {
        "Tentativa de Robos": trobosEnero,
        "Tentativa de Hurtos": thurtosEnero,
        "Robos": robosEnero,
        "Hurtos": hurtosEnero,
        "Damnificacion": danosEnero,
        "Lesiones": lesionesEnero,
        "Ley Nro. 23.737": ley23737Enero,
        "Total": totalEnero,

        }
      },
      {
        groupName: "Febrero",
        expanded: true,
        layers: {
          "Tentativa de Robos": trobosFebrero,
          "Tentativa de Hurtos": thurtosFebrero,
          "Robos": robosFebrero,
          "Hurtos": hurtosFebrero,
          "Damnificacion": danosFebrero,
          "Lesiones": lesionesFebrero,
          "Ley Nro. 23.737": ley23737Febrero,
          "Total": totalFebrero,

          }
        },{
          groupName: "Marzo",
          expanded: true,
          layers: {
            "Tentativa de Robos": trobosMarzo,
            "Tentativa de Hurtos": thurtosMarzo,
            "Robos": robosMarzo,
            "Hurtos": hurtosMarzo,
            "Damnificacion": danosMarzo,
            "Lesiones": lesionesMarzo,
            "Ley Nro. 23.737": ley23737Marzo,
            "Total": totalMarzo,

            }
          },{
            groupName: "Abril",
            expanded: true,
            layers: {
              "Tentativa de Robos": trobosAbril ,
              "Tentativa de Hurtos": thurtosAbril,
              "Robos": robosAbril,
              "Hurtos": hurtosAbril,
              "Damnificacion": danosAbril,
              "Lesiones": lesionesAbril,
              "Ley Nro. 23.737": ley23737Abril,
              "Total": totalAbril,

              }
            }
];

    var options = {
      container_width: "200px",
      container_maxHeight : "900px",
      group_maxHeight: "900px",
      exclusive: true,
      collapsed: false,

    };

    var control = L.Control.styledLayerControl(basemaps, overlay, options);
    map.addControl(control);
{
      var legend = L.control({position: 'bottomleft'});

      legend.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
      grades = [1, 2, 4, 8, 12, 16, 20],
      labels = [];
        for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
        };
        legend.addTo(map);
}
