const testimonios = document.querySelectorAll(".testimonio")

var actual = 0
function actualizar(transitions) {
    testimonios.forEach((elemento, index) => {
        elemento.style.transform = "translate("+ ( (index - actual) * 150) +"vw ,"+ (index * -400) +"px)"
        if (transitions == true) elemento.style.transition = "transform 1s"
    })
    actual += 1
    if (actual >= testimonios.length) actual = 0
}
actualizar(false)

setInterval(() => {
    actualizar(true);
}, 3000)