/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let map = new Array(K).fill(0) // 初始化map数组，长度K
    map[0] = 1 // 预置边界情况，第0项1。其他项0
    let preSum = 0
    let count = 0
    for (let i = 0; i < A.length; i++) {
        preSum = (preSum + A[i]) % K
        if (preSum < 0) preSum += K
        count += map[preSum] // 索引是mod，值是出现次数
        map[preSum]++ // 出现次数+1
    }
    return count
};