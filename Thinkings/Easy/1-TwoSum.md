# 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**

```js
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

思路：

做这个题的时候，就想要搞一个 map 对象，建立 nums 的值和下标的对应关系。把 nums 里的 value 和 index 分别作为这个 map 对象的 key 和 value，这样就可以通过 value 找到数组中对应的下标。nums 当前的值是 current，检查 map[target-current]的值是否存在，如果不存在那就吧当前的 value 和 key 放进 map 里备用，然后继续向下查找，如果存在就返回 map[target-current]和 current对应的 index 就可以了。

1、设置一个 map 对象，用来存放 nums 的 value 和 index  
2、遍历 nums，获取到当前 index 的 value，赋值给 current  
3、判断 map[target-current] 是否存在  
4、存在就返回 map[target-current]和 current 对应的 index 的数组  
5、不存在就将 current 和 index 放进 map 里备查。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0, len = nums.length; i < len; i += 1) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i];
    }
    hash[nums[i]] = i;
  }
  return [];
};
```
