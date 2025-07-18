myArr = ["kris", 25, "Bulgarian"]

myArr = myArr.map((el, i) => ({"name": el, index: i}))

for (const element of myArr) {
    console.log(element)
}