const urlPerfiles = `../js/json/perfiles.json`

const eliminarHTML = () => {
    
    while (cardPerfiles.children.length > 0){
        cardPerfiles.removeChild(cardPerfiles.firstChild)
    }
}

// funcion que pinta las cards por cada terapeuta iterado

const generarCards = (dataFetch) => {
    
    const {nombre, especialidad, tipoExperiencia, imagen} = dataFetch

    let divPerfiles = document.createElement("div");
    divPerfiles.classList.add("container_perfiles");

    let imgTerapeuta = document.createElement("div");
    imgTerapeuta.innerHTML = `<img src="assets/${imagen}">`

    let pDescripcion = document.createElement("p");
    pDescripcion.innerText = `Hola soy ${nombre} - ${especialidad} - ${tipoExperiencia}`

    let btnElegir =  document.createElement("button");
    divPerfiles.id = `${nombre}123`
    btnElegir.innerHTML =`<button id="${divPerfiles.id}" class="elegir_terapeuta">Elegir</button>`

    divPerfiles.appendChild(imgTerapeuta);
    divPerfiles.appendChild(pDescripcion);
    divPerfiles.appendChild(btnElegir);
    cardPerfiles.appendChild(btnCerrar);
    cardPerfiles.appendChild(divPerfiles);
    cardPerfiles.style.display = "flex"
    

    // objeto donde guardo los datos 

    const cardObj = {
        perfil:nombre,
        especialidad:especialidad,
        experiencia:tipoExperiencia,
        id:divPerfiles.id
    };

    const citaStrg = JSON.stringify(cardObj);

    localStorage.setItem("citas", citaStrg);

    const parseCita = JSON.parse(localStorage.getItem("citas"))

    // al elegir el terapeuta se almacena en el local storage 

    btnElegir.addEventListener("click", () => {         
        elegirTerapeuta(parseCita);
    });
}

const  perfilDisponible = (value, dataFetch) => {
   
    value === dataFetch.tipoExperiencia && generarCards(dataFetch)

    btnCerrar.addEventListener("click", () => {
        eliminarHTML();        
        cardPerfiles.style.display = "none"
    })
}

// al elegir se almacena al local storage

function elegirTerapeuta(parseCita){

    agenda.push(parseCita)

    // si ya esta almacenada
    // le deja un mensaje al usuario

    if(agenda){
        console.log(agenda.length )

        cardPerfiles.innerText = "La cita a sido reservada con exito, Revisa tu agenda"

        console.log(cardPerfiles)

        setTimeout(() => {
            cardPerfiles.innerText = ""
            cardPerfiles.style.display = "none"
        }, 2000);
    }

    pintarAgenda(agenda);
}

// Aca el usuario ve su agenda 
const pintarAgenda = (agendaCita) => { 

    eliminarHTML()

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

    // preguntar si esta seguro de eliminar o no 

    btnEliminar.addEventListener("click", ()=>{
    
        let confirmDelete = prompt("Estas seguro de cancelar tu cita? escribe = 'si' o 'no'")

        confirmDelete === "si" ? eliminarCita(div.id) || confirmDelete === "no" : confirm("Genial sigue en pie")
    
    });
};

        agendaHtml.appendChild(btnEliminar)

    const citaEliminada = document.getElementById(citaDelete)
    citaEliminada.remove()
    const eliminarDelArray = agenda.filter( c =>{

        localStorage.setItem("citas", setCita)
    });

    agenda.splice(eliminarDelArray, 1)
