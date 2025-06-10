function createObject(firstName, secondName, color) {
    const object = {firstName, secondName, color}
    return object
}


console.log(createObject("Eto", "Yan", "green"))


const myAssociativeArray = []

myAssociativeArray["firstName"] = "Kris"
myAssociativeArray["age"] = 25

delete myAssociativeArray["firstName"]
console.log(myAssociativeArray)
