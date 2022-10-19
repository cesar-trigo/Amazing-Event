let contenedorTarjet = document.getElementById("container");
let datos = data.events;
let buscador = document.getElementById("searchJS");
let contenedorcheckbox = document.getElementById("checkboxJS");
let pastEvents = data.events.filter(event => data.currentDate > event.date);


//FUNCION PARA IMPRIMIR CARD

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
imprimir(pastEvents, contenedorTarjet)


//EVENTO DEL SEARCH

buscador.addEventListener("keyup", (e) => {
    let inputUser = e.target.value//Muestra el valor de lo que escribio el usuario hasta el momento que dejo de apretar teclas
    let nombres = categorias.filter(value => value.name.toLowerCase().includes(inputUser.toLowerCase()));
    contenedorTarjet.innerHTML = "";
    imprimir(nombres, contenedorTarjet)
});

//ARRAY DE CATEGORY DE LAS CHECKBOX

let addcheckbox = new Set(datos.map(categorias => categorias.category).sort());
addcheckbox = [...addcheckbox]
console.log(addcheckbox);



//FUNCION PARA IMPRIMIR LOS CHECKBOX

function imprimirr(array, container) {
    array.forEach(objetoEvento => {
        container.innerHTML +=
            `
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="${objetoEvento}" value="${objetoEvento}">
            <label class="form-check-label text-light" for="${objetoEvento}">${objetoEvento}</label>
        </div>
        `
    })
}
imprimirr(addcheckbox, contenedorcheckbox)


let categorias = []
contenedorcheckbox.addEventListener("change", event => {
    if (event.target.checked) {
        categorias = categorias.concat(pastEvents.filter(checkBox => checkBox.category.toLowerCase().includes(event.target.id.toLowerCase())))
        contenedorTarjet.innerHTML = ""
        imprimir(categorias, contenedorTarjet)
    } else if
        (!event.target.checked) {
        categorias = categorias.filter(
            (checkBox) => checkBox.category.toLowerCase() !== event.target.value.toLowerCase()
        )
        contenedorTarjet.innerHTML = ""
        imprimir(categorias, contenedorTarjet)
    }
    if (categorias.length === 0) {
        imprimir(pastEvents, contenedorTarjet)
    }})