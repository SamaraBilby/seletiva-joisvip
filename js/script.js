
let form = document.querySelector('form')
let senha = document.getElementById('senha');
let email = document.getElementById('email')

/* mostrar ou ocultar senha */

document.getElementById('senha-ocultar').addEventListener('click', ()=> {
    if(senha.type == "password") {
        senha.focus()
    document.getElementById('senha-ocultar').style.display = "none";
    document.getElementById('senha-mostrar').style.display = "inline-block";
        return senha.type = "text";
    } else {
        return senha.type = "password";
    }
});

document.getElementById('senha-mostrar').addEventListener('click', ()=> {
    if(senha.type === "text") {
        senha.focus()
    document.getElementById('senha-mostrar').style.display = "none";
    document.getElementById('senha-ocultar').style.display = "inline-block";
        return senha.type = "password";
    } else {
        return senha.type = "text";
    }
    
});

/* validação login */


    