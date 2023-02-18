// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos



// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

const propArea = (pais,area) => {
    const areaTierra = 510065284702000;
    const porcentPais = (area * 100) / areaTierra;
    console.log('El área de '+pais+' equivale al '+ porcentPais.toFixed(2) +'%')
}
console.log(propArea('USA',9372610000000))



// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

const bool = (bit) =>{
    console.log();
}



// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

const chat = usuarios => { 
    if(usuarios == 0){
        console.log('`No hay nadie en linea');
    } else if(usuarios == 1){
        console.log('User1 está en linea');
    } else if(usuarios ==2){
        console.log('User1 y user 2 está en linea');
    } else if(usuarios > 2){
        let n = usuarios-1;
        console.log('User1 y '+ n + ' users más están en linea');
    } else{
        console.log('Ingresa un número positivo de usuarios');
    }
}
console.log(chat(9));
