
// Funciones Para elegir el plan y el terapeuta

const perfilDisponible = (value) => {

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

    if(agenda){

        cardPerfiles.innerText = "A sido reservada la cita con exito, Revisa tu agenda"

        setTimeout(() => {
            cardPerfiles.style.display = "none"
        }, 3000);
    }

    agenda.forEach(card => {

        const {perfil, especialidad, experiencia} = card

        let btnEliminar = document.createElement("button")
        btnEliminar.innerText = "Cancelar"
        btnEliminar.classList.add("btn_eliminar")

        agendaHtml.innerText = `${perfil} ${especialidad} ${experiencia}`
        agendaHtml.classList.add("style_agenda")

        agendaHtml.appendChild(btnEliminar)

        const citaStrg = JSON.stringify(card)

        const setCita = localStorage.setItem("citas", citaStrg)

        const getCita = localStorage.getItem(setCita)

        const parseCita = JSON.parse(getCita)

        console.log(parseCita)
    });
}

const eliminarHTML = () => {

    while(cardPerfiles.firstChild){
        cardPerfiles.removeChild(cardPerfiles.firstChild)
    }
}








