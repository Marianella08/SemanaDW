const carousel = document.querySelector("#imagenes")
const items = document.querySelector("#imagenes").querySelectorAll(".img")

var current = 0
function update(value) {
    if (current+value >= 0 && current+value < items.length) current += value
    var number = items[current].offsetLeft
    carousel.scrollLeft = parseInt(Math.min(Math.max(number, 0), carousel.scrollWidth))
}