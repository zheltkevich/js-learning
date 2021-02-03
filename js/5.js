// let arr = [];
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //
// let a = 'script';
// let arr3 = [1, 2, 3, 4, a, 6, 7, 8, [1, 2, 3], 10];

// let arr4 = [a + 10, a - 5];
// //

// console.log(arr4);



// let arr3 = new Array(); // создаем эвивалент пустого массива []
// let arr4 = new Array(5); // формируем пустой массив с определенной длиной 5 []
// let arr5 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // создаем массив со значениями



// let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let i = 1; // создаем переменную 
// arr[i] = 'Ячейка №1'; // меняем значение ячейки массива с индексом 1
// alert(arr[1]); // обращаемся к ячейке массива с индексом 1



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 5;

// arr[i] = 'hello';
// arr[10] = 11;
// arr[11] = 12;
// arr['hello'] = 'world';

// alert(arr.length);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 5;

// arr[i] = 'hello';
// arr[10] = 11;
// arr[11] = 12;
// arr[54] = 'ololo';
// arr[100] = 100;

// alert(arr);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 5;

// arr[i] = 'hello';
// arr[10] = 11;
// arr[11] = 12;
// arr[54] = 'ololo';
// arr[100] = 100;

// for(let i = 0; i < arr.length; i++) {
//     document.write('<span class="result result--massives">' + arr[i] + '<span class="result--indexes">' + ' Индекс ячейки: ' + i + '</span>' + '</span>');
// };



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 5;

// arr[i] = 'hello';
// arr[10] = 11;
// arr[11] = 12;
// arr[54] = 'ololo';
// arr[100] = 100;

// arr['string'] = 'string-one';
// arr['string2'] = 'string-two';
// arr['string3'] = 'string-three';

// let k = Object.keys(arr);
// alert(k);
// for(let i = 0; i < k.length; i++) {
//     document.write('<span class="result result--massives">' + arr[k[i]] + '<span class="result--indexes">' + ' Индекс ячейки: ' + k[i] + '</span>' + '</span>');
// };



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 5;

// arr[i] = 'hello';
// arr[10] = 11;
// arr[11] = 12;
// arr[54] = 'ololo';

// let k = Object.keys(arr);
// alert(k);
// for(let i = 0; i < k.length; i++) {
//     document.write('<span class="result result--massives">' + arr[k[i]] + '<span class="result--indexes">' + ' Индекс ячейки: ' + k[i] + '</span>' + '</span>');
// };



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 5;

// arr[i] = 'hello';
// arr[10] = 11;
// arr[11] = 12;

// let k = Object.keys(arr);
// arr.length = 20;
// alert(arr);
// for(let i = 0; i < k.length; i++) {
//     document.write('<span class="result result--massives">' + arr[k[i]] + '<span class="result--indexes">' + ' Индекс ячейки: ' + k[i] + '</span>' + '</span>');
// };



// let arr = ['МассивЪ', 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 5;

// arr[i] = 'hello';
// arr[10] = 11;
// arr[11] = 12;

// let k = Object.keys(arr);
// arr.length = 20;
// alert(arr[0][6]);
// for(let i = 0; i < k.length; i++) {
//     document.write('<span class="result result--massives">' + arr[k[i]] + '<span class="result--indexes">' + ' Индекс ячейки: ' + k[i] + '</span>' + '</span>');
// };



let arr = ['МассивЪ', 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 5;

arr[i] = 'hello';
arr[10] = 11;
arr[11] = 12;

let k = Object.keys(arr);
let table = new Array(10);
for(let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
};

for(let row = 0; row < table.length; row++) {
    for(let col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    };
};

alert(table[5][6]);
document.write('<span class="result">' + table[5][6] + '</span>');
