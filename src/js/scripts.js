const urlApi = 'https://rickandmortyapi.com/api/character/';
const listEl = document.getElementById('list');

let nextUrl = '';
let prevUrl = '';
let numPages = '';

const getCharacters = async (url, name = '') => {
    if (name !== '') {
        var response = await fetch(`${url}?name=${name}`)
    } else {
        var response = await fetch(url)
    }

    const data = await response.json();
    nextUrl = data.info.next;
    prevUrl = data.info.prev;
    numPages = data.info.pages;

    const characters = data.results;
    render(characters);
    resultPage();
}

const searchCharacters = (evento) => {
    evento.preventDefault();
    const name = document.querySelector('input').value;
    getCharacters(urlApi, name);
}

const render = (characters) => {
    listEl.innerHTML = '';
    characters.map((character) => {
        listEl.insertAdjacentHTML('beforeend', `
    <div class="card">
      <div class="card-header">
        <p class="card-title">${character.name}</p>
      </div>
      <div class="card-img">
        <img src="${character.image}" alt="${character.name}"/>
      </div>
      <div class="card-body">
        <p><b>Gender:</b> ${character.gender}</p>
        <p><b>Species:</b> ${character.species}</p>
        <p><b>Origin:</b> ${character.origin.name}</p>
      </div>
    </div>
    `)
    })
}

const nextPage = () => {
    getCharacters(nextUrl);
}
const prevPage = () => {
    getCharacters(prevUrl);
}

const resultPage = () => {    
    let final = parseInt(numPages)-1;
    pageAtual.innerHTML = `<p>${atual}</p>`;

    if (atual === 1) {
        document.getElementById("prev").disabled = true;
    }
    if (atual === final) {
        document.getElementById("next").disabled = true;
    }
}


getCharacters(urlApi);