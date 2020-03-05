//14.3 FUNCTION DEFAULT PARAMETER FOR NOT PROVIDED VALUES
//1
// function add(num1, num2){
//     return num1 + num2;
// }
// const total = add(28, 69);
// console.log(total);

//1 (A)...
// function add(num1, num2){
//     num2 = num2 || 0;
//     return num1 + num2;
// }
// const total = add(111,69);
// console.log(total);

// //1 (B)...
// function add(num1, num2){
//     num2 = num2 || 20;
//     return num1 + num2;
// }
// const total = add(69);
// console.log(total);

// //1 (C)...
// function add(num1, num2 = 20){
//     return num1 + num2;
// }
// const total = add(69);
// console.log(total);

//1 (D)...
function add(num1, num2 = 20){
    return num1 + num2;
}
const total = add(69, 1);
console.log(total);