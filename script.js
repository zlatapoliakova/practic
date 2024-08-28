"use strict";

let numberOfFilms; 
while (!numberOfFilms || numberOfFilms === 1){
    numberOfFilms = +prompt("Скільки фільмів ви передивились?", "");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastMovie = prompt("Один з останніх фільмів які ви передивились?", "");
     const lastMovieRating = +prompt("На скільки оцінити його?", "");
    if (lastMovie != null && lastMovieRating != null && lastMovie != '' && lastMovieRating != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = lastMovieRating;
        console.log('done')
    } else {
        console.log('error')
        i--;
    }
}

if (personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов")
} else if ( 10 < personalMovieDB.count < 30) {
    alert("Ви класический зритель")
} else if ( personalMovieDB.count > 30) {
    alert("Ви киноман")
} else {
    alert("Произошла ошибка")
}
console.log(personalMovieDB);

