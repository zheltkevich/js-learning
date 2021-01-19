// 30
// let a = 10;
// let b = 20;

// 1,2,3 Infinity -Infinity 'string' => TRUE
// 0 -0 null '' NaN Undefined => FALSE



/* ===== Условие if ===== */


// let c = 0;

// if(a > 0) {
//     if(b < 25) {
//         if(c == 0) {
//             c = a + b;
//             alert(c);
//         }
//     }
// }

// alert(c);



/* ===== Условие if, else, else if ===== */

// if(a) {
//     if(a > 10) {
//         alert('a > 10');
//     }
//     else {
//         alert('else');
//     }
// };


// if(a > 10) {
//     console.log('a > 10');
// }
// else if(a < 10) {
//     console.log('a < 10');
// }
// else if(a == 0) {
//     console.log('a == 0');
// }
// else {
//     console.log('else');
// }


// switch(a + b) {
//     case 10:
//         alert('hello 10');
//         break;
//     case 30:
//         alert('hello 30');
//         break;
//     default:
//         document.write('default');
//         break;
// }


// if((a + b) === 10) {
//     alert('hello 10');
// }
// else if((a + b) === 30) {
//     alert('hello 30')
// }
// else {
//     document.write('default');
// }



/* ===== Цикл while / do while ===== */


// let count = 0;

// while(count < 10) {
//     console.log(count);
//     count++;
// }


// let c = 2;
// let i = 0;

// do {
//     c = c * 2;
//     i++;
// }
// while(i < 9);
// console.log(c);



/* ===== Цикл for ===== */


// let c = 2

// // for(let i = 0; i < 9; i++) {
// //     c = c * 2;
// //     console.log(i);
// // }
// // console.log(c);


// let d = 2
// let i = 0;

// for(; i < 9; i++) {
//     d = d * 2;
//     console.log(i);
//     if(i == 5) {
//         break;
//     }
// }
// console.log(d);


// let d = 2
// let i = 0;

// for(; i < 10; i++) {
//     if(i == 5) {
//         continue;
//     }
//     console.log(i);
// }