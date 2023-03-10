const $ = document;


const moviesList = [
    "Vanilla Sky","Mission Impos","Top Gun","The Mummy"
];

const priceList = [
    "200","250","320","100"
];

const MOVIE_LIST_CONTAINER = $.getElementById('movieListContainer');

let tempHTML = "";

for(let i=0;i<moviesList.length;i++){
    tempHTML += `<li class="fw-bold list-group-item ${i==0 ? 'active' : ''}">${moviesList[i]} , <span class="">Ticket Price: ${priceList[i]}</span> <button class="btn btn-secondary">Book Now</button></li>`;
}

MOVIE_LIST_CONTAINER.innerHTML = tempHTML;