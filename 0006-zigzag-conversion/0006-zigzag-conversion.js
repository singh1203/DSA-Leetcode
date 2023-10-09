/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;

    let reverse = false;
    let converted = '';
    let rows = [];
    let count = 0;

    for(let i = 0; i < numRows; i++) rows[i] = [];   //preparing the number of rows as an array

    for(let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);
        reverse ? count-- : count++;    // when reverse is false we are increasing the count hence moving down
        if(count === numRows - 1 || count === 0) reverse = !reverse;
    }
    //put together the converted string using join fuction in reduce method.
    return rows.reduce((converted, curr) => converted + curr.join(''), '');
};