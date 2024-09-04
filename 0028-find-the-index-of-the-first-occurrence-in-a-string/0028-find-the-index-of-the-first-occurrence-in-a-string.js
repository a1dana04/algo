/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len =needle.length;
    let len_hay = haystack.length;
    for(let i = 0; i<=len_hay-len; i++){
        if(haystack.substr(i,len) == needle)
        return i;
    }
    return -1;
    

};