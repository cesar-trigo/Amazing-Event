let $cards = document.getElementById("container");

let $checkobox = document.getElementById("checkboxJS");

let $buscador = document.getElementById("searchJS");



let eventos;
fetch('https://amazing-events.herokuapp.com/api/events')
    .then( data => data.json() )
    .then( res => {
    eventos = res.events;
    crearCheckbox( eventos,$checkobox)
    imprimirCards( eventos,$cards)
    $buscador.addEventListener( 'keyup', filtrar )
    $checkobox.addEventListener( 'change', filtrar )
    })
    


function crearCheckbox( eventos , contenedor ){
    let fn = eventos => eventos.category
    let categorias = new Set(eventos.filter( fn ).map( fn ))
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
                        <a href="./details.html?id=${eventos._id}" class=" btn btn-dark col-md-6 rounded-5 align-self-end bg-black">Read more</a>
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


function filtrar(){
    let checked = [...document.querySelectorAll( 'input[type="checkbox"]:checked' )].map( ele => ele.value)
    let filtradosPor = eventos.filter( evento => checked.includes( evento.category ) || checked.length === 0)
    let filtradosPorSearch = filtradosPor.filter( evento => evento.name.toLowerCase().includes( $buscador.value.toLowerCase()))
    imprimirCards(filtradosPorSearch, $cards)
}


//FUNCION PARA IMPRIMIR CARD
/* 
function imprimir(array, container) {
    array.forEach(objetoEvento => {//recorrer array a selecion
        container.innerHTML +=//imprimir ese recorrido, dentro de un contenedor a eleccion
            `
        <div class=" colorDetexto card mb-3 p-0 rounded-5  bg-dark" style="max-width: 540px;">
        <div class="row g-0" style="height: 100%;">
            <div class="col-md-4 ">
                <img src="${objetoEvento.image}" class="col-md-12 rounded-5" alt="${objetoEvento.name}"
                style="height:100%; width: 100%;">
            </div>
        <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${objetoEvento.name}</h5>
                    <p class="card-text">${objetoEvento.category}</p>
                    <div class="row">
                        <p class="card-text col-md-6"><small class="text-muted ">price: $ ${objetoEvento.price}</small></p>
                        <a href="./details.html?id=${objetoEvento._id}" class=" btn btn-dark col-md-6 rounded-5 align-self-end bg-black">Read more</a>
                    </div>
                </div>
            </div>
        </div> 
        </div> 
        `
    })
}
imprimir(datos, contenedorTarjet)


//EVENTO DEL SEARCH

buscador.addEventListener("keyup", (e) => {
    let inputUser = e.target.value//Muestra el valor de lo que escribio el usuario hasta el momento que dejo de apretar teclas
    let nombres = datos.filter(value => value.name.toLowerCase().includes(inputUser.toLowerCase()));
    contenedorTarjet.innerHTML = "";
    imprimir(nombres, contenedorTarjet)
});



//ARRAY DE CATEGORY DE LAS CHECKBOX

let addcheckbox = new Set(datos.map(categorias => categorias.category).sort());
addcheckbox = [...addcheckbox]
console.log(addcheckbox);


//FUNCION PARA IMPRIMIR LOS CHECKBOX ARREGLAR ESTO DE ID !!!!!

function imprimirr(array, container) {
    array.forEach(objetoEvento => {
        container.innerHTML +=
            `
        <div class="form-check form-check-inline">
            <input class="form-check-input checkBoxClass" type="checkbox" id="${objetoEvento}" value="${objetoEvento}">
            <label class="form-check-label text-light" for="${objetoEvento}">${objetoEvento}</label>
        </div>
        `
    })
}
imprimirr(addcheckbox, contenedorcheckbox)



//EVENTO DE LOS CHECKBOX

let categorias = [] //creo variable vacia para guardar mas adelanten
contenedorcheckbox.addEventListener("change", event => { //le pongo donde se produce el evento de enventos tipo change y que cuando ocurra el evento 
    if (event.target.checked) { //pregunta si el evento esta checked 
        categorias = categorias.concat(datos.filter(checkBox => checkBox.category.toLowerCase().includes(event.target.value.toLowerCase()))) //se compara si el nombre de la categoria coincide con lo que escriben
        contenedorTarjet.innerHTML = "" //va vaciar el con contenedor de las tarjetas a trasves del inerHTML
        imprimir(categorias, contenedorTarjet) //luego le asingno valores a la funcion de imprimir 
    } else if// 
        (!event.target.checked) {
        categorias = categorias.filter(checkBox => checkBox.category.toLowerCase() !== event.target.value.toLowerCase())
            
        contenedorTarjet.innerHTML = ""
        imprimir(categorias, contenedorTarjet)
    }
    if (categorias.length === 0) {
        imprimir(datos, contenedorTarjet)
    }})





 */



















