/*Написать чистую функцию, эффективно переворачивающую строку задом наперёд.
Реализация функции не должна использовать циклов и рекурсии.*/
'use strict'
var string = 'Hello World';
function reverse(str) {
    return Array.from(str).reverse().join('');
}
console.log(reverse(string));























//var array = userInput.split('');
// for(var i = 0; i< vowels.length; i++){
//     var pos = 0;
//     var arr = [];
//     while (true) {
//         var found = array.indexOf(vowels[i], pos);
//         if (found == -1) break;
//         alert(found);
//         arr.push(pos);
//         console.log(arr);
//         pos = found +1;
//     }
// }
//console.log(array);
