// Code your solution in this file!
//Calculate the distance//
function distanceFromHeadquInBlock(pickingLocation){
    const headquLocation= 40
    return (pickingLocation - headquLocation)
}

function distanceFromHeadquInMeters(pickingLocation){
    const Km =distanceFromHeadquInBlocks(pickingLocation);
    const meterPerBlocks = 264;
    return blocks * meterPerBlocks
}

// Calculating the distance traveled in meters from the starting point//
function distanceTravelledInMeters(start, destination){
    const blocks=(destination - start)
    const meterPerBlocks = 264;
    return blocks * meterPerBlocks;
}
// calculating Fare //
function calcFare(start, destination) {
    const distance = distanceTraveledInMeters(start, destination);
      let fare = 0;
    if (distance <= 400){fare=0}
    else if (distance<= 1000){fare = (distance - 400)* (20/100)}
    else { 
        return "cant travel far more than this "
    }
return fare; 
}



