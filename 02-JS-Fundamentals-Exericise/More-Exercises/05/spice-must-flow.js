function solve(yield) {
    const minersDailyConsumption = 26
    const minersFinalConsumption = 26
    let dayCounter = 0
    let totalStorage = 0

    for (let i = 0; yield >= 100; i++) {
        
        totalStorage += yield
        if (totalStorage >= minersDailyConsumption) {
            totalStorage -= minersDailyConsumption
        }

        else totalStorage -= totalStorage
        dayCounter ++
        yield -= 10
    }

    if (totalStorage >= minersFinalConsumption) {
        totalStorage -= minersFinalConsumption
    }

    else {
        totalStorage -= totalStorage
    }

    console.log(dayCounter)
    console.log(totalStorage)

}

solve(450)