function circle_area(data) {
    let res;
    if (typeof data == "number") {
        res = (data ** 2 * Math.PI).toFixed(2)
        
    }

    else 
    res = `We can not calculate the circle area, because we receive a ${typeof data}.`

    console.log(res)
}

circle_area(5)
circle_area("name")