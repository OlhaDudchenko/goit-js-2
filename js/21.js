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

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
console.log( findLongestWord('Find a cat'));