
const form = document.querySelector('#user-login');
let senha = document.getElementById('senha');
let email = document.getElementById('email');

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



/* mensagem de err0 */
function criaDivErroLogin(){
    const erroLogin = document.createElement('div');
    erroLogin.classList.add("alerta-erro-login");
    erroLogin.textContent = "Usuário ou senha incorretos"
    divMensagemErro = document.querySelector("#erro-login");

    divMensagemErro.appendChild(erroLogin);
};

/* validação login */

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    function logar() {
        
        let usuario = email.value;
        let password = senha.value;
        
        let apagarDivMensagemErro = document.querySelector("#erro-login");
        apagarDivMensagemErro.textContent = "";


        if(usuario == 'admin@joiasvip.com' && password == "123@admin"){
            alert('Sucesso');
            location.href ="produtos.html"
        } 
        else {
            criaDivErroLogin();
        }
    }
    
    logar()  
})

