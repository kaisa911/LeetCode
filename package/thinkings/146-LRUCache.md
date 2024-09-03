# LRU 缓存

请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

示例：

```javascript
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

提示：

- 1 <= capacity <= 3000
- 0 <= key <= 10000
- 0 <= value <= 10^5
- 最多调用 2 \* 10^5 次 get 和 put

思路

1. 初始化：在 LRUCache 构造函数中，初始化一个空的 Map 对象 map 来存储缓存的键值对，以及一个整数 capacity 来存储缓存的容量。
2. 获取操作：在 get 方法中，首先检查 Map 是否包含给定的 key：
   - 如果包含，从 Map 中获取该 key 对应的值，然后删除该 key 并立即将其重新插入 Map 中，以更新其在缓存中的位置（即视为最近使用）。
   - 如果不包含，返回 -1。
3. 插入操作：在 put 方法中，首先检查 Map 是否已经包含给定的 key：
   - 如果包含，删除旧的键值对。
   - 无论是否包含，都将新的键值对插入 Map 中。
   - 插入后，检查 Map 的大小是否超过了缓存的容量 capacity。如果超过了，删除 Map 中最久未使用的元素，即 Map 中的第一个元素。
4. 返回结果：get 和 put 方法分别返回获取到的值或执行插入操作后的缓存状态。

时间复杂度：get 和 put 方法的平均时间复杂度为 O(1)。尽管 Map 的 delete 和 set 操作本身是 O(1)，但在 get 方法中删除和重新插入同一个元素会导致额外的开销。然而，由于这些操作是常数时间的，因此整体平均时间复杂度仍然是 O(1)。
空间复杂度：O(capacity)，其中 capacity 是缓存的容量。Map 对象存储了缓存中的所有键值对。

```javascript
/**
 *  @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let value = this.map.get(key);
    this.map.delete(key);
    // 删除后，再 set ，相当于更新到 map 最后一位
    this.map.set(key, value);
    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 *@return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果已有，那就要更新，即要先删了再进行后面的 set
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  // put 后判断是否超载
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```
