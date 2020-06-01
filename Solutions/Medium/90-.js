/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b);
    var res = [];
    backtrack(0, []);
    function backtrack(start, [...current]){
        res.push(current);
        for(var i=start;i<nums.length;i++){
            if(i > start && nums[i] === nums[i-1]) continue;
            current.push(nums[i]);
            backtrack(i+1, current);
            current.pop();
        }
    }
    return res;
};