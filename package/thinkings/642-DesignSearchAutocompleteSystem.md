# 设计搜索自动补全系统

为搜索引擎设计一个搜索自动完成系统。用户可以输入一个句子(至少一个单词，并以一个特殊的字符'#'结尾)。对于除'#'之外的每个字符，您需要返回与已输入的句子部分前缀相同的前 3 个历史热门句子。具体规则如下:

一个句子的热度定义为用户输入完全相同句子的次数。
返回的前 3 个热门句子应该按照热门程度排序(第一个是最热的)。如果几个句子的热度相同，则需要使用 ascii 代码顺序(先显示较小的一个)。
如果少于 3 个热门句子，那么就尽可能多地返回。
当输入是一个特殊字符时，它意味着句子结束，在这种情况下，您需要返回一个空列表。
您的工作是实现以下功能:

构造函数:

AutocompleteSystem(String[] sentence, int[] times):这是构造函数。输入是历史数据。句子是由之前输入的句子组成的字符串数组。Times 是输入一个句子的相应次数。您的系统应该记录这些历史数据。

现在，用户想要输入一个新句子。下面的函数将提供用户类型的下一个字符:

List<String> input(char c):输入 c 是用户输入的下一个字符。字符只能是小写字母(“a”到“z”)、空格(“”)或特殊字符(“#”)。另外，前面输入的句子应该记录在系统中。输出将是前 3 个历史热门句子，它们的前缀与已经输入的句子部分相同。

例子:

```js
操作:AutocompleteSystem(["i love you"， "island"，"ironman"， "i love leetcode"]， [5,3,2,2])
系统已经追踪到以下句子及其对应的时间:

"i love you" : 5 times
"island" : 3 times
"ironman" : 2 times
"i love leetcode" : 2 times

现在，用户开始另一个搜索:

操作:输入(“i”)
输出:["i love you"， "island"，"i love leetcode"]
解释:
有四个句子有前缀“i”。其中，《ironman》和《i love leetcode》有着相同的热度。既然“ ” ASCII码为32，“r”ASCII码为114，那么“i love leetcode”应该在“ironman”前面。此外，我们只需要输出前3个热门句子，所以“ironman”将被忽略。

操作:输入(' ')
输出:[“i love you”，“i love leetcode”]
解释:
只有两个句子有前缀“i”。

操作:输入(' a ')
输出:[]
解释:
没有以“i a”为前缀的句子。

操作:输入(“#”)
输出:[]
解释:
用户完成输入后，在系统中将句子“i a”保存为历史句。下面的输入将被计算为新的搜索。
```

提示:

- 输入的句子总是以字母开头，以“#”结尾，两个单词之间只有一个空格。
- 要搜索的完整句子不会超过 100 个。包括历史数据在内的每句话的长度不会超过 100 句。
- 在编写测试用例时，即使是字符输入，也请使用双引号而不是单引号。
- 请记住重置在 AutocompleteSystem 类中声明的类变量，因为静态/类变量是跨多个测试用例持久化的。详情请点击这里。

思路：

拿到这个题目，首先需要理解题目的需求是设计一个搜索自动补全系统。核心在于根据用户输入的字符序列，在历史数据中查找与之前缀匹配的热门句子，并按照热度和 ASCII 码顺序返回前 3 个。解题思路可以是建立一个合适的数据结构来存储历史句子及其热度信息，然后在用户输入字符时，通过遍历或特定的查找算法来获取匹配的句子，并进行排序和筛选。

1. 在构造函数中，使用一个 `Map` 数据结构来存储句子和其对应的热度次数，方便快速查找和更新。
2. 在 `input` 方法中，当输入 `#` 时，将当前前缀保存到 `map` 中并更新其热度，然后重置前缀。
3. 当输入其他字符时，将其添加到前缀中。
4. 通过遍历 `map` 找到所有以当前前缀开头的句子和其热度，存储在 `candidates` 数组中。
5. 对 `candidates` 按照热度降序排序，如果热度相同则按照句子的 ASCII 码升序排序。
6. 最后返回排序后的前 3 个句子。

- 时间复杂度：构造函数的时间复杂度为 O(n)，`input` 方法中遍历 `map` 的时间复杂度为 O(m)，其中 m 为 `map` 中元素的个数。排序的时间复杂度为 O(k log k)，其中 k 为候选句子的个数。总的时间复杂度为 O(m + k log k)。
- 空间复杂度：使用了一个 `Map` 来存储句子和热度，空间复杂度为 O(n)，其中 n 为不同句子的个数。

```js
class AutocompleteSystem {
  constructor(sentences, times) {
    this.map = new Map();
    for (let i = 0; i < sentences.length; i++) {
      this.map.set(sentences[i], times[i]);
    }
    this.prefix = '';
  }

  input(c) {
    if (c === '#') {
      this.map.set(this.prefix, (this.map.get(this.prefix) || 0) + 1);
      this.prefix = '';
      return [];
    }
    this.prefix += c;
    const candidates = [];
    for (const [sentence, count] of this.map.entries()) {
      if (sentence.startsWith(this.prefix)) {
        candidates.push({ sentence, count });
      }
    }
    candidates.sort((a, b) => b.count - a.count || a.sentence.localeCompare(b.sentence));
    return candidates.slice(0, 3).map((item) => item.sentence);
  }
}
```
