function sumar(x,y, mensaje){
let suma = x + y;
mensaje('oiko');
return suma;
}
/*
function mensaje(texto){
    console.log(texto);
}
console.log(sumar(1, 2, mensaje));*/

/*
console.log(sumar(1, 2, function(texto){
    console.log(texto);
}));*/

console.log(sumar(1, 2, (texto)=>{
console.log(texto);
}
));
/*console.log(sumar(1, 2, texto=> texto));
esta funcion es para retornar texto*/
