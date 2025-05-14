function solve(numOfPeople, typeOfGroup, dayOfWeek) {
    let pricePerPerson = 0
    let totalPrice = 0

    function calcPrice() {
        totalPrice = pricePerPerson * numOfPeople
    }
    

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek == "Friday") pricePerPerson = 8.45
            if (dayOfWeek == "Saturday") pricePerPerson = 9.80
            if (dayOfWeek == "Sunday") pricePerPerson = 10.46

            calcPrice()
            if (numOfPeople >= 30) totalPrice *= 0.85
        break
    
            
        case "Business":
            if (dayOfWeek == "Friday") pricePerPerson = 10.90
            if (dayOfWeek == "Saturday") pricePerPerson = 15.60
            if (dayOfWeek == "Sunday") pricePerPerson = 16

            if (numOfPeople >= 100) numOfPeople -= 10
            calcPrice()
        break

        case "Regular":
            if (dayOfWeek == "Friday") pricePerPerson = 15
            if (dayOfWeek == "Saturday") pricePerPerson = 20
            if (dayOfWeek == "Sunday") pricePerPerson = 22.50

            calcPrice()
            if (10 <= numOfPeople && numOfPeople <= 20) totalPrice *= 0.95
        
        break
    } 
    
    


    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}





solve(30, "Students","Sunday")
solve(40, "Regular","Saturday")