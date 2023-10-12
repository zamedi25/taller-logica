let personajes = document.querySelector('#cartasPokemon')
let pokeApi = 'https://pokeapi.co/api/v2'

async function getPokemones(pkmURL = "https://pokeapi.co/api/v2/pokemon?limit=20"){

    document.querySelector('#cartasPokemon').innerHTML= "";


    let response = await fetch(pkmURL)
    let lista = await response.json()


    document.querySelector("#botonesApi").innerHTML = `
    <button type="button" class="btn btn-warning" id="btnAtras" onclick="getPokemones('${lista.previous}')">Anterior</button>
    <button type="button" class="btn btn-warning" id="btnSiguiente" onclick="getPokemones('${lista.next}')">Siguiente</button>
    `

    const resultados = lista.results

    for (let i = 0; i < resultados.length; i++) {
        let pokeApiPersonajes = resultados[i]
        await getPokemonResults(pokeApiPersonajes)
    }


}

getPokemones()

const getPokemonResults = async (pokeApiPersonajes) => {

    let promesa = await fetch(pokeApiPersonajes.url)
    let pokeCompleto = await promesa.json()

    console.log(pokeCompleto)

    const imagen = pokeCompleto.sprites
    const habilidades = pokeCompleto.abilities
    const tipo = pokeCompleto.types

    // let habilidadesESP = []
    // let tiposESP = []

    let tipo2 = (pokeCompleto.types[1] != null) ? ", "+pokeCompleto.types[1].type.name : ""
    // CONDICIONAL DE UNA LINEA, ? es preguntarle a js (IF), : significa un else
    
    personajes.innerHTML += `
    
    <div class="col">
        <div class="card cartica">
            <img src="${imagen.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pokeApiPersonajes.name}</h5>
                <ul class="list-group">
                    <li class="list-group-item" id="listaTiposPoke">${pokeCompleto.types[0].type.name} ${tipo2}</li>
                    <li class="list-group-item" id="listaHabilidadesPoke">${pokeCompleto.abilities[0].ability.name}</li>
                </ul>
            </div>
        </div>
    </div>

    

    `
    
    habilidades.forEach(async(ability) => {
    
        let promesa = await fetch(ability.ability.url)
        console.log(promesa)
        let habilidadComp = await promesa.json()
    
        console.log(habilidadComp)

        // let es = habilidadComp.names.find(x => x.language.name === "es")
    
        // habilidadesESP.push(es.name)
    
        // let listaHabilidades = document.querySelector(`#listaHabilidadesPoke_${pokeCompleto.id}`)
        // listaHabilidades.innerHTML += `<p class="${es.name}">${es.name}</p>`
    
    })


    tipo.forEach(async(type) => {
    
        let promesa = await fetch(type.type.url)
        let tiposComp = await promesa.json()

        console.log(tiposComp)
    
        // let es = tiposComp.names.find(x => x.language.name === "es")
    
        // tiposESP.push(es.name)
    
        // let listaTipos = document.querySelector(`#listaTiposPoke_${pokeCompleto.id}`)
        // listaTipos.innerHTML += `<p class="${es.name}">${es.name}</p>`
    
    })


}

