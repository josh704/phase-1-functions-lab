function distanceFromHqInBlocks(someValue) {
    const hq = 42;
    return Math.abs(someValue - hq);
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start) * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        const chargeableDistance = distance - 400;
        return chargeableDistance * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}


