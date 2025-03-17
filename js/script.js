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
        <div class="d-flex flex-column bg-white ">
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
        <div class="d-flex flex-column bg-white ">
            <img src="${element.url}" alt="${element.title}" class="image-post-it">
            <p>${element.date}</p>
            <img src="img/pin.svg" alt="pin" class="pin">
            <h2>${element.title}</h2>
        </div>
    </div>`
    });

    console.log(items);

    return items;
}