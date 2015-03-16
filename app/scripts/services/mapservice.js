'use strict';

/**
 * @ngdoc service
 * @name waterintakeApp.Mapservice
 * @description
 * # Mapservice
 * Service in the waterintakeApp.
 */
angular.module('waterintakeApp')
  .service('MapService', function () {
    return {
       hydrant: L.icon({
        iconUrl: '/images/water-hydrant.png',
        shadowUrl: '/images/marker-shadow.png',

        iconSize:     [40, 50], // size of the icon
        shadowSize:   [40, 40], // size of the shadow
        iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
        shadowAnchor: [-10, 4],  // the same for the shadow
        popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
      }),

      iniate: function(user){

          this.user = user;
        	// set up the map
        	this.map = new L.Map('map');

        	// create the tile layer with correct attribution
        	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        	var osm = new L.TileLayer(osmUrl, {minZoom: 12, maxZoom: 19, attribution: osmAttrib});

        	// start the map in South-East England
        	this.map.setView(new L.LatLng(user.lat, user.long),14);
        	this.map.addLayer(osm);
        },
      drawIntakes: function( intakes ){

                    _.each (intakes, function(intake, index, list) {
                          L.marker([intake.lat, intake.long], {icon: this.hydrant})
                            .addTo(this.map)
                            .bindPopup('<b>'+intake.location+'</b> <br> <p> Type: '+ intake.type +' </p>');
                    }, this);
        },

      drawUser: function(){
                   L.marker([this.user.lat, this.user.long]).addTo(this.map)
                    .bindPopup('<b>'+this.user.name+'</b>');

                },

      drawEditMarker: function(){
                  this.editMarker = L.marker([this.user.lat, this.user.long-0.01], {icon: this.hydrant}).addTo(this.map)
                    .bindPopup('<b>Locate me!</b>').openPopup();
                    this.editMarker.dragging.enable();
                },

      getEditMarkerLat: function(){
              return this.editMarker.getLatLng().lat;
      },
      getEditMarkerLng: function(){
              return this.editMarker.getLatLng().lng;
      }


      };
  });
