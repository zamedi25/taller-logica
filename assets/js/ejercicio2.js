function reset() {
    document.getElementById(numero).value = ""
    document.getElementById(resultado).value = ""
}



function parImpar() {
    let valor = parseInt(document.querySelector("#numero").value)

    if (valor % 2 === 0) {
        document.querySelector("#resultado").value = "El numero ingresado es par."
    } else {
        document.querySelector("#resultado").value = "El numero ingresado es impar."
        
    } 
}
