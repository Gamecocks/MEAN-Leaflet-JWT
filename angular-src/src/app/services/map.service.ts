import { Injectable } from '@angular/core';
import { environment } from '../../app/environments/environment';


var apiToken = environment.MAPBOX_API_KEY;
declare var L: any;



@Injectable()
export class MapService {

  constructor() { }


  buildMap(coordinates)
{
  var map = L.map('map').setView([39.74739, -105], 13);
  
      L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.light',
        accessToken: apiToken
      }).addTo(map);
  
      function onEachFeature(feature, layer) {
        var popupContent = "";
    
        if (feature.properties && feature.properties.popupContent) {
          popupContent += feature.properties.popupContent;
        }
    
        layer.bindPopup(popupContent);
      }

  
      var geoJsonTemplateHeader = `{
        "type": "FeatureCollection",
        "features": [`
  
      var geoJsonTemplateBody = "";
      var i_color = -1;
      var strColor = "";
      var geoJsonTemplateFooter = `]}`;
      var geoJsonFinal = "";
      var aryColor = [];
      var aryAllMarkers = [];
      var aryMarkers = [];

      var arrayLength = coordinates.length;
      for (var i = 0; i < arrayLength; i++) {
          
        aryMarkers = [];
        var mmsid = coordinates[i].mmsid;
        var latitude = coordinates[i].latitude;
        var longitude = coordinates[i].longitude;
        var name = coordinates[i].name;
        var callsign = coordinates[i].callsign;
        var speed = coordinates[i].speed;
        var course = coordinates[i].course;
        var heading = coordinates[i].heading;
        var color = coordinates[i].color;
        var geoJsonTemplateBody = geoJsonTemplateBody + `
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    `+longitude+`,
                    `+latitude+`
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "MSSID: `+mmsid+`<br>Name: `+name+`<br>Callsign: `+callsign+`<br>Speed: `+speed+`<br>Course: `+course+`<br>heading: `+heading+`"
            },
            "id": `+i+`
        },`;

        aryColor.push(color);
        aryMarkers.push(latitude);
        aryMarkers.push(longitude);
        aryAllMarkers.push(aryMarkers);
      }  
  
  geoJsonTemplateBody = geoJsonTemplateBody.slice(0, -1);
  geoJsonFinal = geoJsonTemplateHeader + geoJsonTemplateBody +geoJsonTemplateFooter;

  var leafletObject = JSON.parse(geoJsonFinal);
  L.geoJSON([leafletObject], {
    
        style: function (feature) {
          return feature.properties && feature.properties.style;
        },
    
        onEachFeature: onEachFeature,
    
        pointToLayer: function (feature, latlng) {
        i_color++
          return L.circleMarker(latlng, {
            radius: 8,
            fillColor: aryColor[i_color],
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          });
        }
      }).addTo(map);
     // var bounds = L.latLngBounds(allMarkersArray);
     map.fitBounds(aryAllMarkers);//works!
      
}

}
