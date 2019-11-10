function formdb_write( isDriver ) {

    var depart = document.getElementById("form_depart").value;
    var destination = document.getElementById("form_destination").value;

    if( document.getElementById(`td-1-1`).innerHTML == "-") {
        document.getElementById("td-1-1").innerHTML = (isDriver) ? "Driver" : "Rider";
        document.getElementById("td-1-2").innerHTML = depart;
        document.getElementById("td-1-3").innerHTML = destination;
    } else if( document.getElementById(`td-2-1`).innerHTML == "-") {
        document.getElementById("td-2-1").innerHTML = (isDriver) ? "Driver" : "Rider";
        document.getElementById("td-2-2").innerHTML = depart;
        document.getElementById("td-2-3").innerHTML = destination;
    } else if( document.getElementById(`td-3-1`).innerHTML == "-") {
        document.getElementById("td-3-1").innerHTML = (isDriver) ? "Driver" : "Rider";
        document.getElementById("td-3-2").innerHTML = depart;
        document.getElementById("td-3-3").innerHTML = destination;
    } else {
        document.getElementById("td-4-1").innerHTML = (isDriver) ? "Driver" : "Rider";
        document.getElementById("td-4-2").innerHTML = depart;
        document.getElementById("td-4-3").innerHTML = destination;
    }

    document.getElementById("form_depart").value = "";
    document.getElementById("form_destination").value = "";

} // formdb_write