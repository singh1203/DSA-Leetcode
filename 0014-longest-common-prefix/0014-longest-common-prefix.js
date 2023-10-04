/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = "";
    let n = strs.length;
    for(let i = 0; i < strs[0].length; i++){
        let ch = strs[0][i];
        let match = true;
        for(let j = 1; j < n; j++){
            if(strs[j].length < i || ch !== strs[j][i]){
                match = false;
                break;
            }
        }
        if(match === false){
            break;
        } else {
           ans = ans.concat(ch);
        }
    }
    return ans;
};