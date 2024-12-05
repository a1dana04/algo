/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
      
  let res = (s + s).slice(1,-1)
  return res.includes(s)
    
};