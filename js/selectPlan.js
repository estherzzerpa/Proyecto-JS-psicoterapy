
const urlPerfiles = `../js/json/perfiles.json`

let valueSelect = "";

// Se ejecuta en el index.html 

const selectTipoPlan = () =>{

    const selectPlan = document.querySelector("#plan")
    
    valueSelect = selectPlan.value
       
    if(valueSelect === "Profesional"){
        descripcion.innerText =  ` ${profesional.experiencia}`
        precioCard.innerText = `$${profesional.precio}`
    }
    else if(valueSelect === "Especialista"){
        descripcion.innerText =  ` ${especialista.experiencia}`
        precioCard.innerText = `$${especialista.precio}`
    }    
    else{
        descripcion.innerText =  ` ${experto.experiencia}`
        precioCard.innerText = `$${experto.precio}`
    }
    
    acaDescripcion.appendChild(descripcion)
    acaDescripcion.appendChild(precioCard)    
}

btn.addEventListener("click", () => {

    const obtenerDatos = (urlPerfiles)=>{
        // let contenidoAmostrar;

        fetch(urlPerfiles)
        .then((respuesta) => respuesta.json())
        .then((data)=>{
            data.forEach( datosDelfetch => {
              return  perfilDisponible(valueSelect, datosDelfetch)
            
            });
            // cardPerfiles.innerHTML = contenidoAmostrar
        })

        .catch((err)=>{

            alerta("No se encontro el resultado", "Error")
            return err
        })

    }

  obtenerDatos(urlPerfiles)

});

function cardPlan (){
    btn.innerText = `Elegir`
    btn.classList.add("btn_comenzar")
    cardContent.appendChild(btn)
}

cardPlan()