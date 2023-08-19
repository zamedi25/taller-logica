let btnSumar = document.querySelector("#btnSumar")
let btnReset = document.querySelector("#btnReset")

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let n = e.target.numero.value
//     let suma = 0
//     let resultadoTotal = n + suma

//     for (let i = 0; i <= n; i++) {
//         suma += i;            
//     }
//     document.getElementById(resultado).value = suma  
// })

function add()  {
    let n = Number(document.querySelector("#numero").value)
    console.log(n)
    let suma = 0
    for (let i = 1; i <= n; i++) {
        suma += i;            
    }
    document.querySelector("#resultado").value = suma
}

function reset() {
    document.getElementById(numero).value = ""
    document.getElementById(resultado).value = ""
}
