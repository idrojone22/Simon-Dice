let colores = [amarillo, verde, rojo, azul];
let orden = []
let numeroNivel = 1;
console.log(colores)    

    // colores[0].style.filter = 'brightness(200%)';    per a cambiar els colors 
    // colores[1].style.filter = 'brightness(200%)';
    // colores[2].style.filter = 'brightness(200%)';
    // colores[3].style.filter = 'brightness(200%)';

function jugar() {

    for (let i = 0; i < 1; i++) {
        colores.sort( () => Math.random() - 0.5)
    }
    iluminar_carta()
}

function iluminar_carta() {
    
    colores[0].style.filter = 'brightness(200%)'

    setTimeout(() => {
        colores[0].style.filter = 'brightness(100%)'
        colores[1].style.filter = 'brightness(200%)'
    }, 1000);

    setTimeout(() => {
        colores[1].style.filter = 'brightness(100%)'
        colores[2].style.filter = 'brightness(200%)'
    }, 2000);

    setTimeout(() => {
        colores[2].style.filter = 'brightness(100%)'
        colores[3].style.filter = 'brightness(200%)'
    }, 3000);

    setTimeout(() => {
        colores[3].style.filter = 'brightness(100%)'
        apretar_colors()
    }, 4000)
} 

function apretar_colors() {
    
    colores[0].addEventListener('click', () => { 
        orden.push(colores[0])
        colores[0].style.filter = 'brightness(200%)'
        setTimeout(() => {
            colores[0].style.filter = 'brightness(100%)'
        }, 1000)
    })

    colores[1].addEventListener('click', () => { 
        orden.push(colores[1])
        colores[1].style.filter = 'brightness(200%)'
        setTimeout(() => {
            colores[1].style.filter = 'brightness(100%)'
        }, 1000)
    })
    colores[2].addEventListener('click', () => { 
        orden.push(colores[2])
        colores[2].style.filter = 'brightness(200%)'
        setTimeout(() => {
            colores[2].style.filter = 'brightness(100%)'
        }, 1000)
    })
    colores[3].addEventListener('click', () => { 
        orden.push(colores[3])
        colores[3].style.filter = 'brightness(200%)'
        setTimeout(() => {
            colores[3].style.filter = 'brightness(100%)'
            console.log(orden)
            console.log(colores)
            comparar_colors()
        }, 1000)
    })
}

function comparar_colors() {

    let verdadero = true

   for (let i = 0; i < colores.length; i++) {
        if (colores[i] !== orden[i]) {
            alert('has perdido')
            verdadero = false
            break
        }
        
        if ( i === colores.length -1) {
            alert('has ganado')
            break
        }
   
    }   

    if (verdadero == false) {
        orden = []
        console.log('arriba')
        setTimeout(() => {
            iluminar_carta()
        }, 1000)
    }

    if (verdadero) {
        siguiente_nivel()
    }
}


function siguiente_nivel() {
    numeroNivel++

}