/*
#144
Given an array of numbers and an index i, return the index of the nearest 
larger number of the number at index i, where distance is measured in array indices.

For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

If two distances to larger numbers are the equal, then return any one of them. 
If the array at i doesn't have a nearest larger integer, then return null.

*/
function largestNumberNearIndex(i, arr) {
    let num = arr[i];
    let j = i, k = i;

    while (j > 0 || k < arr.length - 1) {
        if (j > 0) {
            if (arr[--j] > num) { return j }
        }
        if (k < arr.length - 1) {
            if (arr[++k] > num) { return k }
        }
    }
    return null;
}

console.log(largestNumberNearIndex(4, [2, 6, 3, 1, 7, 1, 4, 3, 2, 2, 8, 3, 1]));
// 10