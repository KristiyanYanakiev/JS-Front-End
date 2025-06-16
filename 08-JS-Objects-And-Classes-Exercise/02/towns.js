function solve(input){
    towns = []

    input.forEach(element => {
        [town, latitude, longitude] = element.split(" | ")
        latitude = Number(latitude)
        longitude = Number(longitude)

        towns.push({town, latitude, longitude,})
    })

  
    towns.forEach(town => {
        console.log(`{ town: '${town["town"]}', latitude: '${town["latitude"].toFixed(2)}', longitude: '${town["longitude"].toFixed(2)}' }`)
    })

    
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])