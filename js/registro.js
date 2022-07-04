
// almaceno los datos
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
    // si existen los datos que ingresa desde el input
    if(nombreSignup.value && apellidoSignup.value && edadSignup.value && emailSignup.value && passwordSignup.value){
        // se alamcenan en el obj
        let users = {
            nombre:nombreSignup.value,
            apellido:apellidoSignup.value,
            edad:edadSignup.value,
            email:emailSignup.value,
            password:passwordSignup.value
        }
        // hago push del obj de datos al array
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
// verifico si existen el value del input en la parte login

    if(emailLogin.value && passwordLogin.value){
        // traigo los datos del localStorage con la clave y los parseo
        const getParse =  JSON.parse(localStorage.getItem("usuarios"))
        //itero el obj y comparo los datos que se quedaron almacenados con los que pido en el login(solo el email y pass)

        getParse.find( usr => {
            //guardo el nombre en la variable para mostrarla en el DOM
            nombre+= usr.nombre; 

            // acceso condicional a un objeto

            if(usr?.email === emailLogin.value && usr?.password === passwordLogin.value){

                formLogin.style.display = "none";
                registro.style.display = "none"
    
                const bienvenida = document.querySelector(".bienvenida")
                bienvenida.innerText = `Un gusto tenerte con nosotros! ${nombre}`
                
                btnMenu.style.display = "none"
                // el logo para demostrar que ya esta logueado el usuario, y su agenda
                logoUser.style.display = "flex"
    
                btnHome.innerHTML = `<button id ="abrir_modal_home" class="btn_comenzar"><a href="#servicios">Ver servicios</a></button>`
                
                // si esta logueado puede ver los planes
                cardPlanes.style.display = "flex"
            }

            else{
                mensajeAlerta("Los datos son incorrectos", "Error")
            }
        });
    }
    // si no se ha logueado no puede ver los planes
    else if(!emailLogin.value || !passwordLogin.value){
        mensajeAlerta("Completa el formulario para acceder", "Error")
    }
}

formLogin.addEventListener("submit", login)
