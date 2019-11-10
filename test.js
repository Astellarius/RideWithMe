  
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    var waypts = [
        { location: "Surrey BC", stopover: true}
    ];

    directionsService.route({
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
        directionsRenderer.setDirections(response);
        } else {
        window.alert('Directions request failed due to ' + status);
        }
    });
} // test calc 