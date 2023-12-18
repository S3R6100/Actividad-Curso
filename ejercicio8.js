function largestNameOfArrayj(nameArray) {
    var largestName = '';
    for (var i = 0; i < nameArray.length; i++) {
        var name_1 = nameArray[i];
        if (name_1.length > largestName.length) {
            largestName = name_1;
        }
    }
    return largestName;
}
var heroesj = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
var heroj = largestNameOfArrayj(heroes);
console.log(hero); // Profesor Charles Xavier 
