let contenedor = document.getElementById("container")

function contenido(contenido) {
    for (let event of events) {
        contenido.innerHTML +=
            `
        <div class=" colorDetexto card mb-3 p-0 rounded-5  bg-dark" style="max-width: 540px;">
            <div class="row g-0" style="height: 100%;">
                <div class="col-md-4 ">
                    <img src="${event.image}" class="col-md-12 rounded-5" alt="${event.name}"
                    style="height:100%; width: 100%;">
                </div>
            <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.category}</p>
                        <div class="row">
                            <p class="card-text col-md-6"><small class="text-muted ">price: $ ${event.price}</small></p>
                            <a href="#" class=" btn btn-dark col-md-6 rounded-5 align-self-end bg-black">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
contenido(contenedor)