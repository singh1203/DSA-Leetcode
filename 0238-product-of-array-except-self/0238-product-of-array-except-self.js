/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const resultArr = [];
    for(let i = 0; i < nums.length; i++){
      let productVal = nums[i];
      if(resultArr.length !== 0)
        productVal *= resultArr[i-1];
      resultArr.push(productVal);
    }
    let productVal = 1;
    let i = nums.length -1;
    for( i; i > 0; i--){
      resultArr[i] = productVal * resultArr[i-1];
      productVal *= nums[i];
    }
    resultArr[i]= productVal;
    return resultArr;
};