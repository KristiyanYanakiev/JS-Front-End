function solve() {
    const restaurantsEl = JSON.parse(document.querySelector("#inputs textarea").value)

    const restaurants = {}

    restaurantsEl.forEach(r => {
        const [restName, workers] = r.split(" - ")
        workersList = workers.split(", ")

        const parsedWorkersList = workersList.map(w => {
            const [name, salary] = w.split(" ")
            return {name, salary: Number(salary)}
        })
        
        if (! restaurants.hasOwnProperty(restName)) {
            restaurants[restName] = parsedWorkersList
        }

        else {
            restaurants[restName] = [...restaurants[restName], ...parsedWorkersList]
        }

        
    });
    
    let bestRestaurant = ""
    let highestAverageSalary = 0
    let bestWorkers = []
    let bestSalary = 0

    for (const [restaurant, workers] of Object.entries(restaurants)) {
        const totalSalary = workers.reduce((sum, w) => {
            return sum + w.salary;
        }, 0)


        const averageSalary = totalSalary / workers.length

        workers.push({averageSalary,})

        if (averageSalary > highestAverageSalary) {
            highestAverageSalary = averageSalary
            bestRestaurant = restaurant
            bestWorkers = restaurants[restaurant].slice(0, -1)
            bestSalary = Math.max(...bestWorkers.map(w => w.salary))
            
        }
    }
    

    const outputLine1 = `Name: ${bestRestaurant} Average Salary: ${highestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
    const sortedBestWorkers = bestWorkers.sort((a, b) => b.salary - a.salary)
    let outputLine2 = ""

    sortedBestWorkers.forEach(w => {
        outputLine2 += `Name: ${w.name} With Salary: ${w.salary} `
    })
    outputLine2 = outputLine2.slice(0, -1)

    outputEl1 = document.querySelector("#outputs #bestRestaurant p")
    outputEl2 = document.querySelector("#outputs #workers p")

    outputEl1.textContent = outputLine1
    outputEl2.textContent = outputLine2
}




// find the best restaurant 
// display data in the hmtl element 