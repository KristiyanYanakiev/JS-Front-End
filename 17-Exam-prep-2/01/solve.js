function solve(input) {

    const numOfAstronauts = Number(input.shift())
    const crew = {}

    

    for (let i = 0; i < numOfAstronauts; i++) {
        const [name, spacecraftSection, skills] = input.shift().split(" ")
        crew[name] = [spacecraftSection, skills.split(",")]

    }

    
    input.forEach(command => {
        
        const action = command.split(" / ")[0]

        if (action === "Perform") {
            const [name, spacecraftSection, skill] = command.split(" / ").slice(1)
            if (crew[name].includes(spacecraftSection) && crew[name][1].includes(skill)) {
                console.log(`${name} has successfully performed the skill: ${skill}!`)
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`)
            }

        }

        else if (action === "Transfer") {
            const [name, spacecraftSection] = command.split(" / ").slice(1)
            crew[name][0] = spacecraftSection
            console.log(`${name} has been transferred to: ${spacecraftSection}`)
        }

        else if (action === "Learn Skill") {
            const [name, skill] = command.split(" / ").slice(1)
            if (crew[name][1].includes(skill)) {
                console.log(`${name} already knows the skill: ${skill}.`)
            } else {
                crew[name][1].push(skill)
                console.log(`${name} has learned a new skill: ${skill}.`)
            }
        }

        else if (action === "End") return

    });

    let output = ""
    for (const [astronaute, data] of Object.entries(crew)) {
        output += `Astronaut: ${astronaute}, Section: ${data[0]}, Skills: ${data[1].sort((a, b) => a.localeCompare(b)).join(", ")}\n`
    }

    console.log(output.slice(0, -1))
}



solve([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"])