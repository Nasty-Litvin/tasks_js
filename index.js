// Task
// function calcSumm(oneNum, twoNum, more, less, same) {
//   let getSumm = oneNum + twoNum;

//   if (getSumm > 3) {
//     more();
//   } else if (getSumm < 3) {
//     less();
//   } else {
//     same();
//   }
// }
// function showMoreMess() {
//   console.log("сумма больше 3");
// }
// function showLessMess() {
//   console.log("сумма меньше 3");
// }
// function showSameMess() {
//   console.log("сумма равна 3");
// }
// Task
// calcSumm(1, 2, showMoreMess, showLessMess, showSameMess);
// function highAndLow(numbers) {
//   function highAndLow(numbers) {
//     let array = numbers.split(" ");
//     let arraySort = array.sort((a, b) => a - b);
//     let res = `${arraySort[arraySort.length - 1]}` + " " + `${arraySort[0]}`;
//     return res;
//   }
// }
// highAndLow("1 2 8 -2 9 25");
// Task
// function even_or_odd(number) {
//   if (number % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// even_or_odd(25);
// even_or_odd(20);
// Task
// let a = ["a", "a", "c", "b"];
// let b = ["a", "a", "b", ""];
// let ar1 = ["a", "a", "b", "c"];
// let ar2 = ["a", "a", "b", "c"];
// let res = 0;

// function checkExam(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] == array2[i]) {
//       res += 4;
//     } else if (array2[i] == "") {
//       res += 0;
//     } else {
//       res -= 1;
//     }
//   }
//   if (res < 0) {
//     return 0;
//   } else {
//     return res;
//   }
// }
// checkExam(ar1, ar2);
// console.log(checkExam(a, b));
//Task
// let a = [1, 10, 7]
// let b = [2, 3, 8, 10]

// function mergeArrays(arr1, arr2) {
//     if (arr1.length === 0 && arr2.length === 0 ) {
//     return []
//     } else {
//     let newArray = [...arr1, ...arr2].sort((a,b) => a-b)
//     console.log( [...new Set(newArray)])
// }
// }

// mergeArrays(a, b)
//Task
// let a = [1, 10, 7]
// let b = [2, 3, 8, 10]

// function mergeArrays(arr1, arr2) {
//     if (arr1.length === 0 && arr2.length === 0 ) {
//     return []
//     } else {
//     let newArray = [...arr1, ...arr2].sort((a,b) => a-b)
//     let resultArray = [];
//     for (let i = 0; i < newArray.length; i++) {
//         if (resultArray.includes(newArray[i])) {
//             continue
//         } else {
//             resultArray.push(newArray[i])
//         }
//     }
// }
// }

// mergeArrays(a, b)
