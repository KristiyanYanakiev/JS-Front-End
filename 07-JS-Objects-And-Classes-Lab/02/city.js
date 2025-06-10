function city(cityObject) {
    
    const keys = Object.keys(cityObject)
    
   for (const k of keys) {
        console.log(`${k} -> ${cityObject[k]}`)
   }

}
   


city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})