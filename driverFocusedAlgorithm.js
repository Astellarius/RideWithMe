//Algorithm is driver oriented, provides minimum driving time

//populates a square of radius around x,y centers with 16 data points provided for extrapolation of equally spaced points in the square
function makeSquare (xCenter, yCenter, radius) {
    var coordinates = new Array(16);
    for (var i = 0; i < coordinates.length; i++) { 
        // Loop to create 2D array using 1D array 
        coordinates[i] = new Array(2); 
    } 

    // Loop to initilize 2D array elements. 
    for (var i = 0; i < 16; i++) { 
        for (var j = 0; j < 2; j++) { 
            gfg[i][j] = 0; 
        } 
    } 
    //initialize current X,Y to become mins
    var currentX = xCenter - radius;
    var currentY = yCenter - radius;
    
    // Loop to populate 2D array elements with rectangle coordinates. 
    for (var i = 0; i < 16; i++) { 
        for (var j = 0; j < 2; j++) { 
            coordinates[i][1] = currentX;
            coordinates[i][2] = currentY;
            currentX+=radius/2; 
        } 
            currentY+=radius/2;
            //reset x once one layer of the sqsuare has been completed
            currentX=xCenter-radius;
    }     
    return coordinates;
}

//checks if given GPS coordinate leads to beneficial compromise
function isACandidate(xStart, xEnd, yStart, yEnd) {
    var presentCandidate = false;
    //checks google map direction from start to end, return time spent
    //returns wait time and travel time for passenger per starting point 
    var condition;
    if (condition) {
        presentCandidate = true;
    }

    return presentCandidate;
}

//checks further transit wait time and transit travel time remaining per valid candidate
function compareCandidates(waitTime1, travelTime1, waitTime2, travelTime2) {
    if ((travelTime1<travelTime2)&&(waitTime1<waitTime2)) {
        return 1;
    }
    if ((travelTime1>travelTime2)&&(waitTime1>waitTime2)) {
        return 2;
    }
    else return 0; //base case stating no clear superior candidate
    //provides clear advantage or 0 means both are meh solutions
    //refine algorithm and weighting of travel time vs further wait time
}

function matchSuccess (bestWaitTime, bestTravelTime) {
    //initialize best wait time and best travel time to -1 in source
    var matchSuccess = false;
    if ((bestWaitTime!=-1)&&(bestTravelTime!=-1)) {
        matchSuccess=true;
    }
}


// function computeSavedResources (routeTransitTime, routeDriveTime) {
//     //compute and output time saved for the other person, as well as efficiency gained through that time
//     //compute and output gas saved if passenger drove a solo car vs driver dropping him off
// }