let objA = {
    nombre:'mario',
    edad:22
}
//el objeto b es la referencia del objeto a , es la copia al modificar el b modifica el a o vice versa 
//console.log(objA);
//let objB = objA;
//console.log(objB);
let objB= Object.assign({},objA);
//es esta sentencia no afecta el objeto a y le permite modificar si afectar al objeto a
objB.nombre= 'antonio';
console.log('obj A:' + JSON.stringify(objA) );
console.log('obj B:' + JSON.stringify(objB) );