// Si no ha ingredaso, no puede ver los planes 

const noLogin = (mensaje) => {

    !emailLogin.value && !passwordLogin.value ? alerta(mensaje, "warning") :  true

}

btnAplicar.addEventListener("click", () =>{

    noLogin('Debes Registrarte para acceder a los planes')
    
});

// Slider de los tipos de planes 

const slider = ()=>{

    const arrowPrev = document.getElementById("arrow-prev");    
    const arrowNext = document.getElementById("arrow-next");
    const sliderSlide = document.querySelectorAll(".slider-slide");

    let i = 0

    document.addEventListener("click", (e) => {

        if(e.target === arrowPrev){
            e.preventDefault()

            sliderSlide[i].classList.remove("active")
            i--
            if(i < 0){
                i = sliderSlide.length -1
            }
            sliderSlide[i].classList.add("active")
        }

        if(e.target === arrowNext){
            e.preventDefault()

            sliderSlide[i].classList.remove("active")
            i++
            if(i >= sliderSlide.length){
                i = 0
            }
            sliderSlide[i].classList.add("active")
        }
    })

}
slider();