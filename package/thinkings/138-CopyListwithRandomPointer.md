# 随机链表的复制

给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

返回复制链表的头节点。

用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

val：一个表示 Node.val 的整数。
random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为 null 。
你的代码 只 接受原链表的头节点 head 作为传入参数。

示例 1：
![1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e1.png)

```javascript
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

示例 2：
![2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e2.png)

```javascript
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```

示例 3：
![3](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e3.png)

```javascript
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```

提示：

- 0 <= n <= 1000
- -10^4 <= Node.val <= 10^4
- Node.random 为 null 或指向链表中的节点。

思路

1. 初始化哈希映射：创建一个哈希映射 cachedNode，用于存储已经复制过的节点。
2. 递归复制：定义一个递归函数，它接收当前节点 head 和哈希映射 cachedNode 作为参数。
   - 如果当前节点为空，返回 null。
   - 如果当前节点在哈希映射中没有记录，说明这个节点还没有被复制过，需要创建一个新的节点并复制当前节点的值。
   - 将新创建的节点存储在哈希映射中，以便后续的递归调用可以直接使用。
3. 递归复制 next 和 random 指针：递归地复制当前节点的 next 指针和 random 指针。
4. 返回复制的节点：在递归调用结束后，返回哈希映射中存储的复制节点。

时间复杂度：O(n)，其中 n 是链表中的节点数。每个节点恰好被访问一次。
空间复杂度：O(n)，用于存储哈希映射中的所有节点。

```javascript
var copyRandomList = function (head, cachedNode = new Map()) {
  if (head === null) {
    return null;
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, { val: head.val }),
      Object.assign(cachedNode.get(head), {
        next: copyRandomList(head.next, cachedNode),
        random: copyRandomList(head.random, cachedNode),
      });
  }
  return cachedNode.get(head);
};
```
