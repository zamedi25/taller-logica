function calcularEdad(edad) {
    let calcular = document.querySelector("#edadInput").value
    let calcularGenero = document.querySelector("#generoInput").value
    if (calcular < 10) {
        document.querySelector("#resultado").value = "Te ganaste un jugo, felicidades campeon"
    }   
    
    if (calcular > 18 && calcularGenero == "Hombre") {
            document.querySelector("#resultado").value = "Te ganaste una cerveza y una pizza 3 carnes "
        }
            if (calcular > 18 && calcularGenero == "Mujer") {
                document.querySelector("#resultado").value = "Te ganaste una cerveza y una pizza hawaiana "
            }
            else {
                "no recibes ningun premio :c"
            }
}