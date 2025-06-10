function addressBook(arr) {
    const addresses = {}
    arr.forEach(element => {
        const [name, address] = element.split(":")
        addresses[name] = address


    });

    entries = Object.entries(addresses)


    sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]))

    for (const e of sortedEntries) {
       console.log(`${e[0]} -> ${e[1]}`) 
    }  
}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])