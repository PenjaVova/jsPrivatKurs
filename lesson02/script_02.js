/*
1. Реализовать методы массива 

function map (arr, fn) {

}

map([1,2,3,4,5], function (elem) {
   return elem * 2;
}); // [2,4,6,8,10]

2. filter

function filter (arr, fn) {

}

filter([1,2,3,4,6], function (elem) {
    return elem % 2;
}); // [1,3]
--******************************************
от себя: сделал чуть более гибко - одна универсальная функция, перебирает массив
на вход принимает массив и функцию-логику;
2 функции с логикой (*2 и %2)

*/
let arr = [9,8,7,6,5,4,3,2,1];

function x2 (elem){
    return elem * 2;
}

function filter (elem){
    return elem % 2;
}

function universal (arr, fn) {
    let rezultArr = [];
    for (let index = 0; index < arr.length; index++) {
        rezultArr.push(fn(arr[index]));
    }
    return rezultArr;
}

// 1 вызов мар/filter

let arr_x2 = universal (arr,x2); //имя arr_x2 читабельней чем arrX2 )

let arrFiltered = universal (arr,filter);     

// 2 смотрим

console.log('arr_x2 = ' + arr_x2.toString());

console.log('arrFiltered = ' + arrFiltered.toString());