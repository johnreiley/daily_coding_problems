/*
#152
You are given n numbers as well as n probabilities that 
sum up to 1. Write a function to generate one of the numbers 
with its corresponding probability.

For example, given the numbers [1, 2, 3, 4] and probabilities 
[0.1, 0.5, 0.2, 0.2], your function should return 1 10% of the 
time, 2 50% of the time, and 3 and 4 20% of the time.

You can generate random numbers between 0 and 1 uniformly.
*/

function generateNumByPercentage(arr, prcnt) {
    let weightedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let weight = prcnt[i] * 10;
        for (let j = 0; j < weight; j++) {
            let val = arr[i];
            weightedArr.push(val);
        }
    }
    return weightedArr[(Math.random() * (weightedArr.length - 1)).toFixed(0)];

}

for (i = 0; i < 10; i++) {
    console.log(generateNumByPercentage([1, 2, 3, 4], [0.1, 0.5, 0.2, 0.2]));
}