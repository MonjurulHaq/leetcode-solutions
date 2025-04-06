// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

// Example 1:

// Input: boxes = "110"
// Output: [1,1,3]

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    const res = new Array(n).fill(0);

    let count = 0;
    let moves = 0;
    for (let i = 0; i < n; i++) {
        res[i] += moves;
        count += boxes[i] === '1' ? 1:0;
        moves += count;
    }
    count = 0;
    moves = 0;
    for (let i = n-1; i >= 0; i--) {
        res[i] += moves;
        count += boxes[i] === '1' ? 1:0;
        moves += count;
    }

    return res;
};

let boxes = "110";
console.log(minOperations(boxes));