# 独特的电子邮件地址

每个 有效电子邮件地址 都由一个 本地名 和一个 域名 组成，以 '@' 符号分隔。除小写字母之外，电子邮件地址还可以含有一个或多个 '.' 或 '+' 。

例如，在 <alice@leetcode.com>中， alice 是 本地名 ，而 leetcode.com 是 域名 。
如果在电子邮件地址的 本地名 部分中的某些字符之间添加句点（'.'），则发往那里的邮件将会转发到本地名中没有点的同一地址。请注意，此规则 不适用于域名 。

例如，"<alice.z@leetcode.com>” 和 “<alicez@leetcode.com>” 会转发到同一电子邮件地址。
如果在 本地名 中添加加号（'+'），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件。同样，此规则 不适用于域名 。

例如 <m.y+name@email.com> 将转发到 <my@email.com>。
可以同时使用这两个规则。

给你一个字符串数组 emails，我们会向每个 emails[i] 发送一封电子邮件。返回实际收到邮件的不同地址数目。

示例 1：

```js
输入：emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
输出：2
解释：实际收到邮件的是 "<testemail@leetcode.com>" 和 "<testemail@lee.tcode.com>"。
```

示例 2：

```js
输入：emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
输出：3
```

提示：

- 1 <= emails.length <= 100
- 1 <= emails[i].length <= 100
- emails[i] 由小写英文字母、'+'、'.' 和 '@' 组成
- 每个 emails[i] 都包含有且仅有一个 '@' 字符
- 所有本地名和域名都不为空
- 本地名不会以 '+' 字符作为开头
- 域名以 ".com" 后缀结尾。
- 域名在 ".com" 后缀前至少包含一个字符

思路：

拿到这个题目，首先需要明确任务是处理一组电子邮件地址，根据题目中给定的规则对本地名进行处理，然后统计去重后的有效地址数量。解题的初步思路是遍历每个电子邮件地址，将其按照'@'符号分割为本地名和域名，对本地名进行规则处理（去掉'+'号后面的部分和所有的'.'），然后将处理后的本地名和原域名组合成新的地址存入集合中，最后返回集合的大小。选择这种方法是因为可以直接利用集合的特性去重，并且通过字符串的操作来处理本地名符合题目规则。

1. 首先通过遍历`emails`数组，获取每个电子邮件地址。
2. 使用`indexOf('@')`找到'@'的位置，从而将电子邮件地址分割为本地名和域名。
3. 通过`split('+')[0]`去掉本地名中第一个'+'号后面的部分。
4. 使用`replaceAll('.', '')`去掉本地名中所有的'.'。
5. 将处理后的本地名和原域名组合后添加到集合中，利用集合的特性自动去重。

时间复杂度：O(nm)，其中 n 是`emails`数组的长度，m 是每个电子邮件地址的平均长度。主要的时间消耗在于对每个电子邮件地址的处理和集合的操作。
空间复杂度：O(nm)，主要用于存储处理后的电子邮件地址到集合中。

```js
var numUniqueEmails = function (emails) {
  const emailSet = new Set();
  for (const email of emails) {
    const i = email.indexOf('@');
    // 去掉本地名第一个加号之后的部分
    let local = email.slice(0, i).split('+')[0];
    // 去掉本地名中所有的句点
    local = local.replaceAll('.', '');
    emailSet.add(local + email.slice(i));
  }
  return emailSet.size;
};
```
