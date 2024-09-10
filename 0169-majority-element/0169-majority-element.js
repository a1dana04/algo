/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
      return nums[Math.floor(nums.sort().length/2)]
};