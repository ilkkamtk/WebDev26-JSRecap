'use strict';

const movies = [];

// hard code for testing
const movie1 = {
  title: 'Star Wars',
  rating: 5,
};

const movie2 = {
  title: 'Aliens',
  rating: 3,
};

const movie3 = {
  title: 'Reinikainen',
  rating: 4.5,
};

movies.push(movie1);
movies.push(movie2);
movies.push(movie3);

movies.sort(function (a, b) {
  console.log(a.rating, b.rating);
  return b.rating - a.rating;
});

console.log(`Highest rated movie: ${movies[0]}`);

let html = '';

for (const movie of movies) {
  html += `<li>${movie.title}</li>`;
}

document.querySelector('#target').innerHTML = html;
