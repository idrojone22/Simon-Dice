let colores = [amarillo, verde, rojo, azul]

boton_jugar.addEventListener('click', () => {
    randomColors()
})


function randomColors() {
    colores[random()].style.filter = 'brightness(200%)' 
    setTimeout(() => {
        colores[random()].style.filter = 'brightness(100%)' 
    },1000)
}   

function random() {
    let random = Math.floor(Math.random() * 4)
    return random
}
