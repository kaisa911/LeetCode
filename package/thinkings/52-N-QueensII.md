# N 皇后 II

n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

```js
输入：n = 4
输出：2
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

示例 2：

```js
输入：n = 1
输出：1
```

提示：

- 1 <= n <= 9

思路：
这个题是N皇后问题的计数版本，即不是找出所有的解决方案，而是计算解决方案的总数。以下是算法的主要逻辑：

1. 初始化：创建总解数totalNQueens为0，以及三个集合columns、diagonals1和diagonals2分别来跟踪列、对角线/\和对角线\的占用情况。
2. 递归函数：定义了一个递归函数backtrack，它接收棋盘大小n、当前行row和三个集合作为参数。
3. 基本情况：如果当前行row等于棋盘大小n，则表示已成功放置了n个皇后，此时返回1，表示找到了一个解决方案。
4. 递归放置：遍历每一列，检查是否可以在当前行和当前列放置皇后。如果该列或对角线已经被其他皇后占用，则跳过这一列。
5. 回溯：如果当前位置可以放置皇后，则将该列和对角线标记为占用，递归调用backtrack函数放置下一行的皇后。
6. 累计解数：递归返回后，将返回的解数累加到count中，并在下一次循环中继续尝试放置皇后。
7. 回溯清理：在递归返回后，清除当前行皇后的占用标记，以便尝试其他位置。
8. 开始递归：从第0行开始递归调用backtrack函数。
9. 返回结果：递归完成后，返回总解数。

时间复杂度是O(n!)，因为对于每一行，我们尝试在n列中的任意一列放置皇后，并且对于每个可能的放置，我们都会递归地尝试下一行的放置。然而，由于对列和对角线的检查，实际上很多排列会被快速排除，所以实际运行时间会快于纯粹的n!。
空间复杂度是O(n)，这是因为我们使用了一组集合来存储当前状态，以及递归调用栈的空间，集合的大小最多包含n个元素。

```js
const backtrack = (n, row, columns, diagonals1, diagonals2) => {
    if (row === n) {
        return 1;
    } else {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (columns.has(i)) {
                continue;
            }
            const diagonal1 = row - i;
            if (diagonals1.has(diagonal1)) {
                continue;
            }
            const diagonal2 = row + i;
            if (diagonals2.has(diagonal2)) {
                continue;
            }
            columns.add(i);
            diagonals1.add(diagonal1);
            diagonals2.add(diagonal2);
            count += backtrack(n, row + 1, columns, diagonals1, diagonals2);
            columns.delete(i);
            diagonals1.delete(diagonal1);
            diagonals2.delete(diagonal2);
        }
        return count;
    }
}
var totalNQueens = function(n) {
    const columns = new Set();
    const diagonals1 = new Set();
    const diagonals2 = new Set();
    return backtrack(n, 0, columns, diagonals1, diagonals2);
};

```
