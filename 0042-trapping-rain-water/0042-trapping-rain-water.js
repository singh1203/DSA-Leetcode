/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let leftmax = 0;
    let rightmax = height[n-1];
    let left = 0;
    let right = n-1;
    let water = 0;
    while(left <= right) {
       if (height[left] <= height[right]){
           if (height[left] >= leftmax) leftmax = height[left];
           else water += leftmax - height[left];
           left++;
       } else {
           if (height[right] >= rightmax) rightmax = height[right];
           else water += rightmax - height[right];
           right--;
       }
    }
    return water;
};