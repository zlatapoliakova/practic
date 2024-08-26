"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви передивились?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstLastMovie = prompt("Один з останніх фільмів які ви передивились?", "");
const firstLastMovieRating = +prompt("На скільки оцінити його?", "")

const secondLastMovie = prompt("Один з останніх фільмів які ви передивились?", "");
const secondLastMovieRating = +prompt("На скільки оцінити його?", "")

personalMovieDB.movies[firstLastMovie] = firstLastMovieRating;
personalMovieDB.movies[secondLastMovie] = secondLastMovieRating;

console.log(personalMovieDB);
