# 奖励最顶尖的 K 名学生

给你两个字符串数组 positive_feedback 和 negative_feedback ，分别包含表示正面的和负面的词汇。不会 有单词同时是正面的和负面的。

一开始，每位学生分数为 0 。每个正面的单词会给学生的分数 加 3 分，每个负面的词会给学生的分数 减 1 分。

给你 n 个学生的评语，用一个下标从 0 开始的字符串数组 report 和一个下标从 0 开始的整数数组 student_id 表示，其中 student_id[i] 表示这名学生的 ID ，这名学生的评语是 report[i] 。每名学生的 ID 互不相同。

给你一个整数 k ，请你返回按照得分 从高到低 最顶尖的 k 名学生。如果有多名学生分数相同，ID 越小排名越前。

示例 1：

```js
输入：positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2
输出：[1,2]
解释：
两名学生都有 1 个正面词汇，都得到 3 分，学生 1 的 ID 更小所以排名更前。
```

示例 2：

```js
输入：positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is not studious","the student is smart"], student_id = [1,2], k = 2
输出：[2,1]
解释：

- ID 为 1 的学生有 1 个正面词汇和 1 个负面词汇，所以得分为 3-1=2 分。
- ID 为 2 的学生有 1 个正面词汇，得分为 3 分。
学生 2 分数更高，所以返回 [2,1] 。
```

提示：

- 1 <= positive_feedback.length, negative_feedback.length <= 10^4
- 1 <= positive_feedback[i].length, negative_feedback[j].length <= 100
- positive_feedback[i] 和 negative_feedback[j] 都只包含小写英文字母。
- positive_feedback 和 negative_feedback 中不会有相同单词。
- n == report.length == student_id.length
- 1 <= n <= 10^4
- report[i] 只包含小写英文字母和空格 ' ' 。
- report[i] 中连续单词之间有单个空格隔开。
- 1 <= report[i].length <= 100
- 1 <= student_id[i] <= 10^9
- student_id[i] 的值 互不相同 。
- 1 <= k <= n

思路：

1. 构建词汇表：首先，构建一个词汇表 words，用于存储每个正面词汇和负面词汇对应的得分。
2. 计算每个学生的得分：遍历每个学生的评语，通过分割评语中的单词并查询词汇表来计算每个学生的得分。
3. 存储学生得分和 ID：将每个学生的得分和对应的 ID 存储在一个数组 A 中，得分用负数表示（为了在排序时使用 JavaScript 的默认升序排序实现降序效果）。
4. 排序：对数组 A 进行排序，首先按得分降序排序，如果得分相同，则按 ID 升序排序。
5. 选择前 K 名学生：从排序后的数组中选择前 K 项，提取学生的 ID 作为结果。

时间复杂度：O(n _ m _ l)，其中 n 是学生的数量，m 是每个评语中单词的数量，l 是词汇表中词汇的平均长度。这是因为需要遍历每个评语中的每个单词来计算得分。
空间复杂度：O(p + n)，其中 p 是词汇表中词汇的数量，n 是学生的数量。词汇表和存储学生得分及 ID 的数组都需要额外的空间。

```javascript
var topStudents = function (positive_feedback, negative_feedback, report, student_id, k) {
  const words = {};
  for (const word of positive_feedback) {
    words[word] = 3;
  }
  for (const word of negative_feedback) {
    words[word] = -1;
  }
  const A = [];
  for (let i = 0; i < report.length; i++) {
    let score = 0;
    for (const word of report[i].split(' ')) {
      score += words[word] || 0;
    }
    A.push([-score, student_id[i]]);
  }
  A.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));
  return A.slice(0, k).map(([, i]) => i);
};
```
