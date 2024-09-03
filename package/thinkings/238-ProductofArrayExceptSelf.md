# 除自身以外数组的乘积

给你一个长度为  n  的整数数组  nums，其中  n > 1，返回输出数组  output ，其中 output[i]  等于  nums  中除  nums[i]  之外其余各元素的乘积。

**示例:**

```
输入: [1,2,3,4]
输出: [24,12,8,6]
```

**提示：**  
题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

**说明:**  
请不要使用除法，且在  O(n) 时间复杂度内完成此题。

**进阶：**  
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）

**思路：**

每个元素的乘积都等于，该元素左侧所有元素的乘积\*该元素右侧所有元素的乘积

思路

1. 初始化结果数组：创建一个与输入数组 nums 等长的数组 res，用于存储每个元素除自身的乘积。
2. 第一次遍历（从左到右）：
   - 定义一个变量 temp 用于存储当前元素左侧所有元素的乘积。
   - 遍历数组 nums，对于每个元素 nums[i]，将其左侧所有元素的乘积 temp 存入 res[i]。
   - 同时，更新 temp 为 temp \* nums[i]。
3. 第二次遍历（从右到左）：
   - 重新定义 temp 为 1，用于存储当前元素右侧所有元素的乘积。
   - 逆序遍历数组 nums，对于每个元素 nums[i]，将 res[i] 更新为 res[i] \* temp。
   - 同时，更新 temp 为 temp \* nums[i]。
4. 返回结果：返回填充好的 res 数组。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。需要两次遍历数组。
空间复杂度：O(n)，用于存储输出数组 res。

```ts
function productExceptSelf(nums: number[]): number[] {
  const res: number[] = new Array(nums.length);
  let temp: number = 1;
  for (let i: number = 0; i < res.length; i++) {
    res[i] = temp;
    temp = temp * nums[i];
  }
  temp = 1;
  for (let i: number = nums.length - 1; i >= 0; i--) {
    res[i] *= temp;
    temp *= nums[i];
  }
  return res;
}
```
