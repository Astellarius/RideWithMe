function tellmeEverything(response) {

    alert("Hello!");
    console.log(response);

    var abba = {
        distance: response.routes[0].legs[0].distance.value,
        duration: response.routes[0].legs[0].duration.value
    }

    alert(abba.distance);
    alert(abba.duration);

} // tell me everything


function figureoutbb() {

    var options = {
        zoom: 11,
        center: { lat: 49.2827, lng: -123.1207 }
    } // Initial Map Options

    var map1 = new google.maps.Map(
        document.getElementById('map1'), 
        options
    ); // New Map

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map1); // links direction render to map 
    directionsRenderer.setPanel(document.getElementById('right-panel')); // displays all direction info

    directionsService.route({

        origin: document.getElementById("start1").innerHTML,
        destination: document.getElementById("end1").innerHTML,

        travelMode: 'TRANSIT' // change back to DRIVING

    }, function(response, status) {
        console.log(response);
        if (status === 'OK') {
            directionsRenderer.setDirections(response); // we can toggle this for ourselves
            console.log(response);
            tellmeEverything(response);
            alert("hi!");
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}