let btnLogin = document.querySelector("#boton")

let dataUsuario = { correo: "diego@noentiende.com", pass: '123' }

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    let regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let validaFormulario = true
    let correoInput = e.target.iCorreo.value

    if (e.target.iCorreo.value == '') {
        alert("Acuerdate del correo pajuo") 
        e.target.iCorreo.classList.add('border', 'border-danger')
        validaFormulario = false
    }

    if (e.target.iPassword.value == '') {
        alert("la contraseña, de seguro es una vaina como 123")
        e.target.iPassword.classList.add('border', 'border-danger')
        validaFormulario = false

    }

    if(validaFormulario) {
        e.target.iCorreo.classList.remove('border-danger')
        e.target.iCorreo.classList.add('border-success')
        e.target.iPassword.focus()

        e.target.iPassword.classList.remove('border-danger')
        e.target.iPassword.classList.add('border-success')    
        }
    
    if (correoInput != '' && e.target.iPassword.value != '') {
        if (regexCorreo.test(correoInput)) {
            if(dataUsuario.correo == correoInput) {
                if(dataUsuario.pass == e.target.iPassword.value) {
                    location.href = "index.html"
                } else {
                    alert("tu correo o contraseña son invalidas")
                }
            } else {
                alert("tu correo o contraseña son invalidas")
            }
        } else {
            alert("tu correo o contraseña son invalidas")
        }
    }
    










})



