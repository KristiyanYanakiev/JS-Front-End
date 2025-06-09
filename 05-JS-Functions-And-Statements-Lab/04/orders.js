function solve(product, quantity) {

    let res = 0
    const coffee = 1.50
    const water = 1.00
    const coke = 1.40
    const snacks = 2.00



    switch(product) {
        case "coffee" : res = quantity * coffee
        break
        case "water": res = quantity * water
        break
        case "coke": res = quantity * coke
        break
        case "snacks": res = quantity * snacks
        break
    }

    console.log(res.toFixed(2))
}