let myObject = {
    myName: "Kris",
    myAge : "33"
}

let secObject = {
    "Name": "Gosho",
    "Age": "34"
}



console.log(JSON.stringify(Object.entries(myObject)))

newObj = {}

for (const element of Object.entries(myObject)) {
    newObj[element[0] + "addedINfo"] = element[1] 
}

console.log(newObj);

console.log("------- with reduce: -------")

reducedObj = Object.entries(myObject).reduce((acc, [key, value]) => {
    acc[key + " new Info"] = value;
    return acc;


}, {} )

console.log(reducedObj)

