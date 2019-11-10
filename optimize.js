function optimize() {

    var num_of_ppl = 0; // CHANGE LATTER 

    if( document.getElementById(`td-1-1`).innerHTML != "-")
        num_of_ppl +=1;
    if( document.getElementById(`td-2-1`).innerHTML != "-")
        num_of_ppl +=1;
    if( document.getElementById(`td-3-1`).innerHTML != "-")
        num_of_ppl +=1;
    if( document.getElementById(`td-4-1`).innerHTML != "-")
        num_of_ppl +=1;
    

    if( num_of_ppl == 1) {
        
        single_travel_d(num_of_ppl);
        single_travel_t(num_of_ppl);

    } else if ( num_of_ppl == 2 ) {

        waypoint_travel(0);

        single_travel_d(num_of_ppl-1, 1);

        single_travel_t(num_of_ppl, 2);
        single_travel_d(num_of_ppl, 3);

    } else {
        alert("Implementation Coming Soon!");
        location.reload();
    }
    
    document.getElementById("optimize_route").style.display = "none";
    document.getElementById("display_route").style.display = "inline-block";

} // optimize


function single_travel_d( num_of_ppl, timeArrayIndex ) {
    var directionsService = new google.maps.DirectionsService();    
    directionsService.route({
    
        origin: document.getElementById(`td-${num_of_ppl}-2`).innerHTML,
        destination: document.getElementById(`td-${num_of_ppl}-3`).innerHTML,
        
        travelMode: "DRIVING"
    
    }, function(response, status) {
        if (status === 'OK') {
            TIME_ARRAY[timeArrayIndex] = response.routes[0].legs[0].duration.value;
        } 
        else {
            window.alert('Directions request failed due to ' + status);
        }
    });
} // single travel

function single_travel_t( num_of_ppl, timeArrayIndex ) {
    var directionsService = new google.maps.DirectionsService();    
    directionsService.route({
    
        origin: document.getElementById(`td-${num_of_ppl}-2`).innerHTML,
        destination: document.getElementById(`td-${num_of_ppl}-3`).innerHTML,
        
        travelMode: "TRANSIT"
    
    }, function(response, status) {
        if (status === 'OK') {
            TIME_ARRAY[timeArrayIndex] = response.routes[0].legs[0].duration.value;
        } 
        else {
            window.alert('Directions request failed due to ' + status);
        }
    });
} // single travel


function waypoint_travel( timeArrayIndex ) {

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

        optimizeWaypoints: false,
        travelMode: "DRIVING"
    
    }, function(response, status) {
        if (status === 'OK') {
            var total_drive_time = waypoint_time(response);

            TIME_ARRAY[timeArrayIndex] = total_drive_time;

        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
} // single travel


function waypoint_time( response ) {
    
    var x = response.routes[0].legs[0].duration.value;
    var y = response.routes[0].legs[1].duration.value;
    var z = response.routes[0].legs[2].duration.value;

    var total_waypoint_time = x + y + z;

    return total_waypoint_time;

} // get time


function time_efficiency() {

    var abba_aa = TIME_ARRAY[0] - TIME_ARRAY[1]; // Total time spent
    var bbt_bbd = TIME_ARRAY[2] - TIME_ARRAY[3]; // total time saved

    var time_saved = abba_aa - bbt_bbd; // Efficiency Number

    var driverPercentageSpent = abba_aa/TIME_ARRAY[1]*100; // % time spent
    var passengerPercentageSaved = bbt_bbd/TIME_ARRAY[3]*100; // % time saved
    
    RESULTS_ARRAY[0] = abba_aa;
    RESULTS_ARRAY[1] = TIME_ARRAY[1]-abba_aa;

    RESULTS_ARRAY[2] = bbt_bbd;
    RESULTS_ARRAY[3] = TIME_ARRAY[2] - bbt_bbd;

    RESULTS_ARRAY[4] = time_saved;

    RESULTS_ARRAY[5] = driverPercentageSpent;
    RESULTS_ARRAY[6] = passengerPercentageSaved;

    final_map();
} // time efficiency 


function final_map() {

    var map = new google.maps.Map(
        document.getElementById('map')
    ); // New Map

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map); // links direction render to map 

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

    directionsService.route({

        origin: document.getElementById(`td-1-2`).innerHTML,
        destination: document.getElementById(`td-1-3`).innerHTML,

        waypoints: waypoint_array,
        optimizeWaypoints: false,

        travelMode: 'DRIVING' // change back to DRIVING

    }, function(response, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(response); // we can toggle this for ourselves
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });

    graph_final_data();

} // final map abba 

function graph_final_data() {
    
    var x = 700;

    var a_1 = RESULTS_ARRAY[0];
    var a_2 = RESULTS_ARRAY[1];

    var b_1 = RESULTS_ARRAY[2];
    var b_2 = RESULTS_ARRAY[3];

    new Chart( document.getElementById("aChart"),
        {
            "type":"doughnut",
            "data":{ 
                "labels": ["Additional Time Spent"],
                "datasets":[
                    {
                        "label": "My First Dataset",
                        "data": [ a_1, a_2 ],
                        "backgroundColor": [ "rgb(255, 99, 132)", "rgb(54, 162, 235)"]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Driver Time Efficiency'
                }
            }
        }
    );

    new Chart( document.getElementById("bChart"),
        {
            "type":"doughnut",
            "data":{ 
                "labels": ["Total Time Saved"],
                "datasets":[
                    {
                        "label": "My First Dataset",
                        "data": [ b_1, b_2 ],
                        "backgroundColor": [ "rgb(255, 99, 132)", "rgb(54, 162, 235)"]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Rider Time Efficiency'
                }
            }
        }
    );
} // graph final data