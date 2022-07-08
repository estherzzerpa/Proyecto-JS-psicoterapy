
const urlPerfiles = `../js/json/perfiles.json`
// Funciones Para elegir el plan y al terapeuta

// Al elegir el plan, se pinta en el dom los perfiles que estan asociados a ese plan

// tendere que hacer dentro de cada then el codigo para mostrarlo en pantalla
const generarCards = (dataFetch) => {
    eliminarHTML()
    const {nombre, especialidad, tipoExperiencia, imagen} = dataFetch

    let divPerfiles = document.createElement("div")
    divPerfiles.classList.add("container_perfiles")
    let imgTerapeuta = document.createElement("div")

    imgTerapeuta.innerHTML = `<img src="assets/${imagen}">`
    let pDescripcion = document.createElement("p");
    pDescripcion.innerText = `Hola soy ${nombre} - ${especialidad} - ${tipoExperiencia}`
    let btnElegir =  document.createElement("button")

    divPerfiles.id = `${nombre}123`
    btnElegir.innerHTML =`<button id="${divPerfiles.id}" class="elegir_terapeuta">Elegir</button>
    `
    divPerfiles.appendChild(imgTerapeuta)
    divPerfiles.appendChild(pDescripcion)
    divPerfiles.appendChild(btnElegir)
    cardPerfiles.appendChild(btnCerrar)
    cardPerfiles.appendChild(divPerfiles)
    cardPerfiles.style.display = "flex"

    // objeto donde guardo los datos para el html

    const cardObj = {
        perfil:nombre,
        especialidad:especialidad,
        experiencia:tipoExperiencia,
        id:divPerfiles.id
    }

    const citaStrg = JSON.stringify(cardObj)

    localStorage.setItem("citas", citaStrg)

    const parseCita = JSON.parse(localStorage.getItem("citas"))

        // al elegir el terapeuta se almacena en el local storage 

        btnElegir.addEventListener("click", () => {         
        
            elegirTerapeuta(parseCita)
        });
}

const  perfilDisponible = (value, dataFetch) => {

    value === dataFetch.tipoExperiencia && generarCards(dataFetch)

    btnCerrar.addEventListener("click", () => {
        cardPerfiles.style.display = "none"
    });
}

// al elegir el terapeuta se almacena en el local storage 
function elegirTerapeuta(parseCita){
    agenda.push(parseCita)
    // si ya esta almacenada
    // le deja un mensaje al usuario
    if(agenda){

        cardPerfiles.innerText = "A sido reservada la cita con exito, Revisa tu agenda"

        setTimeout(() => {
            cardPerfiles.style.display = "none"
        }, 3000);
    }
    pintarAgenda(agenda);
}

// Aca el usuario ve su agenda 
const pintarAgenda = (agendaCita) => { 

    console.log(agendaCita)

    let div = document.createElement("div")
    let btnEliminar = document.createElement("button")
    div.innerHTML = ""

    agendaCita.forEach(card => {
        // spread operator
        const {perfil, especialidad, experiencia, id} = card;
        
        div.innerHTML =  `<p class="style_agenda">Tu cita con ${perfil} - ${especialidad} - ${experiencia}</p>`
        div.classList.add("style_agenda");
        btnEliminar.innerText= "Cancelar"
        btnEliminar.classList.add("btn_eliminar")
        div.id = `${id}`
        div.appendChild(btnEliminar)
        agendaHtml.appendChild(div);
    });

    btnEliminar.addEventListener("click", ()=>{
    
    
        let siOno = prompt("Estas seguro de eliminar? escribe = 'si' o 'no'")

        if(siOno === "si"){
            eliminarCita(div.id)
        }
        else if(siOno === "no"){
            confirm("Genial sigue en pie")
        }
    });
}



function eliminarCita(citaDelete) {

    const citaEliminada = document.getElementById(citaDelete)
    citaEliminada.remove()
    const eliminarDelArray = agenda.filter( c =>{

     return pregunta = c.id === citaDelete;
 
    });

    agenda.splice(eliminarDelArray, 1)


}

const eliminarHTML = () => {

    while(cardPerfiles.firstChild){

       cardPerfiles.removeChild(cardPerfiles.firstChild)
    }
}








