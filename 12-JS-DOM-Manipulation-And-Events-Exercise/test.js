const values = [1, 1, 3]

const dublicates = values.filter((item, index) => values.indexOf(item) != index)

console.log(dublicates)