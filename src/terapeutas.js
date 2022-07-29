const url = `perfiles.json`

const terapeutasHtml = document.querySelector(".terapeutas");
const select = document.getElementById("select-terapeutas")
const clase = document.getElementsByClassName("cards")

let terapeutasArr = []

window.addEventListener("DOMContentLoaded", async ()=>{
    const data = await obtenerPerfiles(url)
    terapeutasArr = data
    printCards(terapeutasArr)
    filtrarCards(clase)
})

const obtenerPerfiles = async (url) => {
    try{
        const response = await fetch(url)
        return await response.json()
          
    }catch (error){
        alert("Error no se encontro la URL")
    }
}   
// itera por cada dato obtenido e imprime las cards
const printCards = (datos)=>{
   
    datos.forEach( items =>{ 
        generarCard(items) 
     
    });  
}
// estructura de las cards

const generarCard = (item)=>{

    const {nombre, especialidad, tipoExperiencia, imagen, descripcion, id } = item

    const divContainer = document.createElement("div")
    let div = ""
    divContainer.classList.add("cards")

    div += `
            <div class="img_name">
                <img src="./assets/${imagen}">
                <p class="title"> ${nombre}, ${tipoExperiencia}</p>
            </div>
                <p class="${tipoExperiencia}"> ${especialidad}</p>
                <p> ${descripcion}</p>
                <button class="btn_comenzar conectar" id="${id}">Contactar</button>
           
        `
    divContainer.innerHTML = div
    terapeutasHtml.appendChild(divContainer)

    terapeutasHtml.addEventListener("click",(e)=>{
        if(e.target.classList.contains("conectar")){

            noLogin("Para contactarte, antes elige el plan")
        }
    });
}
// filtrado de las cards
const filtrarCards = (selector) =>{

    select.addEventListener("change", (e)=>{

            for(let i = 0; i < selector.length; i++){
                selector[i].textContent.includes(`${e.target.value}`) || e.target.value=="All"
                ? selector[i].classList.remove("filter")
                : selector[i].classList.add("filter")
                console.log(selector[i].textContent.includes(`${e.target.value}`));
            };
    });
}