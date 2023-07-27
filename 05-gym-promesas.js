const pA = new Promise(function(resolve, reject) {
    resolve('Resuelve al valor de A')
    // reject('Error en A')
})

pA
    .then()
    .then()
    .then(function(value) {
        console.log('1.- ', value)
    })
    .then(function(value) {
        console.log('2.- ', value)
        return { nombre: 'Alex' }
    })
    .then(function(value) {
        console.log('3.- ', value)
    })