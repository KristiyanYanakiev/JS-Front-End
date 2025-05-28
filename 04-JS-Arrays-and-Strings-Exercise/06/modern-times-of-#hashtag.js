function solve(string) {
    for (let w of string.split(" ")) {
        if ((w.startsWith("#") && w.length > 1) && /^[A-Za-z]+$/.test(w.substring(1))) console.log(w.substring(1))
    }


}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')