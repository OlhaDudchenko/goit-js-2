// function calculateTotalPrice(order) {
// let total = 0;
    

//     for (let i = 0; i < order.length; i +=1 ) { 
 
//         total +=order[i];
      
//        }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]) );
//  console.log(calculateTotalPrice([164, 48, 291]));
//  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//  console.log(calculateTotalPrice([112, 71, 4, 3, 76]) );


function includes(array, value) {

  for (let i = 0; i < array.length; i += 1){
    console.log(i);
    if(array[i]===value){
    return true;
        }
        
       }
  
  return false;

  // Change code above this line
}
console.log(includes([1, 2, 3, 4, 5], 3));
