// Formulario de registro

const registro = document.querySelector(".registro")
const containerHome = document.querySelector(".container_home")
const containerServicios = document.querySelector(".container_servicios")

// Sign UP
const formSignup  = document.querySelector(".form_signup")
const nombreSignup  = document.querySelector("#nombre_signup")
const apellidoSignup  = document.querySelector("#apellido_signup")
const edadSignup  = document.querySelector("#edad_signup")
const emailSignup  = document.querySelector("#email_signup")
const passwordSignup  = document.querySelector("#password_signup")

// LOGIN
const formLogin  = document.querySelector(".form_login")
const emailLogin  = document.querySelector("#email_login")
const passwordLogin  = document.querySelector("#password_login")
const logoUser  = document.querySelector(".container_user")



// BOTONES

const btnMenu = document.querySelector("#abrir_modal_menu")
const btnHome = document.querySelector("#abrir_modal_home")
const btnLogin  = document.querySelector(".login")
const btnSubmit  = document.querySelector("#submit")
const btnCerrar  = document.querySelector(".btn_cerrar")

const datosRegistro = []

btnMenu.addEventListener("click", abrirModal)

btnHome.addEventListener("click", abrirModal)

btnCerrar.addEventListener("click", () => {
    registro.style.width = "0";
    registro.style.height = "0";
});


function abrirModal(){
    registro.style.width = "100vw";
    registro.style.height = "100vh";
  
}   

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
        console.log(users)

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

        const usuario =  datosRegistro.find( usr => {

            nombre+= usr.nombre; 

            return usr.email === emailLogin.value && usr.password === passwordLogin.value;
        })

        if(usuario){


            formLogin.style.display = "none";
            registro.style.display = "none"

            const bienvenida = document.querySelector(".bienvenida")
            bienvenida.innerText = `Un gusto tenerte con nosotros! ${nombre}`
            
            btnMenu.style.display = "none"

            logoUser.style.display = "flex"

            btnHome.innerHTML = `<button id="abrir_modal_home" class="btn_comenzar"><a href="#servicios">Ver servicios</a></button>`
        }
        else{
            mensajeAlerta("Los datos son incorrectos", "Error")
        }
    }
    else if(!emailLogin.value || !passwordLogin.value){
        mensajeAlerta("Completa el formulario para acceder", "Error")
    }
}


formLogin.addEventListener("submit", login)


function mensajeAlerta(mensaje, tipo){

    const alert = document.createElement("h3")
    alert.innerText = mensaje;

    if(tipo === "Error"){
        alert.style.color = "red"
    }
    if(tipo === "Succes"){
        alert.style.color = "green"
    }
    alert.style.position = "absolute"
    alert.style.top = "15%"
    registro.append(alert)

    setTimeout(() => {
        alert.remove()
    }, 3000);
}

// Card del plan

const cardContent = document.querySelector(".card_content")
const acaDescripcion = document.querySelector(".aca_descripcion")
let btn = document.createElement("button")

// card perfiles

const cardPerfiles = document.querySelector(".card_perfiles")

const descripcion  = document.querySelector("#descripcion")
const precioCard  = document.querySelector("#precio")

const cardProfesional = document.querySelector("#profesional")
const cardEspecialista = document.querySelector("#especialista")
const cardExperto = document.querySelector("#experto")

// AGENDA

const agendaHtml = document.querySelector(".agenda_name");


const plan = []
const perfiles = []
const agenda = []

class Perfil {
    constructor(nombrePerfil, especialidad, yearExperiencia, imagen){
        this.nombrePerfil = nombrePerfil
        this.especialidad = especialidad
        this.yearExperiencia = yearExperiencia
        this.imagen = imagen
    }
}


class Planes {
    constructor(tipoPLan, precio, experiencia){
        this.tipoPLan = tipoPLan
        this.precio = precio
        this.experiencia = experiencia
    }
}

// Perfiles 

const camilaClinica = new Perfil("Camila Zapata", "Psicologia Clinica", "Especialista", "camila.png")
const camila = new Perfil("Camila Ramos", "Psicologia Clinica", "Especialista", "avatar-profesional(2).png" )

const pedroCognitivo = new Perfil("Pedro Salazar", "Psicologia Cognitiva", "Experto", "avatar-pedro.png")
const estherSocial = new Perfil("Esther Zerpa", "Psicologia Social", "Profesional","camila.png")
const estherClinico = new Perfil("Esther Lugo", "Psicologia Clinico", "Profesional", "avatar-profesional(2).png")

// Planes 

const profesional = new Planes("Profesional", 4.99, "Profesional o licenciado en psicología, con más de 2 años de experiencia.")
const especialista = new Planes("Especialista", 7.99, "Psicolog@ con más de 5 años de experiencia y especialización en psicología clínica. O psicolog@ con más de 10 años de experiencia." )
const experto = new Planes("Experto", 10.99, "Psicolog@ con más de 10 años de experiencia y maestría psicología clínica. O especialización en psicología clínica y más de 15 años de experiencia.")


plan.push(profesional, especialista, experto);
perfiles.push(camilaClinica, pedroCognitivo, estherSocial, estherClinico, camila)

const selectTipoPlan = () =>{

    const selectPlan = document.querySelector("#plan")

    let valueSelect = selectPlan.value
       
    if(valueSelect === "Profesional"){
        descripcion.innerText =  ` ${profesional.experiencia} ${valueSelect}`
        precioCard.innerText = `$${profesional.precio}`
    }

    if(valueSelect === "Especialista"){
        descripcion.innerText =  ` ${especialista.experiencia} ${valueSelect}`
        precioCard.innerText = `$${especialista.precio}`
    }
    
    else if(valueSelect === "Experto"){
        descripcion.innerText =  ` ${experto.experiencia} ${valueSelect}`
        precioCard.innerText = `$${experto.precio}`
    }
        acaDescripcion.appendChild(descripcion)
        acaDescripcion.appendChild(precioCard)

        btn.addEventListener("click", () => {
            perfilDisponible(valueSelect)
        });
    }

const perfilDisponible = (value) => {

        eliminarHTML()

        perfiles.filter( perfil => {

        if(value === perfil.yearExperiencia){

            // crear un objeto  y ese objeto guardarlo, junto con el id

            let divPerfiles = document.createElement("div")
            divPerfiles.classList.add("container_perfiles")
            let imgTerapeuta = document.createElement("div")

            imgTerapeuta.innerHTML = `<img src="assets/${perfil.imagen}">`
            let pDescripcion = document.createElement("p");
            pDescripcion.innerText = `Hola soy ${perfil.nombrePerfil} - ${perfil.especialidad} - ${perfil.yearExperiencia}`
            let btnElegir =  document.createElement("button")

            let idTerapeuta = `${perfil.nombrePerfil}123`
            btnElegir.innerHTML =`<button id="${idTerapeuta}" class="elegir_terapeuta">Elegir</button>
            `

            divPerfiles.appendChild(imgTerapeuta)
            divPerfiles.appendChild(pDescripcion)
            divPerfiles.appendChild(btnElegir)
            cardPerfiles.appendChild(btnCerrar)
            cardPerfiles.appendChild(divPerfiles)
            cardPerfiles.style.display = "flex"

            perfiles.push(imgTerapeuta)
            // console.log(perfiles.idTerapeuta)



            const cardObj = {
                perfil:perfil.nombrePerfil,
                especialidad:perfil.especialidad,
                experiencia:perfil.yearExperiencia,
                id:idTerapeuta, 
                cantidad:1
            }

            btnElegir.addEventListener("click", () => {
                    
                elegirTerapeuta(cardObj)
            })
        }

        btnCerrar.addEventListener("click", () => {
            cardPerfiles.style.display = "none"
        });
    });
}


function elegirTerapeuta(cardP){


    agenda.push(cardP)

    // if(agenda){
    //     cardPerfiles.style.display = "none"
    // }

   agenda.forEach(card => {

        const {perfil, especialidad, experiencia, id} = card

        let btnEliminar = document.createElement("button")
        btnEliminar.innerText = "Cancelar"
        btnEliminar.classList.add("btn_eliminar")

        agendaHtml.innerText = `${perfil} ${especialidad} ${experiencia}`
        agendaHtml.classList.add("style_agenda")

        agendaHtml.appendChild(btnEliminar)
   })
}




const eliminarHTML = () => {

    while(cardPerfiles.firstChild){
        cardPerfiles.removeChild(cardPerfiles.firstChild)
    }
}



function cardPlan (){
    btn.innerText = `Elegir`
    btn.classList.add("btn_comenzar")
    cardContent.appendChild(btn)
}

cardPlan()











// ANIMACION

let section = document.querySelector(".animacion");
let text = document.querySelector(".text")
let innerText = document.querySelector(".innerText")

window.addEventListener("scroll", function(){

    let value = window.scrollY;
    section.style.clipPath = `circle(${value}px at center center)`;
    text.style.left = 100 - value / 5 + "%"
    innerText.style.left = 100 - value / 5 + "%"

});






