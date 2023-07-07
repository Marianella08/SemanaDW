const form = document.querySelector("form");
const input = document.querySelector("#hex");
const colorDiv = document.querySelector("#colors");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const hex = input.value;

    if(!isValidHex(hex)){
        alert("ingrese un código hex correcto.")
        return;
    }

    const colors = generateColors(hex);

    renderColors(colors);
});

function isValidHex(hex) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
} 

function generateColors(hex){
    const baseRgb = hexToRgb(hex);
    const colorVariations = [
        { r: -30, g: 0, b: 0 },
        { r: 0, g: -30, b: 0 },
        { r: 0, g: 0, b: -30 },
        { r: 30, g: 0, b: 0 },
        { r: 0, g: 30, b: 0 },
        { r: 0, g: 0, b: 30 },
    ];

    const colors = colorVariations.map((variation) =>{
        return{
            r:Math.min(225, Math.max(0, baseRgb.r + variation.r)),
            g:Math.min(225, Math.max(0, baseRgb.g + variation.g)),
            b:Math.min(225, Math.max(0, baseRgb.b + variation.b)),
        }
    });

    return colors;
}

