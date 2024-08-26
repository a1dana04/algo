/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
   const n = nums.length;
    const answer = new Array(n);
    
    let leftSum = 0;
    let rightSum = nums.reduce((acc, el) => acc + el, 0);
    
    for (let i = 0; i < n; i++) {
        rightSum -= nums[i];
        answer[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i];
    }
    
    return answer; 
};