function getCommonElements(array1, array2) {
    const commoneElements = [];

      for (const element of array1) {
    if (array2.includes(element)) {
      commoneElements.push(element);

      console.log(`${element} есть везде!`);
    }
  }

  return commoneElements;
};

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log( getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log( getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) );
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements([5, 2, 13], [10, 20, 30]));


//   function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonElements =[];
// for(let i = 0; i < array1.length; i +=1){
// if (array2.includes(array1[i])){

//       commonElements.push(array1[i]) }

// }
// return commonElements;

//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
  
