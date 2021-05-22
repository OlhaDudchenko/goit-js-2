function findLongestWord(string) {
        const massFromString = string.split(' ');
    // console.log(massFromString);
        let longestWord = massFromString[0];

        for ( const element of massFromString) {
            // console.log(element);

            if (element.length > longestWord.length) {
                longestWord = element;
            }
        }

       return longestWord;


}

function findLongestWord(string) {

  const updateString = string.split(' ');
  // console.log(updateString);
  let longestWord = '';
  for (let i = 0; i < updateString.length; i+=1){
    // console.log(updateString[i]);
    if (updateString[i].length > longestWord.length) {
      //  console.log( updateString[i].length > longestWord)
      longestWord = updateString[i];
    
     
    }
  
  }
  return longestWord ;
  
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));




console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord('Find a cat'));


//  ******************************************


// const wordsMasiv = string.split(' ');
    // let max = wordsMasiv[0];

    // for (let i = 0; i < wordsMasiv.length; i += 1){

    //     if (wordsMasiv[i].length > max.length) {
    //         max = wordsMasiv[i];

    //     }
    // }

    // return max;