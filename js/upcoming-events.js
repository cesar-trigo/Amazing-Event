let $cards = document.getElementById("container");

let $checkobox = document.getElementById("checkboxJS");

let $buscador = document.getElementById("searchJS");

let upcomingEvents;

fetch('https://mh-amazing.herokuapp.com/amazing')
    .then( data => data.json())
    .then( res => {
    eventos = res.events;
    upcomingEvents = eventos.filter(event => res.date < event.date)
    crearCheckbox( upcomingEvents,$checkobox)
    imprimirCards( upcomingEvents,$cards)
    $buscador.addEventListener( 'keyup', filtrar )
    $checkobox.addEventListener( 'change', filtrar )
    })


//funcion para crear checkbox

function crearCheckbox( eventos , contenedor ){
    let fn = eventos => eventos.category
    let categorias = new Set(eventos.map( fn ))
    categorias.forEach(even =>{
        contenedor.innerHTML += 
        `
        <div class="form-check form-check-inline">
            <input class="form-check-input checkBoxClass" type="checkbox" id="${even}" value="${even}">
            <label class="form-check-label text-light" for="${even}">${even}</label>
        </div>
        `
    })
}

//funcion para crear cards


function crearCard(eventos) {
    let section = document.createElement("div")
    section.classList = 'colorDetexto tamano card mb-3 p-0 rounded-5  bg-dark'
    section.innerHTML +=

            `
        <div class="row g-0" style="height: 100%;">
            <div class="col-md-4 ">
                <img src="${eventos.image}" class="col-md-12 rounded-5" alt="${eventos.name}"
                style="height:100%; width: 100%;">
            </div>
        <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${eventos.name}</h5>
                    <p class="card-text">${eventos.category}</p>
                    <div class="row">
                        <p class="card-text col-md-6"><small class="text-muted ">price: $ ${eventos.price}</small></p>
                        <a href="./details.html?id=${eventos.id}" class=" btn btn-dark col-md-6 rounded-5 align-self-end bg-black">Read more</a>
                    </div>
                </div>
            </div>
        </div> 
        `
        return section
    }

// funcion para imprimir cards

function imprimirCards( eventos, contenedor){
    contenedor.innerHTML = ''
    if(eventos.length > 0) {
        let fragment = document.createDocumentFragment()
        eventos.forEach( eventos => fragment.appendChild( crearCard(eventos,contenedor) ) )
        contenedor.appendChild(fragment)
    }else{
        contenedor.innerHTML = '<h4>error</h4>'
    }
}

//funcion para filtrar

function filtrar(){
    let checked = [...document.querySelectorAll( 'input[type="checkbox"]:checked' )].map( ele => ele.value)
    let filtradosPor = upcomingEvents.filter( evento => checked.includes( evento.category ) || checked.length === 0)
    let filtradosPorSearch = filtradosPor.filter( evento => evento.name.toLowerCase().includes( $buscador.value.toLowerCase()))
    imprimirCards(filtradosPorSearch, $cards)
}












































/* let upcomingEvents;
fetch('https://amazing-events.herokuapp.com/api/events')
    .then(data => data.json())
    .then(res => {
        eventos = res.events;
        upcomingEvents = eventos.filter(event => res.currentDate < event.date)
        crearCheckbox(upcomingEvents, $checkobox)
        imprimirCards(upcomingEvents, $cards)
        $buscador.addEventListener('keyup', filtrar)
        $checkobox.addEventListener('change', filtrar)
    })




function crearCheckbox(eventos, contenedor) {
    let fn = eventos => eventos.category
    let categorias = new Set(eventos.map(fn))
    categorias.forEach(even => {
        contenedor.innerHTML +=
            `
        <div class="form-check form-check-inline">
            <input class="form-check-input checkBoxClass" type="checkbox" id="${even}" value="${even}">
            <label class="form-check-label text-light" for="${even}">${even}</label>
        </div>
        `
    })
}

//funcion para crear cards


function crearCard(array) {
    let section = document.createElement("div")
    section.classList = 'colorDetexto tamano card mb-3 p-0 rounded-5  bg-dark'
    section.innerHTML +=

        `
        
        <div class="row g-0" style="height: 100%;">
            <div class="col-md-4 ">
                <img src="${array.image}" class="col-md-12 rounded-5" alt="${array.name}"
                style="height:100%; width: 100%;">
            </div>
        <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${array.name}</h5>
                    <p class="card-text">${array.category}</p>
                    <div class="row">
                        <p class="card-text col-md-6"><small class="text-muted ">price: $ ${array.price}</small></p>
                        <a href="./details.html?id=${array._id}" class=" btn btn-dark col-md-6 rounded-5 align-self-end bg-black">Read more</a>
                    </div>
                </div>
            </div>
        </div> 
        
        `
    return section
}

// funcion para imprimir cards

function imprimirCards(pastEvents, contenedor) {
    contenedor.innerHTML = ''
    if (pastEvents.length > 0) {
        let fragment = document.createDocumentFragment()
        pastEvents.forEach(pastEvents => fragment.appendChild(crearCard(pastEvents, contenedor)))
        contenedor.appendChild(fragment)

    } else {
        contenedor.innerHTML = '<h4>error</h4>'
    }
}


function filtrar() {
    let checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(ele => ele.value)
    let filtradosPor = upcomingEvents.filter(upcomingEvents => checked.includes(upcomingEvents.category) || checked.length === 0)
    let filtradosPorSearch = filtradosPor.filter(pastEvents => pastEvents.name.toLowerCase().includes($buscador.value.toLowerCase()))
    imprimirCards(filtradosPorSearch, $cards)
} */



















