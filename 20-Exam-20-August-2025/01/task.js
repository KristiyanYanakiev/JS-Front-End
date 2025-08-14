function solve(input) {
    const message = input.shift()
    let newMessage = message

    input.forEach(command => {

        if (command === "Buy") {    
            console.log(`The cryptocurrency is: ${newMessage}`)
            return

        }
        else if (command === "TakeEven") {
            newMessage = newMessage.split("").filter((_, i) => i % 2 === 0).join("")
            console.log(newMessage)
        }

        else if (command.includes("ChangeAll")) {
            const [substring, replacement] = command.split("?").slice(1)
            newMessage = newMessage.split(substring).join(replacement)
            console.log(newMessage)
        }

        else if (command.includes("Reverse")) {
            const substring = command.split("?")[1]
            if (newMessage.includes(substring)) {
                let startIndex = newMessage.indexOf(substring)
                let endIndex = startIndex + substring.length
                newMessage = newMessage.slice(0, startIndex) + newMessage.slice(endIndex) + substring.split("").reverse().join("")
                console.log(newMessage)
            } else {
                console.log("error")
            }
        }
    });
}








solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]))