const callApi = 'https://lanciweb.github.io/demo/api/pictures/';

// Chiamiamo api con axios
axios.get(callApi)
    .then(response => {
        console.log(response.data);
        rowElement.innerHTML = createCol(response.data);
    })


// Funzione per aggiungere le immagini nell'html

const rowElement = document.querySelector('.row');


/*
    <div class="col-xl-4 col-md-6 col-sm-12 position-relative">
        <div class="d-flex flex-column bg-white post-it">
            <img src="img/wall.png" alt="casual" class="image-post-it">
            <p>ciao</p>
            <img src="img/pin.svg" alt="pin" class="pin">
            <h2>Ciao</h2>
        </div>
    </div>
*/


function createCol(data) {
    let items = '';

    data.forEach(element => {
        items += `<div class="col-xl-4 col-md-6 col-sm-12 position-relative">
        <div class="d-flex flex-column bg-white post-it" onclick="postItOverlay('${element.url}')">
            <img src="${element.url}" alt="${element.title}" class="image-post-it">
            <p>${element.date}</p>
            <img src="img/pin.svg" alt="pin" class="pin">
            <h2>${element.title}</h2>
        </div>
    </div>`
    });

    //console.log(items);

    return items;
}

const overLayELement = document.querySelector('.overlay');
const overLayImageELement = document.getElementById('image-overlay');

//Creare un overlay
function postItOverlay(element) {

    console.log(overLayELement);

    console.log(element);

    overLayELement.classList.remove('hidden');

    overLayImageELement.src = `${element}`;
    overLayImageELement.alt = `${element}`;

    console.log(overLayImageELement);

}

// Funzione chiudere l'overlay
const buttonOverlay = document.getElementById('close');

console.log(buttonOverlay);

buttonOverlay.addEventListener('click', function () {

    overLayImageELement.src = " ";
    overLayImageELement.alt = " ";
    overLayELement.classList.add('hidden');

});

