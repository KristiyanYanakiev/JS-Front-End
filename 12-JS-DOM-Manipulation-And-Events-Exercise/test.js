// const shoppinPromise = new Promise((success, failure) => {
//     if (Math.random() < 0.7 ) {
//         success("Got bread")
//     }
//     else { 
//         failure("Did not got bread")
//     }
    
// })


// shoppinPromise
//     .then(resultOfPromisse => {
//         console.log(resultOfPromisse)
//     })

//     .catch(failureCatch => console.log(failureCatch))


const myEl = document.createElement("li")
myEl.textContent = "Option 2"

myEl.dataset.example = "example"
document.querySelector("ul").append(myEl)

Object.assign(myEl.dataset, {"example2": "example2"})

myEl.dataset.example3 = "example3"

Object.assign(myEl, {textContent: "here is the text contент"})

document.querySelector("ul").append(myEl)

console.log(typeof myEl.textContent)
console.log(typeof myEl.dataset.example)




