/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let res1 = res.split("").reverse().join("");

  return res === res1;
};