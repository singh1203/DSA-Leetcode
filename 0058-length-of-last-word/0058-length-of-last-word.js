/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var res = 0;
    for (var i = s.length-1;i>=0; i--) {
        if (s.charAt(i) != ' ') res++;
        else if(res>0) return res;
    }
    return res;
};