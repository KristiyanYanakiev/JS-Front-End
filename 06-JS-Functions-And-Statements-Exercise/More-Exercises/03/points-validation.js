function pointsValidation(points) {
    const x1 = points[0]
    const y1 = points[1]
    const x2 = points[2]
    const y2 = points[3]

    function isValidDistance(x1, y1, x2, y2) {
        return Number.isInteger(((x2 - x1) ** 2) + ((y2-y1) ** 2))
    }

    console.log(isValidDistance(x1, y1, 0, 0))
    console.log(isValidDistance(x2, y2, 0, 0))
    console.log(isValidDistance(x1, y1, x2, y2))
}

pointsValidation([2, 1, 1, 1])