function solve(input) {

    movies = []

    input.forEach(element => {
        if (element.includes("addMovie")) {
            const name = element.split("addMovie ")[1]
            movies.push({name})
        }

        else if (element.includes("directedBy")) {
            const [name, director] = element.split(" directedBy ")
            movies.forEach(movie => {
                if( movie["name"] === name) {
                    movie["director"] = director
                }
            });
        }

        else if (element.includes("onDate")) {
            const [name, date] = element.split(" onDate ")
            movies.forEach(movie => {
                if (movie["name"] === name) {
                    movie["date"] = date
                }
            })
        }
    });

        
    for (const m of movies) {
        if (Object.keys(m).length === 3) console.log(JSON.stringify(m))
    }

}





solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])