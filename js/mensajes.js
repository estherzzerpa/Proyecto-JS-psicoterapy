function mensajeAlerta(mensaje, tipo){

    const alert = document.createElement("h3")
    alert.innerText = mensaje;

    if(tipo === "Error"){
        alert.style.color = "red"
    }
    if(tipo === "Succes"){
        alert.style.color = "green"
    }
    
    alert.style.position = "absolute"
    alert.style.top = "15%"
    registro.append(alert)

    setTimeout(() => {
        alert.remove()
    }, 3000);
}
