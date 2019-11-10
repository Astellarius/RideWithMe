function initMap() {

    var options = {
        zoom: 11,
        center: { lat: 49.2827, lng: -123.1207 }
    } // Initial Map Options

    var map = new google.maps.Map(
        document.getElementById('map'), 
        options
    ); // New Map

} // init Map 