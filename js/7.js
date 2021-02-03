// let date = new Date(24578245828); // можно использовать параметры
// let date2 = Date(); // нельзя использовать параметры

// console.log(date);
// document.write('<span class="result">' + date2 + '</span>');



// let date = new Date();

// let day = date.getDay();

// console.info(date.getDate());
// console.info(day);
// document.write('<span class="result">' + date + '</span>');



let date = new Date();
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let day = date.getDay(); 
let dayResult = days[day];

console.log(days[date.getDay()]);
console.log(days[day]);
document.write('<span class="result">' + dayResult + '</span>');


let year = date.getFullYear();
document.write('<span class="result">' + year + '</span>');


let hours = date.getUTCHours();
let minutes = date.getUTCMinutes();
let seconds = date.getUTCSeconds();

console.log('<span class="result">' + hours + ':' + minutes + ':' + seconds + '</span>');
document.write('<span class="result">' + hours + ':' + minutes + ':' + seconds + '</span>');

let month = date.getMonth();
let monthes = ['Янаварь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',]
let monthNow = monthes[month];

document.write('<span class="result">' + monthNow + '</span>');



let time = date.getTime(); // время в милисекундах от 1 января 1970 года
let timeZone = date.getTimezoneOffset(); // разница времени в минутах от гринвича

document.write('<span class="result result--big">' + 'Время в милисекундах от 1 января 1970 года: ' + time + '</span>');
document.write('<span class="result result--big">' + 'Разница времени в минутах от гринвича: ' + timeZone + '</span>');