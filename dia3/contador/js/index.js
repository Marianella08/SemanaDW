const cuenta = document.querySelector(".cuenta")

const dias = cuenta.querySelector("#dias")
const horas = cuenta.querySelector("#horas")
const minutos = cuenta.querySelector("#minutos")
const segundos = cuenta.querySelector("#segundos")

setInterval(() => {
    var difer = 1704085199999 - Date.now()
    
    const time = {
        dias    : Math.floor(difer / (1000 * 60 * 60 * 24)),
        horas   : Math.floor((difer / (1000 * 60 * 60)) % 24),
        minutos : Math.floor((difer / 1000 / 60) % 60),
        segundos : Math.floor((difer / 1000) % 60),
    };

    dias.innerHTML = time.dias
    horas.innerHTML = time.horas
    minutos.innerHTML = time.minutos
    segundos.innerHTML = time.segundos
}, 1000)