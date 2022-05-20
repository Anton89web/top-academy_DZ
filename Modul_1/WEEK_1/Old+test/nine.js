
let result = 0;
module.exports = (number) => { 
    while (number) {
    result *= 10;
    result += number % 10;
    number = Math.floor(number / 10);
}
    return result;
}
// console.log(number);
// console.log(typeof(result));


// var number = 123456789, result = 0;
// while (number) {
//     result *= 10;
//     result += number % 10;
//     number = Math.floor(number / 10);
// }
 
// console.log(result);
// console.log(typeof(result));


