function checkPalindrome(arrNum) {
    res = []
    arrNum.forEach(element => {
        res.push(String(element) === String(element).split("").reverse().join(""))
    });

    console.log(res.join("\n"))
}

checkPalindrome([123,323,421,121])