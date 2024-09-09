"use strict";

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt("Скільки фільмів ви передивились?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки фільмів ви передивились?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log("Головний об'єкт програми")
    }
}

showMyDB();

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов")
    } else if ( 10 < personalMovieDB.count < 30) {
        alert("Ви класический зритель")
    } else if ( personalMovieDB.count > 30) {
        alert("Ви киноман")
    } else {
        alert("Произошла ошибка")
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i < 3; i++) {
        const favoriteGenres = prompt(`Ваш улюблений жанр ${i}`, "");
        personalMovieDB.genres[i - 1] = favoriteGenres;
    }
}

writeYourGenres();

console.log(personalMovieDB);