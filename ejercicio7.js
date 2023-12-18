function maxi(a, b, c) {
    if (a > b) {
        return (a > c) ? a : c;
    }
    if (b > c) {
        return b;
    }
    return (a > c) ? a : c;
}
var maxValue = maxi(5, 2, 6);
console.log(maxValue); // 6 
