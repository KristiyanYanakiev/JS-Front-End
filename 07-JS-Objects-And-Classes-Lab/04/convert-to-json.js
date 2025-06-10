function convertoToJson(name, lastName, hairColor) {
    object = {
        name, 
        lastName,
        hairColor,
    }

    console.log(JSON.stringify(object))
}

convertoToJson('George', 'Jones', 'Brown')