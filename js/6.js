// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// if(3 in arr) {
//     alert('true');
// } else {
//     alert('false');
// };



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// if (Array.isArray(arr)) {
//     alert('true');
// } else {
//     alert('false');
// };



// let arr = [1,['вложенный', 'массив'], 2, 3, 4, 5, 6, 7, 8, 9, 10];
// alert(arr.join('+'));



// let arr = [1,['вложенный', 'массив'], 2, 3, 4, 5, 6, 7, 8, 9, 10];
// alert(arr.reverse());



// let arr = [10, 1, 2, 3, 4,];
// arr.sort(function(a, b) {
//     console.log(a + '|' + b);
//     return b-a;
// });
// alert(arr);



// let arr = [10, 1, 2, 3, 4,];
// let arrResult = arr.concat(5, 7, 8);
// alert(arrResult);



// let arr = [10, 1, 2, 3, 4,];
// let arrResult = arr.slice(-3);
// let arrResult2 = arr.slice(0, 2);
// let arrResult3 = arr.slice(1);
// alert(arrResult + ' | ' + arrResult2 + ' | ' + arrResult3);



// let arr = [10, 1, 2, 3, 4,];

// alert(arr.splice(2, 2));
// alert(arr.splice(2, 0, 5, 7, 9, 10));
// alert(arr);



// let arr = [10, 1, 2, 3, 4,];

// arr.push(10, 20, 30);
// alert(arr);

// arr.pop();
// alert(arr);



// let arr = [10, 1, 2, 3, 4,];

// arr.unshift(10, 20, 30);
// alert(arr);

// arr.shift();
// alert(arr);



// let arr = [10, 1, 2, 3, 4,];

// delete arr[0]; 

// alert(arr);



// let arr = [10, 1, 2, 3, 4,];

// arr.forEach(function(v, i, a) {
//     a[i] = v + 10 + ' сработало!';
// });

// alert(arr);



// let arr = [10, 1, 2, 3, 4,];

// let result = arr.map(function(x, i, a) {
//     return x*x;
// });

// alert(result);



// let arr = [10, 1, 2, 3, 4,];

// let result = arr.filter(function(x, i, a) {
//     return x < 3;
// });

// alert(result);



// let arr = [10, 1, 2, 3, 4,];

// let result = arr.every(function(x, i, a) {
//     return x < 10;
// });

// let result2 = arr.some(function(x, i, a) {
//     return x < 3;
// });

// alert(result + ' | ' + result2);



// let arr = [10, 1, 2, 3, 4,];

// let result = arr.reduce(function(x, y) {
//     return x + y;
// }, 0);

// let result2 = arr.reduceRight(function(x, y) {
//     return x - y;
// }, 0);

// alert(result + ' | ' + result2);



// let arr = [10, 1, 2, 4, 6, 2, 3, 4];

// alert(arr.indexOf(3));
// alert(arr.lastIndexOf(3));



// let arr = [10, 1, 2, 4, 6, 2, 3, 4];

// for(let key in arr) {
//     document.write(key + ' | ' + arr[key] + '<br>');
// };