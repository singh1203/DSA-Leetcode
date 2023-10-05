/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Trim the input string to remove leading and trailing spaces
    let i = 0, n = s.length - 1;
    while (i <= n && s[i] === ' ') i++;    // Find the first non-space character
    while (n >= i && s[n] === ' ') n--;    // Find the last non-space character
    s = s.substring(i, n + 1);

    //Split the trimmed string into words based on spaces
    let words = s.split(/\s+/);     //Tokenize the string into words based on each contiguous string of space characters is being replaced with the empty string because of the '+'

    //Initialize the output string
    let out = '';

    // Iterate through the words in reverse order
    for (let k = words.length - 1; k > 0; k--) {
        //Append the current word and a space to the output
        out += words[k] + ' ';
    }

    //Append the first word to the output (without trailing space)
    out += words[0];

    return out;    // Concatenation in reversed order
};