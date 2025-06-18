function solve(input) {
    const elements = {}
    input = input.toLowerCase()

    input.split(" ").forEach(e => {
        if (! elements.hasOwnProperty(e)) elements[e] = 0
        elements[e] ++
    });

    let result = []
   Object.entries(elements).forEach(([k, v]) => {
       if ( v % 2 !== 0) {
        if (! result.includes(k) ) result.push(k)
       }
   });

   console.log(result.join(" "))
}



solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')