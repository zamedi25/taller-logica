// EJERCICIO 1




let divEj1 = document.querySelector("#ejercicio1")

class persona   {
    constructor(nombre, edad, profesion, imagen) {
        this.imagen = imagen
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
}

console.log(persona)

let persona1 = new persona("Guts", 25 , "Mata Demonios", "assets/img/classesimg/berserk-guts.png")
let persona2 = new persona("Casca", 23 , "Mercenaria", "assets/img/classesimg/berserk-casca.png")
let persona3 = new persona("Griffith" , 25 , "El Hdp mas grande", "assets/img/classesimg/berserk-griffith.png")

console.log(persona1)
console.log(persona2)
console.log(persona3)


divEj1.innerHTML += `
<div class="col">
    <div class="card cartica">
        <img src="${persona1.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${persona1.nombre}</h5>
            <ul class="list-group">
                <li class="list-group-item">${persona1.edad}</li>
                <li class="list-group-item">${persona1.profesion}</li>
            </ul>
        </div>
    </div>
</div>

<div class="col">
    <div class="card cartica">
        <img src="${persona2.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${persona2.nombre}</h5>
            <ul class="list-group">
                <li class="list-group-item">${persona2.edad}</li>
                <li class="list-group-item">${persona2.profesion}</li>
            </ul>
        </div>
    </div>
</div>

<div class="col">
    <div class="card cartica">
        <img src="${persona3.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${persona3.nombre}</h5>
            <ul class="list-group">
                <li class="list-group-item">${persona3.edad}</li>
                <li class="list-group-item">${persona3.profesion}</li>
            </ul>
        </div>
    </div>
</div>
`





// EJERCICIO 2


console.log("EJERCICIO2")

class Vehiculo  {
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    } 
    arrancar(){
        return `El vehiculo ${this.marca} ${this.modelo} comenzo a arrancar`
    }
    detener(){
        return `El vehiculo ${this.marca} ${this.modelo} se detiene`
    }
    
}




class Coche extends Vehiculo    {
    constructor(marca, modelo, velocidad){
        super(marca, modelo)
        this.velocidad = velocidad
    }
    acelerar(){
        return `El vehiculo ${this.marca} ${this.modelo} alcanza una velocidad de ${this.velocidad}`
    }
    
}


let vehiculo1 = new Vehiculo("Toyota", "Yaris")
vehiculo1.arrancar()
vehiculo1.detener()

let vehiculo2 = new Coche("Toyota", "Corsa", "160kmh")
vehiculo2.acelerar()

let divEj2 = document.querySelector("#ejercicio2")
divEj2.innerHTML += `
<button type="button" class="btn btnArrancar" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content=" ${vehiculo1.arrancar()}">
    arrancar
</button>
<button type="button" class="btn btnArrancar" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content=" ${vehiculo1.detener()}">
    detener
</button>
<button type="button" class="btn btnArrancar" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content=" ${vehiculo2.acelerar()}">
    acelerar
</button>

`

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))




//EJERCICIO 3 & 6


console.log("EJERCICIO 3-6")


class CuentaBancaria    {
    #saldo = 0

    constructor(saldo){
        this.#saldo = saldo
    }
    depositar(valor){
        this.#saldo = this.#saldo + valor
        console.log(`has depositado ${valor} a tu cuenta`)
    }
    retirar(valor){
        this.#saldo = this.#saldo - valor
        console.log(`has retirado ${valor} a tu cuenta`)
    }
}

let cuenta = new CuentaBancaria(200000)


console.log(cuenta)


cuenta.depositar(50000)
cuenta.retirar(30000)

console.log(cuenta)
// console.log(`su saldo total es de ${cuenta}`)


//EJERCICIO 4


console.log("EJERCICIO 4")


class Figura    {
    constructor(){
    }
        calcularArea(){

    }
}

class Circulo  extends Figura {
    constructor(radio){
    super()
    this.radio = radio
    }
    calcularArea() {
        console.log(`el area del circulo es ${Math.PI * this.radio}`)
    }
}

class Rectangulo extends Figura  {
    constructor(base, altura){
    super()
    this.base = base
    this.altura = altura
    }
    calcularArea() {
        console.log(`el area del rectangulo es ${this.base * this.altura}`)
    }
} 

//  Instancias y Calcular el Área

const circuloCalculo = new Circulo(10)
console.log(circuloCalculo.calcularArea())
const rectanguloCalculo = new Rectangulo(5, 10)
console.log(rectanguloCalculo.calcularArea())





// EJERCICIO 5



console.log("EJERCICIO 5")


class Direccion {
    constructor(calle, ciudad, codigoPostal){
        this.calle = calle
        this.ciudad = ciudad
        this.codigoPostal = codigoPostal
    }
}

class Persona   {
    constructor(direccion){
        this.direccion = direccion
    }
}

const direccionsita = new Direccion(1234, 'Bogotin', 1241583458)
console.log(direccionsita)
const personita = new Persona(direccionsita.calle)
console.log(personita)
console.log("me funciona la istancia sola pero no cuando la uno con un console.log tipo string")
console.log(`Cosme Fulanito vive por la calle ${personita}`)

//     unaDireccion() {
//         console.log(`la direccion de Cosme Fulanito es: ${this.calle}, ciudad: ${this.ciudad}, codigo postal:${this.codigoPostal},`)
//     }
// }

// class Persona extends LaDireccion {
//     constructor(calle, ciudad, codigoPostal, direccion) {
//         super()
//         this.calle = calle
//         this.ciudad = ciudad
//         this.codigoPostal = codigoPostal
//         this.direccion = direccion
//     }
// } 

// const adress  = new LaDireccion(120, 'Bogota', 110111)
// const direccionsita = new Persona( adress.unaDireccion(), 'Cll 120 #7')
// console.log(direccionsita)






// EJERCICIO 7


console.log("EJERCICIO 7")


class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    hablar() {

    }
}

class Perro extends Animal  {
    constructor(nombre){
        super(nombre)
    }
    hablar(){
        console.log(`el Perro ${this.nombre} hace GUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU`)
    }
}

class Gato extends Animal   {
    constructor(nombre){
        super(nombre)
    }
    hablar(){
        console.log(`el Gato ${this.nombre} hace "MIAUAUAIUAIUAIAU MIAAAAAAAAAAAAAAAAAU`)
    }
}

const laika = new Perro('Laika')
laika.hablar()
const michi = new Gato('Michi Master')
michi.hablar()