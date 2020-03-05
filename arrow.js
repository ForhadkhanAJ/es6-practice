//14.5 ARROW FUNCTION, MULTIPLE PARAMETER, FUNCTION BODY
//1(A)
// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(5);
// console.log(result);

//1(B)
//  const doubleIt = function(num){
//     return num * 2;
//  }

// const result = doubleIt(5);
// console.log(result);

//1(C)
// const doubleIt = function myFun(num){
//     return num * 2;
//  }

// const result = doubleIt(5);
// console.log(result);

//1(D), ES6 function declaration...
// const doubleIt = num=> num *2;

// const result = doubleIt(50);
// console.log(result);

// //1(E), ES6 function declaration...
// const doubleIt = num=> num *2;
// const add = (x, y) => x + y;

// const result = add(50, 90);
// console.log(result);

//1(F), ES6 function declaration...
// const give5 = () => 5;

// const result2 = give5();
// console.log(result2);

//1(G), ES6 function declaration...
const doubleIt = num=> num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(50, 90);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);