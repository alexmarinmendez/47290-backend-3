const pA = new Promise(function(resolve, reject) {
    // resolve('Resuelve al valor de A')
    reject('Error en A')
})

pA.then(null, function(err) {
    console.log(err)
})

pA.catch(function(err) {
    console.log(err)
})