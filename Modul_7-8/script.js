// xhr.open("GET", "https://omdbapi.com/?apikey=7fbf9a38&s=matrix");
const searchName = document.querySelector('.form-control'),
    mountPoint = document.querySelector('.films__wrapper'),
    select = document.querySelector('select'),
    searchBtN = document.querySelector('.btn-outline-secondary');
let content = 0,
    searchStr = `http://www.omdbapi.com/?apikey=221cf632&s=`,
    page = 1;


searchBtN.addEventListener('click', (e) => {
    e.preventDefault();
    getElement(searchName.value, select.value, page);
});


function getElement(search, type, page) {
    fetch(`${searchStr}${search}&type=${type}&page=${page}`)
        .then(response => response.json())
        .catch(() => {
            console.log(error);
        })
        .then(json => {
            content = json.Search;
            console.log(json);
            if (json.Error) {
                alert(json.Error);
            } else {
                parseContent(content);
                parsePagination(json.totalResults / 10);
                fullInfo();
            }
        });
}

function parseContent(content) {
    mountPoint.innerHTML = '';
    mountPoint.nextSibling.innerHTML = '';

    content.forEach((e) => {
        mountPoint.insertAdjacentHTML('beforeend',
            `<div class="card" style="width: 20rem;">
        <img src=${e.Poster} class="card-img-top" alt="Постер для ${e.Title} отсутсвует :(">
        <div class="card-body">
        <p style="display: none">${e.imdbID}</p>
          <h5 class="card-title">${e.Title}</h5>
          <p class="card-text">Тип: ${e.Type}</p>
          <p class="card-text">Год: ${e.Year}</p>
          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Показать подробности
        </button>
        </div>
      </div>`);
    });
}

function parsePagination(e) {
    mountPoint.insertAdjacentHTML('afterend',
        `<nav aria-label="Page navigation example">
    <ul class="pagination">
    <li class="page-item"><a class="page-link previous" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link next" href="#">Next</a></li>
    </ul>
    </nav>`);
    const pages = document.querySelector('.pagination');
    for (i = 1; i <= e; i++) {
        pages.lastElementChild.insertAdjacentHTML('beforebegin', `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`);
    }
    changePage(pages);

}


function changePage(event) {
    event.childNodes.forEach((e) => {
        e.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.tagName == 'A' && !e.target.classList.contains('next') && !e.target.classList.contains('previous')) {
                page = `${e.target.textContent}`;
            } else if (e.target.classList.contains('next')) {
                page++;
            } else if (e.target.classList.contains('previous')) {
                page--;
            }
            console.log(searchName.value, select.value, e.target.textContent, page);
            getElement(searchName.value, select.value, page);
        });
    });
}

function fullInfo() {
    const full = document.querySelectorAll('.btn-outline-primary');
    full.forEach((e) => {
        e.addEventListener('click', (event) => {
            getFullInfo(event.target.parentNode.firstElementChild.textContent);
        });
    });
}

function getFullInfo(search) {
    fetch(`https://www.omdbapi.com/?apikey=221cf632&i=${search}`)
        .then(response => response.json())
        .then(json => {
            if (json.Error) {
                alert(json.Error);
            } else {
                content = json.Search;
                console.log(json);
                parseFullContent(json);
            }
        });
}

function parseFullContent(content) {
    const mountPointFull = document.querySelector('.modal-content');
    mountPointFull.innerHTML = '';
    mountPointFull.insertAdjacentHTML('beforeend',
        `<div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Название: "${content.Title}"</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="modal-body">
          <img src=${content.Poster} class="card-img-top" alt="Постер для ${content.Title} отсутсвует :(">
          </div>
          <div class="dody__text">
          <p class="card-text"><b>Тип:</b> ${content.Type}</p>
          <p class="card-text"><b>Релиз:</b> ${content.Released}</p>
          <p class="card-text"><b>Жанр:</b> ${content.Genre}</p>
          <p class="card-text"><b>Длительность:</b> ${content.Runtime}</p>
          <p class="card-text"><b>Режиссер:</b> ${content.Director}</p>
          <p class="card-text"><b>Актеры:</b> ${content.Actors}</p>
          <p class="card-text"><b>Сюжет:</b> ${content.Plot}</p>
          <p class="card-text"><b>Собрал:</b> ${content.BoxOffice}</p>
          <p class="card-text"><b>Рейтинг:</b> 
          IMDB-${content.imdbRating}<br>
          </div>
          </div>`);
    fullInfo();
}





// {
//     "Title": "The Matrix Reloaded",
//     "Year": "2003",
//     "Rated": "R",
//     "Released": "15 May 2003",
//     "Runtime": "138 min",
//     "Genre": "Action, Sci-Fi",
//     "Director": "Lana Wachowski, Lilly Wachowski",
//     "Writer": "Lilly Wachowski, Lana Wachowski",
//     "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
//     "Plot": "In this second adventure, Neo and the rebel leaders estimate that they have 72 hours until Zion falls under siege to the Machine Army. Only a matter of hours separates the last human enclave on Earth from 250,000 Sentinels programmed to destroy mankind. But the citizens of Zion, emboldened by Morpheus conviction that the One will fulfill the Oracles Prophecy and end the war with the Machines, rest all manner of hope and expectation on Neo, who finds himself stalled by disturbing visions as he searches for a course of action.",
//     "Language": "English, French",
//     "Country": "United States",
//     "Awards": "8 wins & 34 nominations",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "7.2/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "73%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "62/100"
//         }
//     ],
//     "Metascore": "62",
//     "imdbRating": "7.2",
//     "imdbVotes": "585,318",
//     "imdbID": "tt0234215",
//     "Type": "movie",
//     "DVD": "14 Oct 2003",
//     "BoxOffice": "$281,576,461",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }



// {
//     "Title": "The Matrix",
//     "Year": "1999",
//     "imdbID": "tt0133093",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
// }

// https://www.omdbapi.com/?apikey=221cf632&t=matrix&type=movie&page=3&plot=full