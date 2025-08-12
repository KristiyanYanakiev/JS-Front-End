function solve(input) {
    numOfChemicals = input.shift()
    chemicals = {} 
    const maxStorage = 500

    for (let i = 0; i < numOfChemicals; i++) {
        let [name, quantity] = input.shift().split(" # ")
        quantity = Number(quantity)
        chemicals[name] = {quantity}
    }

    input.forEach(line => {

       if (line.split(" # ")[0] ===  "Mix") {
            let [chem1, chem2, amount] = line.split(" # ").slice(1)
            amount = Number(amount)

            if (chemicals[chem1]["quantity"] >= amount && chemicals[chem2]["quantity"] >= amount) {
                chemicals[chem1]["quantity"] -= amount
                chemicals[chem2]["quantity"] -= amount

                console.log(`${chem1} and ${chem2} have been mixed. ${amount} units of each were used.`)

            } else {
                console.log(`Insufficient quantity of ${chem1}/${chem2} to mix.`)
            }
       }

       else if (line.split(" # ")[0] === "Replenish") {
            let [chem, amount] = line.split(" # ").slice(1)
            amount = Number(amount)

            if (!chemicals.hasOwnProperty(chem))
                {
                console.log(`The Chemical ${chem} is not available in the lab.`)
            } else {
                if ((chemicals[chem]["quantity"] + amount) > maxStorage) {
                    const addedAmount = maxStorage - chemicals[chem]["quantity"]
                    chemicals[chem]["quantity"] = maxStorage
                    console.log(`${chem} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`)
                    
                } else {
                    chemicals[chem]["quantity"] += amount
                    console.log(`${chem} quantity increased by ${amount} units!`)
                }
            }
        }

        else if (line.split(" # ")[0] === "Add Formula") {
            const [chem, formula] = line.split(" # ").slice(1)
            if (chem in chemicals) {
                chemicals[chem].formula = formula
                console.log(`${chem} has been assigned the formula ${formula}.`)
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`)
            }
        }

        

        

        

    }
        
    );

    let output = ""

        for (const chem in chemicals) {
            if (chemicals[chem].hasOwnProperty("formula")) {
                output += `Chemical: ${chem}, Quantity: ${chemicals[chem]["quantity"]}, Formula: ${chemicals[chem]["formula"]}\n`
            } else {
                output += `Chemical: ${chem}, Quantity: ${chemicals[chem]["quantity"]}\n`
            }
            
        }
        console.log(output.slice(0, -1))
    
}

solve([ '4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End'])