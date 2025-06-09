function carWash(commands) {
    let value = 0

    const operations = {
        "soap": v => v += 10,
        "water": v => v *= 1.2,
        "vacuum cleaner": v => v *= 1.25,
        "mud": v => v *= 0.9
}

    commands.forEach(command => {
        value = operations[command](value)
    });

    console.log(`The car is ${value.toFixed(2)}% clean.`)


}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])