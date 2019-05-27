// Given a list of numbers and a number k, return whether any two 
// numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true 
// since 10 + 7 is 17.

// Bonus: Can you do this in one pass?
//---------------------------------------------------------------

function containsAddends(numbers, k) {
   if (numbers === undefined) {
      return false;
   } else {
      for (let i = 0; i < numbers.length; i++) {
         for (let j = i + 1; j < numbers.length; j++) {
            console.log(`${numbers[i]} + ${numbers[j]}`)
            if (numbers[i] + numbers[j] === k) {
               return true;
            }
         }
      }
   }
}

const numbers = [11, 15, 3, 7, 4, 16, 10];
console.log(containsAddends(numbers, 17));