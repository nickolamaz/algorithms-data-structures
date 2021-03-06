// https://leetcode.com/problems/move-zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0;

  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      nums[i] = j === i ? nums[i] : 0;
      j++;
    }
  }
};
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([1]))
console.log(moveZeroes([1, 2]))
console.log(moveZeroes([1, 0]))
console.log(moveZeroes([1, 0, 1]))
