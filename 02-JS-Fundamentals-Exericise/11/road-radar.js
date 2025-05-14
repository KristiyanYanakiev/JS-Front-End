function solve(speed, area) {

    const motorwaySpeedLimit = 130;
    const intestateSpeedLimit = 90;
    const citySpeedLimit = 50;
    const residentialAreaSpeedLimit = 20;

    function status(vehicleSpeed, speeLimit) {
        let status = ""
        let speedDifference = vehicleSpeed - speeLimit
        if (speedDifference <= 20) {
            status = "speeding"
        }

        else if (speedDifference <= 40) {
            status = "excessive speeding"
    }

        else  {
            status = "reckless driving"
        
        }
        return status

    }

    switch (area) {
        case "motorway":
            if (speed <= motorwaySpeedLimit) {
                console.log(`Driving ${speed} km/h in a ${motorwaySpeedLimit} zone`)
            }
            else {
                console.log(`The speed is ${speed - motorwaySpeedLimit} km/h faster than the allowed speed of ${motorwaySpeedLimit} - ${status(speed, motorwaySpeedLimit)}`)
            }
        break

        case "interstate": 
            
            if (speed <= intestateSpeedLimit) {
                console.log(`Driving ${speed} km/h in a ${intestateSpeedLimit} zone`)
            }
            else {
                console.log(`The speed is ${speed - intestateSpeedLimit} km/h faster than the allowed speed of ${intestateSpeedLimit} - ${status(speed, intestateSpeedLimit)}`)
            }
        break
        
        case "city":
            if (speed <= citySpeedLimit) {
                console.log(`Driving ${speed} km/h in a ${citySpeedLimit} zone`)
            }
            else {
                console.log(`The speed is ${speed - citySpeedLimit} km/h faster than the allowed speed of ${citySpeedLimit} - ${status(speed, citySpeedLimit)}`)
            }
        break

        case "residential":
            if (speed <= residentialAreaSpeedLimit) {
                console.log(`Driving ${speed} km/h in a ${residentialAreaSpeedLimit} zone`)
            }
            else {
                console.log(`The speed is ${speed - residentialAreaSpeedLimit} km/h faster than the allowed speed of ${residentialAreaSpeedLimit} - ${status(speed, residentialAreaSpeedLimit)}`)
            }
        break

    }
}


solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')