//object with Object Method
const show = {
    name: "Breaking Bad",
    genre: "Crime, Drama, Thriller",
    rating: 9.5,
    details: function() {
        return `${this.name} is a ${this.genre} show with a rating of ${this.rating}.`;
    }
};

//Array with an array method
const similarShows = [
    "Better Call Saul",
    "The Wire",
    "Fargo"
];
const showCount = similarShows.length;

console.log(show.details());

console.log(`There are ${showCount} similar shows like ${similarShows[0]}, ${similarShows[1]}, and ${similarShows[2]}.`);