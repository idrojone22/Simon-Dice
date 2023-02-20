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
    
    amarillo.addEventListener('click', () => { 
        orden.push(amarillo) 
        console.log(orden)
    })

    verde.addEventListener('click', () => { 
        orden.push(verde)
        console.log(orden)
    })
    rojo.addEventListener('click', () => { 
        orden.push(rojo)
        console.log(orden)
    })
    azul.addEventListener('click', () => { 
        orden.push(azul)
        console.log(orden)
    })
}

function comparar_colors() {
    
    if (colores == orden) {
        alert('has ganado')
    } else {
        console.log('jijijija')
    }
}






