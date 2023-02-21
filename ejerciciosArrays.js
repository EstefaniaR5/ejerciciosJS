////////////////  Encontrar el numero mas grande

const arr2 = [1, -563, 999, 0 , -1, -999];

const mayor = (arr) => {
    let max = arr[0];
    for(let cont = 0; cont <= arr.length; cont ++){
        if (max < arr[cont]){
            max = arr[cont];
        }
    }
    return max;
}
console.log('el numero más grande es: ' +mayor(arr2));

//////////////  Encontrar el numero mas pequeño
const menor = (arr) =>{
    let min = arr[0];
    for(let cont = 0; cont <= arr.length; cont ++){
        if(min > arr[cont]){
            min = arr[cont];
        } 
    }
    return min;
}
console.log('el numero más pequeño es: ' +menor(arr2));

//////////  Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];
const maxMin = (arr)=>{
    let min = arr[0];
    let max = arr[0];
    for(cont = 0; cont <= arr.length; cont++){
        if(min>arr[cont]){
            min =arr[cont]; 
        }if(max<arr[cont]){
            max =arr[cont];
        }
    }
    return 'el numero menor es: ' + min + ' y el numero mayor es: ' + max;
}
console.log(maxMin(arr2));

////////////  Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "23.5 ohms"
// Ohms >= 1
resistArr = [1, 5, 6, 3];
const sumResist = (arr) =>{
    let suma = arr[0];
    for(cont = 0; cont<=arr.length; cont++){
        suma += cont;
    }
   return suma;
} 
console.log('suma de resistores en paralelo ' +sumResist(resistArr));

// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];



// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR
arregloSecret= ["Felipe", "Fer", "Zabdiel"];
n = (arregloSecret.length);
const secret = (arregloSecret) => {
    for(let cont = 0; cont < n ;cont ++){
        console.log(arregloSecret[cont][0]); 
    }
}
secret(arregloSecret);


// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'


// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]


// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false


// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]
