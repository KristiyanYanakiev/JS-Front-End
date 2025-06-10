function meetings(arr) {
    const schedule = {}

    arr.forEach(el => {
        const [day, name] = el.split(" ")
        if (schedule.hasOwnProperty(day)) console.log(`Conflict on ${day}!`)
        else {
            schedule[day] = name
            console.log(`Scheduled for ${day}`)
        
        }

    });

    for (const k of Object.keys(schedule)) {
        console.log(`${k} -> ${schedule[k]}`)
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])