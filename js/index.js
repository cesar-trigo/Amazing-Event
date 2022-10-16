let contenedorTarjet = document.getElementById("container");
let datos = data.events;


let tarjet = datos.map(dato => (contenedorTarjet.innerHTML +=
    `
<div class=" colorDetexto card mb-3 p-0 rounded-5  bg-dark" style="max-width: 540px;">
<div class="row g-0" style="height: 100%;">
    <div class="col-md-4 ">
        <img src="${dato.image}" class="col-md-12 rounded-5" alt="${dato.name}"
        style="height:100%; width: 100%;">
    </div>
<div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${dato.name}</h5>
            <p class="card-text">${dato.category}</p>
            <div class="row">
                <p class="card-text col-md-6"><small class="text-muted ">price: $ ${dato.price}</small></p>
                <a href="#" class=" btn btn-dark col-md-6 rounded-5 align-self-end bg-black">Read more</a>
            </div>
        </div>
    </div>
</div>
</div> 
`
));


let boton = document.getElementById("buttonjS");
boton.addEventListener("click",function(click){
    console.log(click);
})


let buscador = document.getElementById("searchJS");
buscador.addEventListener("keyup",function(eve){
    console.log(eve.target.value);
})
