# 下一个更大元素 I

nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。

给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中 nums1 是 nums2 的子集。

对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。

返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。

示例 1：

```javascript
输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
输出：[-1,3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：

- 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
- 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
- 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
```

示例 2：

```javascript
输入：nums1 = [2,4], nums2 = [1,2,3,4].
输出：[3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：

- 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
- 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。
```

提示：

- 1 <= nums1.length <= nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 10^4
- nums1 和 nums2 中所有整数 互不相同
- nums1 中的所有整数同样出现在 nums2 中

进阶：你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？

思路：

对于这个问题，目标是在 nums2 中找到 nums1 中元素的下一个更大元素。

- 采用单调栈的方法是比较合适的。从右到左遍历 nums2，使用一个栈来辅助。当遍历到一个元素 num 时，如果栈为空或者 num 小于等于栈顶元素，就把 num 压入栈。如果 num 大于栈顶元素，说明找到了栈顶元素的下一个更大元素，此时不断弹出栈顶元素，并记录栈顶元素的下一个更大元素是 num，直到栈为空或者 num 小于等于栈顶元素。这样可以在一次遍历 nums2 的过程中，找到 nums2 中每个元素的下一个更大元素（如果存在）。
- 选择这种方法的原因是它能在满足时间复杂度要求的情况下高效地解决问题，避免了对每个元素进行暴力搜索下一个更大元素。

1. 首先创建一个 Map 对象`map`用于存储 nums2 中元素及其下一个更大元素的对应关系，以及一个数组`stack`作为辅助栈。
2. 从右到左遍历 nums2：
   - 对于当前元素`num`：
     - 当栈`stack`不为空且`num`大于等于栈顶元素时，不断弹出栈顶元素，因为这些元素的下一个更大元素不是`num`。
     - 如果栈`stack`为空，将`num`的下一个更大元素设置为 - 1，并存入`map`；如果栈`stack`不为空，将`num`的下一个更大元素设置为栈顶元素，并存入`map`。
     - 最后将`num`压入栈`stack`。
3. 然后创建一个长度为`nums1.length`的数组`res`，通过遍历`nums1`，利用`map`获取`nums1`中每个元素在`nums2`中的下一个更大元素，填充`res`数组。
4. 最后返回`res`数组。

时间复杂度：

- 遍历 nums2 一次，时间复杂度为$O(nums2.length)$。
- 遍历 nums1 一次来构建结果数组，时间复杂度为$O(nums1.length)$。
- 总的时间复杂度为$O(nums1.length + nums2.length)$。

空间复杂度：

- 使用了一个栈`stack`，栈中最多存储 nums2 中的元素，空间复杂度为O(nums2.length)。
- 使用了一个 Map`map`来存储对应关系，空间复杂度为O(nums2.length)。
- 结果数组`res`的空间复杂度为O(nums1.length)。
- 总的空间复杂度为O(nums1.length + nums2.length)。

```javascript
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; --i) {
    const num = nums2[i];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  const res = new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
  return res;
};
```
