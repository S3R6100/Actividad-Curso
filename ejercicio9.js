function heroesThatStartsWith(nameList, letter) {
    letter = letter.toUpperCase();
    var newNameList = [];
    for (var i = 0; i < nameList.length; i++) {
        var name_1 = nameList[i];
        if (name_1.startsWith(letter)) {
            newNameList.push(name_1);
        }
    }
    return newNameList;
}
var heroess = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
var herosWithLetterS = heroesThatStartsWith(heroess, 'S');
console.log(herosWithLetterS); // She Hulk, Spiderman
