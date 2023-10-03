/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length;
    let result = 0;
    for (let i = n-1; i >= 0; i--){
        if(s[i] == ' ') {
            if(result > 0){
                return result;
            }
            continue;
        }
        result++;
    }
    return result;
};