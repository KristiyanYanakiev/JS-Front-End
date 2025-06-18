function solve(input) {

    const parking = {}
    
    const operations = {
        "IN": (carNumber, someParking) => {
            if (!Object.keys(someParking).includes(carNumber)) someParking[carNumber] = 1
            },
        "OUT": (carNumber, someParking) => {
            if (Object.keys(someParking).includes(carNumber)) delete someParking[carNumber]
            },
    }
    input.forEach(command => {
        const [direction, numberOfCar] = command.split(",")
        operations[direction](numberOfCar, parking)
    });


    
    
    if (Object.keys(parking).length === 0) {
        console.log("Parking Lot is Empty")
    }
    else{
        Object.entries(parking)
        .sort()
        .forEach(([car, _]) => {
            console.log(car)
        });

    }


}


solve(["IN, CA2844AA",
"IN, CA1234TA",
"OUT, CA2844AA",
"OUT, CA1234TA"])