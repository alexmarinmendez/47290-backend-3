const pA = new Promise(function(resolve, reject) {
    resolve('Resuelve al valor de A')
    // reject('Error en A')
})

pA
    .then()
    .then()
    .then(function(value) {
        console.log(value)
        throw new Error('Error nuevo 1')
    })
    .then(function(value) {
        console.log(value)
        throw new Error('Error nuevo 2')
    })
    .then(null, function(err) {
        console.log(err)
    })