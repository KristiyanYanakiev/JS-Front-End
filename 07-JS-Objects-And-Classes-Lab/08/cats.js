function createCat(arrOfStr) {

    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    arrOfStr.forEach(el => {
        const [name, age] = el.split(" ")
        const currentCat = new Cat(name, age)
        currentCat.meow()
    });
}

createCat(['Mellow 2', 'Tom 5'])