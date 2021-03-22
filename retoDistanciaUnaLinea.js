let coordenadaInicialX=5;
let coordenadaFinalX=-124;

let coordenadaInicialY=3;
let coordenadaFinalY=-45;

function calcularDistancia(xinicial,xfinal,yinicial,yfinal){

    distancia=Math.sqrt(Math.pow((xfinal-xinicial),2)+Math.pow((yfinal-yinicial),2)).toFixed(2);
    return distancia;
}

let llamadoDistancia=calcularDistancia(coordenadaInicialX,coordenadaFinalX,coordenadaInicialY,coordenadaFinalY);

console.log(`La distancia es ${llamadoDistancia}`);