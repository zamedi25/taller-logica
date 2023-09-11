class TeclaPiano {
    #sonidoTeclas = ''
    constructor(sonidoTeclas){
        this.#sonidoTeclas = sonidoTeclas        
    }
    activarSonido(){
        const sonidin = new Audio (this.#sonidoTeclas)
        sonidin.play()
        console.log(sonidin.activarSonido())
    }
}


let tDo = new TeclaPiano('assets/sound/nota1.mp3')
const t1 = document.querySelector("#t1")
t1.addEventListener("click", () => {
    tDo.activarSonido()
})


let tRe = new TeclaPiano('assets/sound/nota2.mp3')
const t2 = document.querySelector('#t2')
t2.addEventListener('click', () => {
    tRe.activarSonido()
})


let tMi = new TeclaPiano('assets/sound/nota3.mp3')
const t3 = document.querySelector('#t3')
t3.addEventListener('click', () => {
    tMi.activarSonido()
})


let tFa = new TeclaPiano('assets/sound/nota4.mp3')
const t4 = document.querySelector('#t4')
t4.addEventListener('click', () => {
    tFa.activarSonido()
})


let tSol = new TeclaPiano('assets/sound/nota5.mp3')
const t5 = document.querySelector('#t5')
t5.addEventListener('click', () => {
    tSol.activarSonido()
})


let tLa = new TeclaPiano('assets/sound/nota6.mp3')
const t6 = document.querySelector('#t6')
t6.addEventListener('click', () => {
    tLa.activarSonido()
})


let tSi = new TeclaPiano('assets/sound/nota7.mp3')
const t7 = document.querySelector('#t7')
t7.addEventListener('click', () => {
    tSi.activarSonido()
})


let tDoo = new TeclaPiano('assets/sound/nota8.mp3')
const t8 = document.querySelector('#t8')
t8.addEventListener('click', () => {
    tDoo.activarSonido()
})






// pianoId.innerHtml += `
// <div class="botones">
// <button></button>
// <button></button>
// <button></button>
// <button></button>
// <button></button>
// <button></button>
// <button></button>
// <button></button>
// </div>
// `