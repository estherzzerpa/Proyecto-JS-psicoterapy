
const datosRegistro = []

btnMenu.addEventListener("click", abrirModal)

btnHome.addEventListener("click", abrirModal)

btnAplicar.addEventListener("click", ()=>{
    
    if(!emailLogin.value && !passwordLogin.value ){

        let div = document.createElement("h2")
        div.innerText = "Registrate para acceder a los planes"
        div.style.color = "red"
        columnaParaMesaje.appendChild(div)

        setTimeout(() => {
            div.style.display = "none"
        }, 2000);
    }
    else{
        console.log("logueado")
    }
});

btnCerrar.addEventListener("click", () => {
    registro.style.width = "0";
    registro.style.height = "0";
});

function abrirModal(){
    registro.style.width = "100vw";
    registro.style.height = "100vh";
};

const signup = (e) => {

    e.preventDefault();

    if(nombreSignup.value && apellidoSignup.value && edadSignup.value && emailSignup.value && passwordSignup.value){

        let users = {
            nombre:nombreSignup.value,
            apellido:apellidoSignup.value,
            edad:edadSignup.value,
            email:emailSignup.value,
            password:passwordSignup.value
        }

        datosRegistro.push(users)
        
        let jsonStorage = JSON.stringify(datosRegistro)
        localStorage.setItem("usuarios", jsonStorage)

        formSignup.reset()
        formLogin.style.display = "flex"
        formSignup.style.display = "none"
    }
    else{
        mensajeAlerta("Completa el Registro", "Error")
    }
}   

btnSubmit.addEventListener("click", signup)

const login = (e) => {

    let nombre = ""

    e.preventDefault();

    if(emailLogin.value && passwordLogin.value){

        const getParse =  JSON.parse(localStorage.getItem("usuarios"))

        getParse.find( usr => {

            nombre+= usr.nombre; 

            if(usr.email === emailLogin.value && usr.password === passwordLogin.value){

                formLogin.style.display = "none";
                registro.style.display = "none"
    
                const bienvenida = document.querySelector(".bienvenida")
                bienvenida.innerText = `Un gusto tenerte con nosotros! ${nombre}`
                
                btnMenu.style.display = "none"
    
                logoUser.style.display = "flex"
    
                btnHome.innerHTML = `<button id ="abrir_modal_home" class="btn_comenzar"><a href="#servicios">Ver servicios</a></button>`

                cardPlanes.style.display = "flex"
            }
            else{
                mensajeAlerta("Los datos son incorrectos", "Error")
            }
        });
    }
    else if(!emailLogin.value || !passwordLogin.value){
        mensajeAlerta("Completa el formulario para acceder", "Error")
    }
}

formLogin.addEventListener("submit", login)
