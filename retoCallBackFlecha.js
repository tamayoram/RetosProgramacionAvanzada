
// function robarPlanos(idPlano,despegar){

//     if(idPlano>0 && idPlano<=10){

//         let mensaje="El plano obtenido fue " + idPlano;
//         despegar (null,mensaje);
//     }
//     else{

//         let error="El plano obtenido no es valido";
//         despegar (error,null);
//     }

// }

let robarPlanos=(idPlano,despegar)=>{

    if(idPlano>0 && idPlano<=10){

        let mensaje="El plano obtenido fue " + idPlano;
        despegar (null,mensaje);
    }
    else{

        let error="El plano obtenido no es valido";
        despegar (error,null);
    }


}

robarPlanos(10,(mensajeError,mensajeExito)=>{
    
    if(mensajeExito){

        console.log(mensajeExito);
        console.log("Momento de despegar");

    }else{

        console.log(mensajeError);
        console.log("No es posible despegar");

    }
        

});








