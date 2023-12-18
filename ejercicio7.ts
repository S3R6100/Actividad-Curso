function max(a: number, b: number, c: number) {
    if (a > b) {
        return (a > c) ? a : c;
    }
    if (b > c) {
        return b;
    }
    return (a > c) ? a : c;
}
var maxValue = max(5, 2, 6);
console.log(maxValue); // 6 
