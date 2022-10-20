let contenedorTarjet = document.getElementById("container");
let datos = data.events;

let buscador = document.getElementById("searchJS");
let contenedorcheckbox = document.getElementById("checkboxJS");



async function getData(){
    try{
        await fetch("https://mind-hub.up.railway.app/amazing")

        
    } catch(error){
    }
    
    
}








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



//EVENTO DE LOS CHECKBOX

let categorias = [] //creo variable vacia para guardar mas adelanten
contenedorcheckbox.addEventListener("change", event => { //le pongo donde se produce el evento de enventos tipo change y que cuando ocurra el evento 
    if (event.target.checked) { //pregunta si el evento esta checked 
        categorias = categorias.concat(datos.filter(checkBox => checkBox.category.toLowerCase().includes(event.target.id.toLowerCase()))) //se compara si el nombre de la categoria coincide con lo que escriben
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

























