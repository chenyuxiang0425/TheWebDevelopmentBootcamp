let movies = [
    {
        title: "In Bruges",
        hasWatched:true,
        rating:5
    },
    {
        title: "Frozen",
        hasWatched:false,
        rating:4.5
    },
]

movies.forEach(function (element) {
    let result = "You have ";
    if (element.hasWatched) {
        console.log(result + "watched \""+ element.title + "\" - " + element.rating + " stars");
    } else {
        console.log(result + "not seen \""+ element.title + "\" - " + element.rating + " stars");
    }
})