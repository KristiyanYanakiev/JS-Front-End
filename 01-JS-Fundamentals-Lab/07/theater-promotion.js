function ticketPrice(day, age) {
    let res
    switch (day) {
        case "Weekday":
            if ((0 <= age && age <= 18) || (64 < age && age<= 122)) {
                res = "12$"
            }

            else if (18 < age && age<= 64) {
                res = "18$"
            }

            else {
                res = "Error!"
            }

            break

        case "Weekend":
            if ((0 < age && age <= 18) || (64 < age && age <= 122)) {
                res = "15$"
            }

            else if (18 < age && age <= 64) {
                res = "20$"
            }

            else {
                res = "Error!"
            }
            break

        case "Holiday":
            if (0<= age && age<= 18) {
                res = "5$"
            }

            else if (18 < age && age <= 64) {
                res = "12$"
            }

            else if (64 < age && age <= 122) {
                res = "10$"
            }
            else {
                res = "Error!"
            }
            break
        default:
            res = "Error!"
            
            
    }

    console.log(res)
}

ticketPrice('Holiday', -12)