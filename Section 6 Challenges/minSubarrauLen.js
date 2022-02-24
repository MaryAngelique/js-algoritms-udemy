function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let min = Infinity;
    
    while (start < nums.length) {
        if(total < sum && end < nums.length){
            total += nums[end];
            end++;
        } else if(total >= sum) {
            min = Math.min(min, end - start);
            total -= nums[start];
            start++;
        } else {
            break;
        }
    }
    
    return min === Infinity ? 0 : min;
}