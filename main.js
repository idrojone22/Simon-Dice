let colores = ['amarillo', 'verde', 'rojo', 'azul', 'morado', 'azul']
let orden = []
let numeroNivel = 0


function jugar() {
    boton_jugar.style.opacity = '0'

    if (numeroNivel === 0) {
        for (let i = 0; i < 4; i++) {
            orden.push(desordenar_colores())
        }
        numeroNivel++;
    } else {
        orden.push(desordenar_colores())
        numeroNivel++
    }
    donar_colors()
}

function desordenar_colores() {

    let random = Math.floor(Math.random() * 4 + 1)
    
    switch (random) {
        case 1:
            random = "amarillo"
            break
        case 2:
            random = "verde"
            break
        case 3:
            random = "rojo"
            break
        case 4:
            random = "azul"
            break
        case 5:
            random = "morado"
            break
        case 6:
            random = "naranja"
            break
    }
    return random
}

function donar_colors(num, color) {
    switch(num || color) {
        case "amarillo":
            setTimeout(() => {
                amarillo.style.filter =  "brightness(200%)"
            }, 1000)
            break
        case "verde":
            setTimeout(() => {
                verde.style.filter =  "brightness(200%)"
            }, 1000)
            break
        case "rojo":
            setTimeout(() => {
                rojo.style.filter =  "brightness(200%)"
            }, 1000)
            break
        case "azul":
            setTimeout(() => {
                azul.style.filter =  "brightness(200%)"
            }, 1000)
            break
        case "morado":
            setTimeout(() => {
                morado.style.filter =  "brightness(200%)"
            }, 1000)
            break
        case "naranja":
            setTimeout(() => {
                naranja.style.filter =  "brightness(200%)"
            }, 1000)
            break
    }
}

function donarr_colors() {
    let cont = 0
    donarr_colors(orden[cont], "", 750)
    cont++

    let interval = setInterval(() => {
        donar_colors(orden[cont], "", 750)
        cont++
        if (cont == orden.length)
        clearInterval(interval)
        comparar()
    }, 1000)
}





