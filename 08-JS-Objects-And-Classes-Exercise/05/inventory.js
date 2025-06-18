function solve(input) {
   let heros = []

    input.forEach(element => {
        let [name, level, items] = element.split(" / ")
        level = Number(level)
        heros.push({name, level, items})
    });


    heros = heros.sort((a, b) => a.level - b.level)

    heros.forEach(hero => {
        console.log(`Hero: ${hero["name"]}\nlevel => ${hero["level"]}\nitems => ${hero["items"]}`)
    });
}



solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])