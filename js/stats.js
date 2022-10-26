let $contenedorDeTabla1 = document.getElementById("tabla1js")
let $contenedorDeTabla2 = document.getElementById("tabla2js")
let $contenedorDeTabla3 = document.getElementById("tabla3js")
let evenFuturos
let evenPasados


fetch('https://mh-amazing.herokuapp.com/amazing')
    .then((data) => data.json())
    .then((res) => {
    let eventos = res.events
    let currentDate = res.date
    evenFuturos = eventos.filter((dataa) => dataa.date > currentDate)
    evenPasados = eventos.filter((dataa) => dataa.date < currentDate)
    calculoTablaprimar()
    stats(evenFuturos,'estimate',$contenedorDeTabla2)
    stats(evenPasados,'assistance',$contenedorDeTabla3)
    })

    function calculoTablaprimar() {
        evenPasados.map((objeto) => {
            objeto.porcentajeAsistencia = 100 * (objeto.assistance / objeto.capacity)
    })
        
        let asistenciaOrdenada = [...evenPasados].sort((e1, e2) => e1.porcentajeAsistencia - e2.porcentajeAsistencia)
        let capacidadOrdenada = [...evenPasados].sort((e1, e2) => e1.capacity - e2.capacity)
        
        let menorAsistencia = asistenciaOrdenada[0]
        let mayorAsistencia = asistenciaOrdenada[asistenciaOrdenada.length - 1]
        let mayorCapacidad = capacidadOrdenada[capacidadOrdenada.length - 1]
        imprecionTab1($contenedorDeTabla1,mayorAsistencia,menorAsistencia, mayorCapacidad)
}

function imprecionTab1(contenedor, objeto1, objeto2, objeto3) {
    contenedor.innerHTML += 
    `
    <tr>
        <td>${objeto1.name}</td> 
        <td>${objeto2.name}</td>
        <td>${objeto3.name}</td>
    </tr>
    `
}

function stats(fechaEvento,propiedad,contenedor) {
    fechaEvento.map(evento => {
        evento.ganancia = evento[propiedad] * evento.price
    })
    let categories = Array.from(new Set(fechaEvento.map(event => event.category)))
    let stats = categories.map(categ => {
        let filter = fechaEvento.filter(event => event.category === categ)
        return calculoTablaSecun(filter,propiedad)// se arma returna el estasts de abajo
    })
    imprecionTab2(stats,contenedor) //recien cuando retorno el stat de abajo 
}

function  calculoTablaSecun  (array,propiedad){
    let initialStat = {
        category: "",
        ganancia: 0,
        capacity: 0,
        [propiedad]: 0
    }
    let stats = array.reduce((element1,element2) => { // es un acomulador
        return {
            category: element2.category,
            ganancia: element1.ganancia + element2.ganancia,
            capacity: element1.capacity + element2.capacity,
            [propiedad]: element1[propiedad] + element2[propiedad]
        }
    }, initialStat)
    stats.promedio = (100 * stats[propiedad] / stats.capacity).toFixed(0)
    return stats
}

function imprecionTab2(array, contenedor) {
    array.forEach(element => {
    contenedor.innerHTML +=
        `
        <tr >
            <td >${element.category}</td>
            <td >$${element.ganancia}</td>
            <td >${element.promedio}%</td>     
        </tr>
        `
    })
}


