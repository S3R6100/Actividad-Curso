let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

for ( let i = 0; i < numbers.length; i++){
    let evalua = numbers[i];
    
    if ((evalua % 2) == 0 ){
        console.log(evalua + ' es par');
    } else {
        console.log(evalua + ' es impar');
    }
}