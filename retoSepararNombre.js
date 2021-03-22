let nombre1="ARQ2555: Sara Bel-Sun";
let nombre2="ARQ2556: Nodin Chavdri";
let nombre3="ARQ2557: Finn";

function separarNombre(nombre){
    
    let nombreUnico=nombre.split(":");
    nombreUnico=nombreUnico[1];
    return nombreUnico;
}

llamadoNombre1=separarNombre(nombre1);
llamadoNombre2=separarNombre(nombre2);
llamadoNombre3=separarNombre(nombre3);

console.log(`Los nombres requeridos son: ${llamadoNombre1},${llamadoNombre2} y ${llamadoNombre3}`);