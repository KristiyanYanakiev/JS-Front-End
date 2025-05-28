function solve(input) {
    const [username, ...attempts] = input

    attempts.forEach((el, i) => {
        if (el.split("").reverse().join("") === username) {
            console.log(`User ${username} logged in.`)
        }

        else {
            if (i < 3) {
                console.log("Incorrect password. Try again.")
            }
            else {
                console.log(`User ${username} blocked!`)
            }
        }
    });
    
}

solve(['sunny','rainy','cloudy','sunny','not sunny'])