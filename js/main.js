
// Funciones Para elegir el plan y al terapeuta

// Al elegir el plan, se pinta en el dom los perfiles que estan asociados a ese plan
const perfilDisponible = (value) => {
    // para que no se repitan el contenido del html
        eliminarHTML()

        perfiles.filter( perfil => {

        if(value === perfil.yearExperiencia){

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

            // objeto donde guardo los datos para el html

            const cardObj = {
                perfil:perfil.nombrePerfil,
                especialidad:perfil.especialidad,
                experiencia:perfil.yearExperiencia,
                id:idTerapeuta, 
                cantidad:1
            }

            btnElegir.addEventListener("click", () => {         
                agenda.push(cardObj)
                elegirTerapeuta(agenda)
                console.log(agenda)
            });
        }

        btnCerrar.addEventListener("click", () => {
            cardPerfiles.style.display = "none"
        });
    });
}
// al elegir el terapeuta se almacena en el local storage 
function elegirTerapeuta(agendaObj){
    eliminarHTML()
    const citaStrg = JSON.stringify(agendaObj)

    localStorage.setItem("citas", citaStrg)

    const parseCita = JSON.parse(localStorage.getItem("citas"))

    // si ya esta almacenada
    // le deja un mensaje al usuario
    if(parseCita){

        cardPerfiles.innerText = "A sido reservada la cita con exito, Revisa tu agenda"

        setTimeout(() => {
            cardPerfiles.style.display = "none"
        }, 3000);
    }
    pintarAgenda(parseCita);
}
// Aca el usuario ve su agenda 
const pintarAgenda = (cita) => { 

    let div = document.createElement("div")
    div.innerHTML = ""

    cita.forEach(card => {
        // spread operator
        const {perfil, especialidad, experiencia, id} = card;
        
        div.innerHTML =  `<p class="style_agenda">Tu cita con ${perfil} - ${especialidad} - ${experiencia}</p> 
        <button class="btn_eliminar" id="${id}">Cancelar</button>`
        div.classList.add("style_agenda")
        agendaHtml.appendChild(div);

    });
}

const eliminarHTML = () => {

    while(cardPerfiles.firstChild){
        cardPerfiles.removeChild(cardPerfiles.firstChild)
    }
}








