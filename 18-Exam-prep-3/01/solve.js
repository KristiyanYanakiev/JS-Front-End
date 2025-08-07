function solve(input) {
    const farmersCount = Number(input.shift())
    const farmers = {}
    for (let i = 1; i <=farmersCount; i++ ) {
        const line = input.shift().split(" ")
        const [name, workArea] = line.slice(0, 2)
        const tasks = line[2].split(",")
        farmers[name] = {workArea, tasks}

    }

    input.forEach(line => {
        const command = line.split(" / ")
        if (command[0] === "Execute") {
            const [name, workArea, task] = command.slice(1)
            if (farmers[name]["workArea"] === workArea && farmers[name]["tasks"].includes(task)) {
                console.log(`${name} has executed the task: ${task}!`)
            } else {
                console.log(`${name} cannot execute the task: ${task}.`)
            }
        }

        else if (command[0] === "Change Area") {
            const [name, newWorkArea] = command.slice(1)
            farmers[name]["workArea"] = newWorkArea
            console.log(`${name} has changed their work area to: ${newWorkArea}`)

        }

        else if (command[0] === "Learn Task") {
            const [name, newTask] = command.slice(1)
            if (farmers[name]["tasks"].includes(newTask)) {
                console.log(`${name} already knows how to perform ${newTask}.`)
            } else {
                farmers[name]["tasks"].push(newTask)
                console.log(`${name} has learned a new task: ${newTask}.`)
            }
        }

        else if (command[0]=== "End") return
    });

    Object.keys(farmers).forEach(farmer => {
        console.log(`Farmer: ${farmer}, Area: ${farmers[farmer]["workArea"]}, Tasks: ${farmers[farmer]["tasks"].sort((a, b) => a.localeCompare(b)).join(", ")}`)
    })

   
}

solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
  ])