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


      iniate: function(user){


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
      drawIntake: function( intakes ){
                    _.each (intakes, function(intake, index, list) {
                          L.marker([intake.lat, intake.long])
                            .addTo(this.map)
                            .bindPopup('<b>'+intake.location+'</b> <br> <p> Type: '+ intake.type +' </p>');
                    }, this);
        },

      drawUser: function(user){
                  var marker = L.marker([user.lat, user.long]).addTo(this.map)
                    .bindPopup('<b>'+user.name+'</b>');
                  //marker.dragging.enable();
                  }

      };
  });
