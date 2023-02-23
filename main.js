let colores = [amarillo, verde, rojo, azul]
let orden = []

boton_jugar.addEventListener('click', () => {
    randomColors()
})

function randomColors() {
    let contador = 0

    let interval = setInterval(() => {
        let randoms = random()
        colores[randoms].style.filter = 'brightness(200%)'
        setTimeout(() => {
            colores[randoms].style.filter = 'brightness(100%)' 
        },1000)
        contador++;
        if (contador == 4) {
            clearInterval(interval)
        }
    }, 1000)
}       

function random() {
    let random = Math.floor(Math.random() * 4)
    return random
}

/*add event listener*/
let iluminar = document.querySelectorAll('span')
let contador = 0
iluminar.forEach(e => {
    e.addEventListener('click', () => {
        e.style.filter = 'brightness(200%)'
        setTimeout(() => {
            e.style.filter = 'brightness(100%)' 
        },1000)
        contador++
        if (contador == 4) {
            compararLLums()
        }

    })
})
