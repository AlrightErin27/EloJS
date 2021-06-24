//------------------Sum of a Range------------------//
//range fxn that takes 2 arguments: start, end
//returns arr of from start to end

function range(start, end) {
  arr = [];
  for (let i = start; i < end + 1; i++) arr.push(i);
  return arr;
}
//console.log(range(23, 33));

//next-> make sum fxn w/input arr of #s
//returns the sum of all the #s

function sum(arr) {
  let total = 0;
  for (let val of arr) {
    total += val;
  }
  return total;
}
//console.log(sum([0, 4, 4, 2]));

//next -> add third argument to range fxn called step
// function range(start, end) {
//   arr = [];
//   for (let i = start; i < end + 1; i++) arr.push(i);
//   return arr;
// }
function rangeWithStep(start, end, step = start < end ? 1 : -1) {
  let arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) arr.push(i);
  } else {
    for (let i = start; i >= end; i += step) arr.push(i);
  }
  return arr;
}

//console.log(rangeWithStep(-3, 30, 3));

//------------------Reverse Array------------------//
//make 2 fxn: reverseArr & reverseArrInPlace
////reverseArr input = arr & returns newArr in reverse order || CHECK
////reverseArrInPlace = input = arr & returns the input but modified, not an entirely new array

function reverseArr(inputArr) {
  newArr = [];
  for (let i = inputArr.length - 1; i >= 0; i--) {
    //console.log(inputArr[i]);
    newArr.push(inputArr[i]);
  }
  return newArr;
}
//console.log(reverseArr([0, 1, 3, 5, 1]));

function reverseArrInPlace(inputArr) {
  const arrLen = inputArr.length;
  for (let i = 0; i < Math.floor(arrLen / 2); i++) {
    let oldArr = inputArr[i];
    inputArr[i] = inputArr[arrLen - 1 - i];
    inputArr[arrLen - 1 - i] = oldArr;
  }
  return inputArr;
}
//console.log(reverseArrInPlace([1, 2, 3]));

//------------------A List------------------//
//fxn arrayToDoList that creates a structure like on pg 79 || CHECK
//input [1, 2, 3] || CHECK
//also write fxn listToArray that makes an arr from that list
//then make a helper fxn prepend w/2 inputs: element & list
//this fxn creates a new list that that adds elements to the front of the input list
//and nth which takes a num & returns the element at that specific index or undefined if there is no element there
//write a recursive fxn version of the nth

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}
//console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
//console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, list) {
  return { value, rest: list };
}
//console.log(prepend(10, prepend(20, null)));

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
//console.log(nth(arrayToList([10, 20, 30]), 1));
