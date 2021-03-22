let secuencia=1;

while (secuencia<=200){

    if ((secuencia%3===0) && (secuencia%5===0)){
        console.log(secuencia + " Fizz Buzz")

    } else if (secuencia%3===0){
        console.log(secuencia+" Fizz")    

    } else if(secuencia%5===0){
        console.log(secuencia + " Buzz")
    } else{
        console.log(secuencia);
    }
       
    secuencia++;
}