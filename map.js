function initMap() {

    var options = {
        zoom: 11,
        center: { lat: 49.2827, lng: -123.1207 }
    } // Initial Map Options

    var map = new google.maps.Map(
        document.getElementById('map'), 
        options
    ); // New Map

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map); // links direction render to map 
    directionsRenderer.setPanel(document.getElementById('right-panel')); // displays all direction info

    document.getElementById('submit').addEventListener('click', function() {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    }); // submit 

} // init Map 


function waypoint_calculator() {

    var number_of_waypoints = parseInt( document.getElementById("form_num").innerHTML );

    var waypoint_array = [];

    for( var i = 1; i < number_of_waypoints; i++ ) {

        var m_start = "start" + i.toString();
        var m_end = "end" + i.toString();

        waypoint_array.push({ 
            location: document.getElementById(m_start).innerHTML,
            stopover: true 
        });

        waypoint_array.push({ 
            location: document.getElementById(m_end).innerHTML,
            stopover: true
        });

    } // pushing all id to waypoint array

    return waypoint_array;

} // waypoint calculator


function calculateAndDisplayRoute(directionsService, directionsRenderer) {

    var waypoint_array = waypoint_calculator();

    directionsService.route({

        origin: document.getElementById("start0").innerHTML,
        destination: document.getElementById("end0").innerHTML,

        waypoints: waypoint_array,
        optimizeWaypoints: false,

        travelMode: 'DRIVING' // change back to DRIVING

    }, function(response, status) {
        console.log(response);
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
            alert(response.routes[0].legs[0].duration.value); // time of first leg
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
} // test calc 

