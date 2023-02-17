// Crear el sist de calendario para verif si el día actual, junto a la hora es considerada día y horario
const calOfi = (anio, mes,dia) => {

}
const diaSem= new Date (2023, 1, 13).getDay();
if (diaSem >= 1 && diaSem <=5){
    console.log('Hoy es día laboral');
} else {
    console.log('Estamos en fin de semana');
}


// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// Usar reucursion

const valores = [true, false, false, true, false];
const contar = valores.filter((value) => value).length;
console.log(contar);
// de manera recursiva
const countTrue = valores

// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion
 const maxComDiv = (num1,num2) => {
    if(num1 === 0){
        return num2;
    }
    return maxComDiv(num1,num2% num1);
} 
console.log(maxComDiv(9,3));


// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion
//separados o en array
