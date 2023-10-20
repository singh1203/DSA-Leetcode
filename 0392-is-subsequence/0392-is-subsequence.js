/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let n = t.length ;
    let j = 0;

    for (let i = 0; i < n; i++) {
        if(s[j] === t[i]) j++;
    }
    return j === s.length;
};