function productExceptSelf(nums: number[]): number[] {
    const res: number[] = new Array(nums.length);
    let temp:number = 1;
    for(let i:number = 0; i < res.length; i++){
        res[i] = temp;
        temp = temp * nums[i];
    }
    temp = 1;
    for(let i:number = nums.length - 1; i >= 0; i--){
        res[i] *= temp;
        temp *= nums[i];
    }
    return res;
};