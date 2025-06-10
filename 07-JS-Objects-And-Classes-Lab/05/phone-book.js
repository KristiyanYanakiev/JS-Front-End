function phoneBook(arr) {

    result = {}

    arr.forEach(element => {
        const [name, phone] = element.split(" ")
        result[name] = phone
    });
   
    for (const k of Object.keys(result)) {
        console.log(`${k} -> ${result[k]}`)
    }
}




phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])