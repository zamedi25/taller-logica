let personajes = document.querySelector('#cartasPersonajes')
let rmApi = 'https://rickandmortyapi.com/api/character'

async function getPersonajes(){
    let response = await fetch(rmApi)
    let lista = await response.json()

    const resultados = lista.results

    for (let i = 0; i < resultados.length; i++) {
        let rmApiPersonajes = resultados[i]
        await fetchCharacterResults(rmApiPersonajes)
    }


}

getPersonajes()

const fetchCharacterResults = async (rmApiPersonajes) => {
    let promesa = await fetch(rmApiPersonajes.url)
    let personajeCompleto = await promesa.json()

    const nombres = personajeCompleto.name
    const imagenes = personajeCompleto.image
    const especies = personajeCompleto.species
    const estatus = personajeCompleto.status
    const genero = personajeCompleto.gender

    console.log(nombres)
    
    personajes.innerHTML += `
    
    <div class="col">
        <div class="card cartica">
            <img src="${imagenes}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nombres}</h5>
                <ul class="list-group">
                    <li class="list-group-item">${especies}</li>
                    <li class="list-group-item">${estatus}</li>
                    <li class="list-group-item">${genero}</li>
                </ul>
            </div>
        </div>
    </div>

    

    `
    
}

/* <div class=" ">
<div class="card ">
    <img src="${imagenes}" class="card-img-top" alt="...">
    <div class="card-body ">
        <h5 class="card-title">${nombres}</h5>
        <ul class="list-group">
            <li class="list-group-item">${especies}</li>
            <li class="list-group-item">${estatus}</li>
            <li class="list-group-item">${genero}</li>
        </ul>
    </div>
</div>
</div> */