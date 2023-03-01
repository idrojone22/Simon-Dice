let colores = [amarillo, verde, rojo, azul]
let orden = [] // -> array on es guarda el orden en el que s'han iluminat els colors
let comprobar = [] // array on es guarde els cuadrats que em presioant 
let numeroNivell = 1
let contador = 0

colores.forEach(e => {
    e.addEventListener('click', () => {
        e.style.filter = 'brightness(200%)'
        setTimeout(() => {
            e.style.filter = 'brightness(100%)' 
        },500)
        contador++
        comprobar.push(e);
        if (contador == numeroNivell) {
            console.log(orden)
            console.log(comprobar)
            comprobarCartes()
        }
    })
})

boton_jugar.addEventListener('click', () => {
    randomColors()
})

function random() {
    let random = Math.floor(Math.random() * 4) // ens dona un numero random
    return random
}

function randomColors() {
    let cont = 0
    let interval = setInterval(() => { // interval per a que tarde 1 segon en tornar a executar el códic 
        let numero = random()
        colores[numero].style.filter = 'brightness(200%)' // utilitzem el numero random per iluminar el color
        orden.push(colores[numero]) // calvem el numero iluminat en el array 
        setTimeout(() => {
            colores[numero].style.filter = 'brightness(100%)'  // apaguem el botó
        },500)
        cont++;
        if (cont == numeroNivell) {
            clearInterval(interval)
        }
    }, 1000)
}       

function comprobarCartes(orden, comprobar) {
    let verdadero = true
    for (let i = 0; i < orden; i++) {
        if (orden[i] !== comprobar[i]) {
            setTimeout(() => {
                alert('Has perdido');
                boton_jugar.innerHTML = 'Intentalo de nuevo';
            }, 1000)
            contador = 0;
            verdadero = false
        };
    };
    verdadero ? setTimeout(() => {alert('Has perdido'); boton_jugar.innerHTML = 'Intentalo de nuevo'}, 1000) : null
};



// setTimeout(() => {
//     alert('Has perdido');
//     boton_jugar.innerHTML = 'Intentalo de nuevo';
// }, 1000);
// contador = 0;





    // if (JSON.stringify(orden) === JSON.stringify(comprobar)) {
    //     numeroNivell++
    //     setTimeout(() => {
    //         alert('Has ganado')
    //         boton_jugar.innerHTML = 'Siguiente Nivel'
    //         nivel.innerHTML = `${numeroNivell}`
    //     }, 1000)
    //     contador = 0
    // } else {
    //     setTimeout(() => {
    //         alert('Has perdido')
    //         boton_jugar.innerHTML = 'Intentalo de nuevo'
    //     }, 1000)
    //     contador = 0
    // }



// function arraysSonIguales(array1, array2) {
//     if (array1.length !== array2.length) {
//       return false; // si los arrays tienen distinta longitud, no son iguales
//     }
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false; // si algún elemento no es igual en ambos arrays, no son iguales
//       }
//     }
//     return true; // si llegamos hasta aquí, los arrays son iguales
//   }