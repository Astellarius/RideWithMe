
/*
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map); // links direction render to map 
    directionsRenderer.setPanel(document.getElementById('right-panel')); // displays all direction info

    document.getElementById('submit').addEventListener('click', function() {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    }); // submit 
*/


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


function calculateAndDisplayRoute( directionsService, directionsRenderer ) {

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
            directionsRenderer.setDirections(response); // we can toggle this for ourselves
            tellmeEverything(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
} // calculate and display route


var waypoint_array = [
    { 
        location: document.getElementById("td-2-2").innerHTML,
        stopover: true 
    },
    { 
        location: document.getElementById("td-2-3").innerHTML,
        stopover: true 
    }
];

var directionsService = new google.maps.DirectionsService();    
directionsService.route({

    origin: document.getElementById(`td-1-2`).innerHTML,
    destination: document.getElementById(`td-1-3`).innerHTML,

    waypoints: waypoint_array,