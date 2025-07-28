const shoppinPromise = new Promise((success, failure) => {
    if (Math.random() < 0.7 ) {
        success("Got bread")
    }
    else { 
        failure("Did not got bread")
    }
    
})


shoppinPromise
    .then(resultOfPromisse => {
        console.log(resultOfPromisse)
    })

    .catch(failureCatch => console.log(failureCatch))

