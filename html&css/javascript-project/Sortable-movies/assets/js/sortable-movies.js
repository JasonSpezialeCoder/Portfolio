const movieHolder = document.querySelector('.movie-holder');

for(let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let mins = movies[i].mins;
    let hours = movies[i].hours;
    

    let imgFile = movie.name.toLowerCase();

    imgFile = imgFile.replaceAll(' ', '-');

    imgFile = imgFile.replaceAll("'", "");
    imgFile = imgFile.replaceAll(':', "");
    imgFile = imgFile.replaceAll(',', "");
    imgFile = imgFile.replaceAll('.', "");

    imgFile += '.jpg';

    movie.imgFile = imgFile;

    let first2chars = movie.name.slice(0, 2);
    let first4chars = movie.name.slice(0, 4);

    if(first2chars == "A ") {
        movie.noAThe = movie.name.slice(2);
    } else if(first4chars == "The ") {
        movie.noAThe = movie.name.slice(4);
    } else {
        movie.noAThe = movie.name;
    }

    renderMovies();
}

console.log(movies);

function renderMovies() {
    movieHolder.innerHTML = "";

    for(let i = 0; i < movies.length; i++) {
        let movie = movies[i];

        let divvy = document.createElement('div');
        divvy.className = 'divvy';
        movieHolder.appendChild(divvy);

        let moviePoster = new Image();
        moviePoster.src = '/html&css/javascript-project/Sortable-movies/assets/images/' + movie.imgFile;
        divvy.appendChild(moviePoster);

        divvy.innerHTML += `<br>${movie.name}<br>${movie.year} - ${movie.hours}${movie.hour} ${movie.mins}${movie.min}`;

    }
}


const sortMenu = document.getElementById('sort-menu');
sortMenu.addEventListener('change', sortMovies);

const descCB = document.getElementById('desc');

descCB.addEventListener('change', function() {
    movies.reverse();
    renderMovies();
});

function sortMovies() {
    let sortKey = this.value;

    if(sortKey == 'name') {
        movies.sort(function(a, b) {
            if(a.noAThe > b.noAThe) {
                return 1;
            } else {
                return -1;
            }
        });
    }
    else if (sortKey == 'mins') {
        movies.sort(function(a, b) {
            return a.hours * 60 + a.mins - (b.hours * 60 + b.mins);
        });
    } else {
        movies.sort(function(a, b) {
            return a[sortKey] - b[sortKey];
        });
    }

    if(descCB.checked) movies.reverse();

    renderMovies();
}
