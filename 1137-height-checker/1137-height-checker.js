/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let heightt = heights.slice().sort((a,b)=> a-b)
     let count = 0
    for( let i = 0; i < heights.length; i++ ){
        if(heights[i] !== heightt[i]){
            count++
        } 
    }
    return count
    
};