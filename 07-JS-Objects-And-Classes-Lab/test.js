let myObject = {
    myName: "Kris",
    myAge : "33"
}

let secObject = {
    "Name": "Gosho",
    "Age": "34"
}




console.log(myObject);
console.log(JSON.stringify(myObject))


someArray = ["Kris", "Yanakiev", 1, 2, 3]

const [firstName, secondName, ...rest] = someArray

console.log(firstName)
console.log(secondName)
console.log(rest)