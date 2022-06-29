// Se ejecuta en el index.html 

const selectTipoPlan = () =>{

    const selectPlan = document.querySelector("#plan")

    let valueSelect = selectPlan.value
       
    if(valueSelect === "Profesional"){
        descripcion.innerText =  ` ${profesional.experiencia}`
        precioCard.innerText = `$${profesional.precio}`
    }

    if(valueSelect === "Especialista"){
        descripcion.innerText =  ` ${especialista.experiencia}`
        precioCard.innerText = `$${especialista.precio}`
    }
    
    else if(valueSelect === "Experto"){
        descripcion.innerText =  ` ${experto.experiencia}`
        precioCard.innerText = `$${experto.precio}`
    }
        acaDescripcion.appendChild(descripcion)
        acaDescripcion.appendChild(precioCard)

        btn.addEventListener("click", () => {
            perfilDisponible(valueSelect)
        });
}

function cardPlan (){
    btn.innerText = `Elegir`
    btn.classList.add("btn_comenzar")
    cardContent.appendChild(btn)
}

cardPlan()