function convertToObject(jsonString) {
    const convertedObject = JSON.parse(jsonString)

    for (const k of Object.keys(convertedObject)) {
        console.log(`${k}: ${convertedObject[k]}`)
   }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')