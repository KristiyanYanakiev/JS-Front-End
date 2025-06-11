function Song(array) {

    numOfSongs = array.shift()
    criterion = array.pop()

    array.forEach(s => {
        if (criterion != "all") {
            if (s.split("_")[0] === criterion) console.log(s.split("_")[1])

        }

        else {
            console.log(s.split("_")[1])
        }
    });



}


Song([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
