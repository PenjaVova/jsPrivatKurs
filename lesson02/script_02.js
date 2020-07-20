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
от себя:  для map(x2) и filter - одна универсальная функция, перебирает массив на вход принимает массив и функцию-логику;

*/
// перебор массива для map(x2) и filter
function universal (arr, fn) {
    let rezultArr = [];
    for (let index = 0; index < arr.length; index++) {
        rezultArr.push(fn(arr[index]));
    }
    return rezultArr;
}

// 1
function x2 (elem){
    return elem * 2;
}
// 2 
function filter (elem){
    return elem % 2;
}

// 3 дальше (в some/every/reduce) дублирую код с перебором массива
function some (arr, fn){

    if (!arr.length) return false;
    
    let isOk = false;

    for (let index = 0; index < arr.length; index++) {
        if(fn(arr[index])) isOk = true;
    }

    return isOk;
}

function every (arr, fn){

    if (!arr.length) return false;
    
    let isOk = true;

    for (let index = 0; index < arr.length; index++) {
        if(!fn(arr[index])) {
            isOk = false;
            break;
        }
    }

    return isOk;
}

function reduce(arr, fn){

    if(!arr.length) return null;

    let rez = arr[0];

    for (let i = 1; i < arr.length; i++) {
        rez = fn(rez,arr[i]);
    }

    return rez;
}

//------------------------------------------------
let arr = [9,8,7,6,5,4,3,2,1];
let arrChetniy  = [8,6,4,2]; 
let arrNeChetniy  = [9,7,5,3,1]; 
//------------------------------------------------

let arr_x2 = universal (arr,x2); //имя arr_x2 читабельней чем arrX2 )

console.log('arr_x2 = ' + arr_x2.toString());
//------------------------------------------------
let arrFiltered = universal (arr,filter);     

console.log('arrFiltered = ' + arrFiltered.toString());

//------------------------------------------------

let rezSome= some (arrNeChetniy, function(elem){
    return (elem % 2);
})
console.log('rez some() = ' + rezSome);

//------------------------------------------------

let rezEvery= every (arrChetniy, function(elem){
    return (elem % 2);
})
console.log('rez every() = ' + rezEvery);
//------------------------------------------------
let rezReduce= reduce (arrChetniy, function(numberA, numberB){
    return (numberA + numberB);
})
console.log('rez reduce() = ' + rezReduce);