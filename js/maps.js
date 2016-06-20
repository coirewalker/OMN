// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.673217, -73.967461), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: 
        // [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":20},{"lightness":50},{"gamma":0.4},{"hue":"#00ffee"}]},{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#405769"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#232f3a"}]}]
        [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#d8d8d0"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#9b9f81"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":"#2e311c"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#65663a"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#3b3c30"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#3a3c2f"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#545535"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#707427"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#a7af3b"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#323326"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#4a5435"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#6f7527"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#3e3e36"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#6f7527"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#1d1d1d"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker-grey.png';
    var myLatLng = new google.maps.LatLng(40.673217, -73.967461);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}