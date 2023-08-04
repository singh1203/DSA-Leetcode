/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let profit = 0;
    while (right < prices.length){
        if(prices[left] < prices[right]){
            profit = profit + (prices[right] - prices[left]);
        }
        left++;
        right++;
    }
    return profit 
};