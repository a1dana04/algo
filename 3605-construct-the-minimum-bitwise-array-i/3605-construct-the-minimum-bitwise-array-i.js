/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
     return nums.map((num) => (num === 2 ? -1 : (((-num - 2) ^ num) >> 2) + num))
    
};