
const urlPerfiles = `perfiles.json`

const selectPlan = document.querySelector("#plan")
const valueSelect= selectPlan.value

const selectTipoPlan = () =>{

    selectPlan.addEventListener("change", (e) => {

        if(e.target.value === "Profesional"){
            descripcion.innerText =  ` ${profesional.experiencia}`
            precioCard.innerText = `$${profesional.precio}`
        }
        else if(e.target.value === "Especialista"){
            descripcion.innerText =  ` ${especialista.experiencia}`
            precioCard.innerText = `$${especialista.precio}`
        } 
        else{
            descripcion.innerText =  ` ${experto.experiencia}`
            precioCard.innerText = `$${experto.precio}`
        }
        
        acaDescripcion.appendChild(descripcion)
        acaDescripcion.appendChild(precioCard)    

    })
}

selectTipoPlan()

btn.addEventListener("click", () => {

    const obtenerDatos = (urlPerfiles)=>{
        fetch(urlPerfiles)
        .then((respuesta) => respuesta.json())
        .then((data)=>{
            data.forEach( datosDelfetch => {
              return  perfilDisponible(valueSelect, datosDelfetch)
            
            });
        })

        .catch((err)=>{

            alerta("No se encontro el resultado", "Error")
            return err
        });
    }

  obtenerDatos(urlPerfiles)

});

function cardPlan (){
    btn.innerText = `Elegir`
    btn.classList.add("btn_comenzar")
    cardContent.appendChild(btn)
}

cardPlan()