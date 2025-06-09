function passwordValidator(password) {
    function checkLength(password) {
        return password.length >= 6 && password.length <= 10
    } 

    function checkLettersAndDigits(password) {
        return /^[A-Za-z0-9]+$/.test(password)
    }

    function checkAtLeast2Digits(password) {
        return /(?:.*\d){2,}/.test(password);
    }

    

    if (checkLength(password) && checkLettersAndDigits(password) && checkAtLeast2Digits(password) ) 
            console.log("Password is valid")
    
    else {
        if (!checkLength(password)) console.log("Password must be between 6 and 10 characters")
        if (!checkLettersAndDigits(password)) console.log("Password must consist only of letters and digits")
        if (!checkAtLeast2Digits(password)) console.log("Password must have at least 2 digits")
        
    }
}