// function showHello() {
//     alert('hello')
// }

// showHello();



// function showResult(param1, param2) {
//     let result = param1 * param2;
//     alert(result);
// }

// showResult(10, 30);



// function showResult(param1, param2) {
//     let result = param1 * param2;
//     alert(result);
// }

// let a = 10;
// let b = 50;

// showResult(a, a*b);
// showResult(b - a, a + b);



// function showResult(param1, param2) {
//     if(param1 == 40) {
//         alert('alert')
//     }

//     let result = param1 * param2;
//     alert(result);
// }

// let a = 10;
// let b = 50;

// showResult(a, a*b);
// showResult(b - a, a + b);



// function showResult(param1, param2) {
//     if(param1 == 40) {
//         return param1;
//     }

//     let result = param1 * param2;
//     alert(result);
// }

// let a = 10;
// let b = 50;
// let result = showResult(b - a, a + b);
// console.log(result);


// let c = 3;

// function showResult(param1, param2) {
//     let result = param1 * param2;
//     function showResult2(a) {
//         return result * param2 * a * c;
//     }
//     result = showResult2(2);
//     return result;
// }

// document.write(showResult(10, 30));



// let showResult = function(param1, param2) {
//     console.log(param1);
// };

// showResult(10, 20);



// (function(param1, param2) {
//     console.log(param1);
// }   (10, 20));



// Рекурсивный вызов функции //

// function showFactorial(x) {
//     if(x <= 1) {
//         return 1;
//     }

//     return x * showFactorial(x-1);
// }

// console.log(showFactorial(3)); // 1*2*3*4*5*6*7*8*9*10 = ??



// let f = function fact(x) {
//     if(x <= 1) {
//         return 1;
//     }

//     return x * fact(x - 1);
// };

// document.write(f(4));



// let f = function fact(x) {
//     if(x <= 1) {
//         return 1;
//     }

//     return x * fact(x - 1);
// };

// document.write('<p class="result">' + f(4) + '</p>');



// function showResult(param1 = 10, param2 = 20) {
//     let result = param1 * param2;
//     return result;
// };

// alert(showResult(1, 2));



function showResult() {
    let result = arguments[0] * arguments[1];
    return result;
};

document.write('<p class="result">' + showResult(777, 2, 63, 23, 25, 34, 5467, 678) + '</p>');