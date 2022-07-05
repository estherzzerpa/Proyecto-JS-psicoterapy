
// almaceno los datos
const datosRegistro = []
// Libreria Sweet alert
const alerta = (mensaje, tipo) => {
    if(tipo === "Error"){
        Swal.fire({
            title: 'Error!',
            text: mensaje,
            icon: 'error',
            confirmButtonText: 'Entendido', 
            timer:2000, 
            timerProgressBar:true,
            toast:true
        });
    }
    else if(tipo === "Succes"){
        Swal.fire({
            title: 'En hora buena!',
            text: mensaje,
            icon: 'succes',
            confirmButtonText: 'Ok', 
            timer:2000, 
            timerProgressBar:true,
            toast:true
        });
    }
}

btnMenu.addEventListener("click", abrirModal)

btnHome.addEventListener("click", abrirModal)

// Si no ha ingredaso, no puede ver los planes 

btnAplicar.addEventListener("click", () =>{
    
    !emailLogin.value && !passwordLogin.value ? alerta('Debes Registrarte para acceder al plan', "Error") :  console.log("logueado")

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
       alerta("Completa el registro", "Error")
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

                alerta(`Bienvenido! ${nombre}, Revisa nuestros planes`, "Succes")
            }
            else{
                alerta("Los datos son incorrectos", "Error")
            }
        });
    }

    else if(!emailLogin.value || !passwordLogin.value){
        alerta("Completa el formulario para acceder", "Error")
    }
}

formLogin.addEventListener("submit", login)
