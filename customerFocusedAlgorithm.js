//Gets the travel time per leg of the route and returns them in an array in seconds format
function getTime (response) {
    var numLegs = response.routes[0].legs.length;
    var legTime = Array[numLegs];
    for (var i=0;i<numLegs;i++) {
        legTime[i]=response.routes[0].legs.duration.value;
    }
    return legTime;
}


//configure waitTime to include walk time and transfer time
//weights each leg of the drive by how much time saved if driven
//have a positive value for worth driving for, negative for rejects
//Store legs depending on their impact value to see which deserves replacing the most
function findImpactPerLeg (legTransitTime, legDriveTime, additionalDriveTime,) {
    var transitWeight = 1;
    //whats the ratio of time saving required to satisfy us as being a suitable drive?
    var driveTimeWeight = 2;
    var additionalTimeWeight = 2.5;
    var impactValue=(legTransitTime*transitWeight-legDriveTime*driveTimeWeight-additionalDriveTime*additionalDriveTime);

    return impactValue;
}


//check if the designated leg is worth driving for driver perspective
function worthDriving (xStart, xEnd, yStart, yEnd, xDriver, yDriver) {
    var presentDrive = false;

    //check if picking passenger up from start coordinate, then dropping off, then going to driver destination is within driver specified constraints
    var condition;
    if (condition) {
        presentDrive = true;
    }


    return presentDrive;
}

function computeSavedResources (routeTransitTime, routeDriveTime) {
    //compute and output time saved for the other person, as well as efficiency gained through that time
    //compute and output gas saved if passenger drove a solo car vs driver dropping him off
    
}