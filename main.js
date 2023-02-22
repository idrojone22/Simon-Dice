let colores = [amarillo, verde, rojo, azul]


boton_jugar.addEventListener('click', () => {
    jugar()
})

function jugar() {  
    console.log('hola')
}
desordenar_cartes()

function desordenar_cartes() {
    let count = 0

    for (let i = 0; i < 4; i++) {
        setInterval (() => {
            let random = Math.floor(Math.random() * 4)
            console.log(random)
            colores[random].style.filter = 'brightness(200%)'
            setTimeout(() => {
                colores[random].style.filter = 'brightness(100%)'
            }, 1000)
        }, 1000)
    }    
}




