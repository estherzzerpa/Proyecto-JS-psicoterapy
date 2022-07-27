const url = `perfiles.json`

const terapeutasHtml = document.querySelector(".terapeutas");

let terapeutasArr = []

window.addEventListener("DOMContentLoaded", async ()=>{
    const data = await obtenerPerfiles(url)
    terapeutasArr = data
    printCards(terapeutasArr)
})

const obtenerPerfiles = async (url) => {
    try{
        const response = await fetch(url)
        return await response.json()
          
    }catch (error){
        alert("Error no se encontro la URL")
    }
}   

const printCards = (datos)=>{
   
    datos.forEach( items => generarCard(items) );

}

const generarCard = (item)=>{

    const {nombre, especialidad, tipoExperiencia, imagen, descripcion, id } = item

    const divContainer = document.createElement("div")
    let div = ""
    divContainer.classList.add("cards")

    div += `
            <div class="img_name">
                <img src="./assets/${imagen}">
                <p> ${nombre}, ${tipoExperiencia}</p>
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
    })
}






