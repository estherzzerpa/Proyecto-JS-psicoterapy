// para que no se dupliquen los elementos
const eliminarHTML = () => {
    
    while (cardPerfiles.children.length > 0){
        cardPerfiles.removeChild(cardPerfiles.firstChild)
    }
}

// funcion que pinta las cards por cada terapeuta iterado

const generarCards = (dataFetch) => {
    
    const {nombre, especialidad, tipoExperiencia, imagen, id} = dataFetch

    let divPerfiles = document.createElement("div");
    divPerfiles.classList.add("container_perfiles");

    let imgTerapeuta = document.createElement("div");
    imgTerapeuta.innerHTML = `<img src="assets/${imagen}">`

    let pDescripcion = document.createElement("p");
    pDescripcion.innerText = `Hola soy ${nombre} - ${especialidad} - ${tipoExperiencia}`

    let btnElegir =  document.createElement("button");
    btnElegir.innerHTML =`<button id="${id}" class="elegir_terapeuta">Elegir</button>`

    divPerfiles.appendChild(imgTerapeuta);
    divPerfiles.appendChild(pDescripcion);
    divPerfiles.appendChild(btnElegir);
    cardPerfiles.appendChild(btnCerrar);
    cardPerfiles.appendChild(divPerfiles);
    cardPerfiles.style.display = "flex"

    const citaStrg = JSON.stringify(dataFetch);

    localStorage.setItem("citas", citaStrg);

    const parseCita = JSON.parse(localStorage.getItem("citas"))

    // al elegir el terapeuta se almacena en el local storage 

    btnElegir.addEventListener("click", () => {         
        elegirTerapeuta(parseCita);
    });

}

const  perfilDisponible = (value, dataFetch) => {
   // el valor del select se compara con la experiecia del terapeuta y se generan las cards 

    value === dataFetch.tipoExperiencia && generarCards(dataFetch)

    btnCerrar.addEventListener("click", () => {
        eliminarHTML();        
        cardPerfiles.style.display = "none"
    })

}

// Eliminar cita 

const eliminarCita = (citaDelete) => {

    // aca despues de eliminar un segundo elemento me salta que es null citaEliminada?? no supe como resolverlo 

    // se elimina correctamente del DOM y del array

    const citaEliminada = document.getElementById(citaDelete)
    citaEliminada.remove()
    
    const eliminarDelArray = agenda.filter( c =>{

     return  c.id === citaDelete;
 
    });
    agenda.splice(eliminarDelArray, 1)

    console.log(agenda)

}

// al elegir se almacena al local storage

const  elegirTerapeuta  = (parseCita)=>{

    agenda.push(parseCita)

    // si ya esta almacenada
    // le deja un mensaje al usuario

    if(agenda){

        cardPerfiles.innerText = "La cita a sido reservada con exito, Revisa tu agenda"

        setTimeout(() => {
            cardPerfiles.innerText = ""
            cardPerfiles.style.display = "none"
        }, 2000);
    }

    pintarAgenda(agenda);
}

// Aca el usuario ve su agenda 

const pintarAgenda = (agendaCita) => { 

    let div = document.createElement("div")
    let btnEliminar = document.createElement("button")
    div.innerHTML = ""
    agendaCita.forEach(card => {
        // spread operator
        const {nombre, especialidad, tipoExperiencia, id, telefono} = card;
        
        div.innerHTML =  `<p class="style_agenda">Cita con: ${nombre}</p>
        <p class="style_agenda" > Especialidad: ${especialidad}</p>
        <p class="style_agenda"> Experiencia:  ${tipoExperiencia}</p>
        <p class="style_agenda"> Para coordinar Fecha/Hora comunicate con tu terapeuta:<strong> ${telefono}</strong></p>`
        div.classList.add("style_agenda");
        btnEliminar.innerText = "Cancelar"
        btnEliminar.classList.add("btn_eliminar")
        div.id = `${id}`
       
    });

    div.appendChild(btnEliminar)
    agendaHtml.appendChild(div);
    console.log(agendaHtml)


    // preguntar si esta seguro de eliminar o no 

    btnEliminar.addEventListener("click", ()=>{

        let alert = document.createElement("div");
        alert.classList.add("style_agenda")

        alert.innerHTML =  `<h3> Estas seguro de cancelar tu cita?</h3>
                            <div class="space">
                                <button class="btnConfirm btn-si">Si</button>
                                <button class="btn_eliminar btn-no">No</button>
                            </div>
                            `
        agendaHtml.appendChild(alert)

        agendaHtml.addEventListener("click",(e) =>{

            div.style.display = "none"
            
            if(e.target.classList.contains("btn-si")){
                alert.style.display = "none"
                eliminarCita(div.id);
            }
            else if(e.target.classList.contains("btn-no")){
                alert.style.display = "none"
                div.style.display = "flex"
            }
        })
    });
};

