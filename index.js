// Code your solution in this file!


const HQ = 42
function distanceFromHqInBlocks(distance) {

    if (distance >= HQ) {
        return distance - HQ
    }
    return (HQ - distance)
}

function distanceFromHqInFeet(currentBlock) {
    let numOfBlocks = distanceFromHqInBlocks(currentBlock)
    return numOfBlocks * 264
}

const begBlock = 43
const endBlock = 48
function distanceTravelledInFeet(begBlock, endBlock) {
    return Math.abs((begBlock - endBlock) * 264)
}

function calculatesFarePrice(begBlock, endBlock) {
    const distanceTravelled = distanceTravelledInFeet(endBlock, begBlock)
    if (distanceTravelled < 400) {
        return 0
    } else if (distanceTravelled >= 400 && distanceTravelled < 2000) {
        return (distanceTravelled * .02)
    }
    else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}


