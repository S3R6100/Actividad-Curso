let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5, 90 ];
let maxNumero = 0;

for (let i = 0; i < numbers.length; i++){

    if (numbers[i] >= maxNumero){
        maxNumero = numbers[i];
    }

}

console.log('El mayor es:', maxNumero);