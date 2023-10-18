const nameMap = {
  1: {
    cnName: '两数之和',
    enName: 'Two Sum',
    difficulty: 'Easy',
    label: '哈希表',
  },
  2: {
    cnName: '两数相加',
    enName: 'Add Two Numbers',
    difficulty: 'Medium',
    label: '',
  },
  3: {
    cnName: '无重复字符的最长子串',
    enName: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    label: '',
  },
  4: {
    cnName: '两个排序数组的中位数',
    enName: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    label: '',
  },
  5: {
    cnName: '最长回文子串',
    enName: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    label: '',
  },
  6: {
    cnName: 'Z 字形变换',
    enName: 'ZigZag Conversion',
    difficulty: 'Medium',
    label: '',
  },
  7: {
    cnName: '翻转整数',
    enName: 'Reverse Integer',
    difficulty: 'Easy',
    label: '',
  },
  8: {
    cnName: '字符串转为整数',
    enName: 'String to Integer (atoi)',
    difficulty: 'Medium',
    label: '',
  },
  9: {
    cnName: '回文数字',
    enName: 'Palindrome Number',
    difficulty: 'Easy',
    label: '',
  },
  10: {
    cnName: '正则表达式匹配',
    enName: 'Regular Expression Matching',
    difficulty: 'Hard',
    label: '',
  },
  11: {
    cnName: '盛最多水的容器',
    enName: 'Container With Most Water',
    difficulty: 'Medium',
    label: '',
  },
  12: {
    cnName: '整数转罗马数字',
    enName: 'Integer to Roman',
    difficulty: 'Medium',
    label: '',
  },
  13: {
    cnName: '罗马数字转整数',
    enName: 'Roman to Integer',
    difficulty: 'Easy',
    label: '',
  },
  14: {
    cnName: '最长共同前缀',
    enName: 'Longest Common Prefix',
    difficulty: 'Easy',
    label: '',
  },
  15: {
    cnName: '三数之和',
    enName: '3 Sum',
    difficulty: 'Medium',
    label: '',
  },
  16: {
    cnName: '最接近的三数之和',
    enName: '3 Sum Closest',
    difficulty: 'Medium',
    label: '',
  },
  17: {
    cnName: '电话号码的字母组合',
    enName: 'Letter Combinations of a Phone Number',
    difficulty: 'Medium',
    label: '',
  },
  18: {
    cnName: '四数之和',
    enName: '4 Sum',
    difficulty: 'Medium',
    label: '',
  },
  19: {
    cnName: '删除链表的倒数第 N 个节点',
    enName: 'Remove Nth Node From End of List',
    difficulty: 'Medium',
    label: '',
  },
  20: {
    cnName: '有效的括号',
    enName: 'Valid Parentheses',
    difficulty: 'Easy',
    label: '',
  },
  21: {
    cnName: '合并两个有序链表',
    enName: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    label: '',
  },
  22: {
    cnName: '生成括号',
    enName: 'Generate Parentheses',
    difficulty: 'Medium',
    label: '',
  },
  23: {
    cnName: '合并 K 个排序链表',
    enName: 'Merge k Sorted Lists',
    difficulty: 'Hard',
    label: '',
  },
  24: {
    cnName: '两两交换链表中的节点',
    enName: 'Swap Nodes In Pairs',
    difficulty: 'Medium',
    label: '',
  },
  25: {
    cnName: '每 k 个一组翻转链表',
    enName: 'Reverse Nodes in k-Group',
    difficulty: 'Hard',
    label: '',
  },
  26: {
    cnName: '从有序数组中删除重复项',
    enName: 'Remove Duplicates from Sorted Array',
    difficulty: 'Easy',
    label: '',
  },
  27: {
    cnName: '移除元素',
    enName: 'Remove Element',
    difficulty: 'Easy',
    label: '',
  },
  28: {
    cnName: '实现 strStr()',
    enName: 'Implement strStr()',
    difficulty: 'Easy',
    label: '',
  },
  29: {
    cnName: '两数相除',
    enName: 'Divide Two Integers',
    difficulty: 'Medium',
    label: '',
  },
  30: {
    cnName: '串联所有单词的子串',
    enName: 'Substring with Concatenation of All Words',
    difficulty: 'Hard',
    label: '',
  },
  31: {
    cnName: '下一个排列',
    enName: 'Next-permutation',
    difficulty: 'Medium',
    label: '',
  },
  32: {
    cnName: '最长有效括号',
    enName: 'Longest Valid Parentheses',
    difficulty: 'Hard',
    label: '',
  },
  33: {
    cnName: '在旋转有序数组中搜索',
    enName: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    label: '',
  },
  34: {
    cnName: '搜索范围',
    enName: 'Search for a Range',
    difficulty: 'Medium',
    label: '',
  },
  35: {
    cnName: '搜索插入位置',
    enName: 'Search Insert Position',
    difficulty: 'Easy',
    label: '',
  },
  36: {
    cnName: '验证数独',
    enName: 'Valid Sudoku',
    difficulty: 'Medium',
    label: '',
  },
  37: {
    cnName: '解数独',
    enName: 'Sudoku Solver',
    difficulty: 'Hard',
    label: '',
  },
  38: {
    cnName: '数数并说',
    enName: 'Count and Say',
    difficulty: 'Easy',
    label: '',
  },
  39: {
    cnName: '组合之和',
    enName: 'Combination Sum',
    difficulty: 'Medium',
    label: '',
  },
  40: {
    cnName: '组合之和 II',
    enName: 'Combination Sum II',
    difficulty: 'Medium',
    label: '',
  },
  41: {
    cnName: '缺失的第一个正数',
    enName: 'First Missing Positive',
    difficulty: 'Hard',
    label: '',
  },
  42: {
    cnName: '接雨水',
    enName: 'Trapping Rain Water',
    difficulty: 'Hard',
    label: '',
  },
  43: {
    cnName: '字符串相乘',
    enName: 'Multiply String',
    difficulty: 'Medium',
    label: '',
  },
  44: {
    cnName: '通配符匹配',
    enName: 'Wildcard Matching',
    difficulty: 'Hard',
    label: '',
  },
  45: {
    cnName: '跳跃游戏 II',
    enName: 'Jump Game II',
    difficulty: 'Hard',
    label: '',
  },
  46: {
    cnName: '全排列',
    enName: 'Permutations',
    difficulty: 'Medium',
    label: '',
  },
  47: {
    cnName: '全排列 II',
    enName: 'Permutations II',
    difficulty: 'Medium',
    label: '',
  },
  48: {
    cnName: '旋转图像',
    enName: 'Rotate Image',
    difficulty: 'Medium',
    label: '',
  },
  49: {
    cnName: '字母异位词分组',
    enName: 'Group Anagrams',
    difficulty: 'Medium',
    label: '',
  },
  50: {
    cnName: 'Pow(x, n)',
    enName: 'Pow(x, n)',
    difficulty: 'Medium',
    label: '',
  },
  51: {
    cnName: 'N 皇后',
    enName: 'N-Queens',
    difficulty: 'Hard',
    label: '',
  },
  52: {
    cnName: 'N 皇后 II',
    enName: 'N-Queens II',
    difficulty: 'Hard',
    label: '',
  },
  53: {
    cnName: '最大子序和',
    enName: 'Maximum Subarray',
    difficulty: 'Medium',
    label: '',
  },
  54: {
    cnName: '螺旋矩阵',
    enName: 'Spiral Matrix',
    difficulty: 'Medium',
    label: '',
  },
  55: {
    cnName: '跳跃游戏',
    enName: 'Jump Game',
    difficulty: 'Medium',
    label: '',
  },
  56: {
    cnName: '合并区间',
    enName: 'Merge Intervals',
    difficulty: 'Medium',
    label: '',
  },
  57: {
    cnName: '插入区间',
    enName: 'Insert Interval',
    difficulty: 'Hard',
    label: '',
  },
  58: {
    cnName: '最后一个单词的长度',
    enName: 'Length of Last Word',
    difficulty: 'Easy',
    label: '',
  },
  59: {
    cnName: '螺旋矩阵 II',
    enName: 'Spiral Matrix II',
    difficulty: 'Medium',
    label: '',
  },
  60: {
    cnName: '排列序列',
    enName: 'Permutation Sequence',
    difficulty: 'Medium',
    label: '',
  },
  61: {
    cnName: '旋转链表',
    enName: 'Rotate List',
    difficulty: 'Medium',
    label: '',
  },
  62: {
    cnName: '不同路径',
    enName: 'Unique Paths',
    difficulty: 'Medium',
    label: '',
  },
  63: {
    cnName: '不同路径 II',
    enName: 'Unique Paths II',
    difficulty: 'Medium',
    label: '',
  },
  64: {
    cnName: '最小路径和',
    enName: 'Minimum Path Sum',
    difficulty: 'Medium',
    label: '',
  },
  65: {
    cnName: '有效数字',
    enName: 'Valid Number',
    difficulty: 'Hard',
    label: '',
  },
  66: {
    cnName: '加一',
    enName: 'Plus One',
    difficulty: 'Easy',
    label: '',
  },
  67: {
    cnName: '二进制求和',
    enName: 'Add Binary',
    difficulty: 'Easy',
    label: '',
  },
  68: {
    cnName: '文本左右对齐',
    enName: 'Text Justification',
    difficulty: 'Hard',
    label: '',
  },
  69: {
    cnName: 'x 的平方根',
    enName: 'Sqrt(x)',
    difficulty: 'Easy',
    label: '',
  },
  70: {
    cnName: '爬楼梯',
    enName: 'Climbing Stairs',
    difficulty: 'Easy',
    label: '',
  },
  71: {
    cnName: '简化路径',
    enName: 'Simplify Path',
    difficulty: 'Medium',
    label: '',
  },
  72: {
    cnName: '编辑距离',
    enName: 'Edit Distance',
    difficulty: 'Hard',
    label: '',
  },
  73: {
    cnName: '矩阵置零',
    enName: 'Set Matrix Zeroes',
    difficulty: 'Medium',
    label: '',
  },
  74: {
    cnName: '搜索二维矩阵',
    enName: 'Search a 2D Matrix',
    difficulty: 'Medium',
    label: '',
  },
  75: {
    cnName: '颜色分类',
    enName: 'Sort Colors',
    difficulty: 'Medium',
    label: '',
  },
  76: {
    cnName: '最小覆盖子串',
    enName: 'Minimum Window Substring',
    difficulty: 'Hard',
    label: '',
  },
  77: {
    cnName: '组合',
    enName: 'Combinations',
    difficulty: 'Medium',
    label: '',
  },
  78: {
    cnName: '子集',
    enName: 'Subsets',
    difficulty: 'Medium',
    label: '',
  },
  79: {
    cnName: '单词搜索',
    enName: 'Word Search',
    difficulty: 'Medium',
    label: '',
  },
  80: {
    cnName: '删除排序数组中的重复项 II',
    enName: 'Remove Duplicates from Sorted Array II',
    difficulty: 'Medium',
    label: '',
  },
  81: {
    cnName: '搜索旋转排序数组 II',
    enName: 'Searching Rotated Sorted Array II',
    difficulty: 'Medium',
    label: '',
  },
  82: {
    cnName: '删除排序链表中的重复元素 II',
    enName: 'Remove Duplicate From Sorted List II',
    difficulty: 'Medium',
    label: '',
  },
  83: {
    cnName: '删除排序链表中的重复元素',
    enName: 'Remove Duplicates from Sorted List',
    difficulty: 'Easy',
    label: '',
  },
  84: {
    cnName: '柱状图中最大的矩形',
    enName: 'Largest Rectangle in Histogram',
    difficulty: 'Hard',
    label: '',
  },
  85: {
    cnName: '最大矩形',
    enName: 'Maximal Rectangle',
    difficulty: 'Hard',
    label: '',
  },
  86: {
    cnName: '分隔链表',
    enName: 'Partition List',
    difficulty: 'Medium',
    label: '',
  },
  87: {
    cnName: '扰乱字符串',
    enName: 'Scramble String',
    difficulty: 'Hard',
    label: '',
  },
  88: {
    cnName: '合并两个有序数组',
    enName: 'Merge Sorted Array',
    difficulty: 'Easy',
    label: '',
  },
  89: {
    cnName: '格雷编码',
    enName: 'Gray Code',
    difficulty: 'Medium',
    label: '',
  },
  90: {
    cnName: '子集 II',
    enName: 'Subsets II',
    difficulty: 'Medium',
    label: '',
  },
  91: {
    cnName: '解码方法',
    enName: 'Decode Ways',
    difficulty: 'Medium',
    label: '',
  },
  92: {
    cnName: '反转链表 II',
    enName: 'Reverse Linked List II',
    difficulty: 'Medium',
    label: '',
  },
  93: {
    cnName: '复原 IP 地址',
    enName: 'Restore Ip Address',
    difficulty: 'Medium',
    label: '',
  },
  94: {
    cnName: '二叉树的中序遍历',
    enName: 'Binary Tree Inorder Traversal',
    difficulty: 'Medium',
    label: '',
  },
  95: {
    cnName: '不同的二叉搜索树 II',
    enName: 'Unique Binary Search Trees II',
    difficulty: 'Medium',
    label: '',
  },
  96: {
    cnName: '不同的二叉搜索树',
    enName: 'Unique Binary Search Trees',
    difficulty: 'Medium',
    label: '',
  },
  97: {
    cnName: '交错字符串',
    enName: 'Interleaving String',
    difficulty: 'Medium',
    label: '',
  },
  98: {
    cnName: '验证搜索二叉树',
    enName: 'Validate Binary Search Tree',
    difficulty: 'Medium',
    label: '',
  },
  99: {
    cnName: '恢复搜索二叉树',
    enName: 'Recover Binary Search Tree',
    difficulty: 'Medium',
    label: '',
  },
  100: {
    cnName: '相同的树',
    enName: 'Same Tree',
    difficulty: 'Easy',
    label: '',
  },
  102: {
    cnName: '二叉树的层序遍历',
    enName: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    label: '',
  },
  105: {
    cnName: '从前序与中序遍历序列构造二叉树',
    enName: 'Construct Binary Tree from Preorderand Inorder Traversal',
    difficulty: 'Medium',
    label: '',
  },
  106: {
    cnName: '从中序与后序遍历序列构造二叉树',
    enName: 'Construct Binary Tree from In order and Post order Traversal',
    difficulty: 'Medium',
    label: '',
  },
  107: {
    cnName: '二叉树的层次遍历 II',
    enName: 'Binary Tree Level Order Traversal II',
    difficulty: 'Easy',
    label: '',
  },
  109: {
    cnName: '将有序数组转换为二叉搜索树',
    enName: 'Convert Sorted Array to Binary Search Tree',
    difficulty: 'Medium',
    label: '',
  },
  110: {
    cnName: '平衡二叉树',
    enName: 'Balanced Binary Tree',
    difficulty: 'Easy',
    label: '',
  },
  111: {
    cnName: '二叉树的最小深度',
    enName: 'Minimum Depth of Binary Tree',
    difficulty: 'Easy',
    label: '',
  },
  112: {
    cnName: '路径总和',
    enName: 'Path Sum',
    difficulty: 'Easy',
    label: '',
  },
  113: {
    cnName: '路径总和 II',
    enName: 'Path Sum II',
    difficulty: 'Medium',
    label: '',
  },
  118: {
    cnName: '杨辉三角',
    enName: 'Pascals Triangle',
    difficulty: 'Easy',
    label: '',
  },
  119: {
    cnName: '杨辉三角 II',
    enName: 'Pascals Triangle II',
    difficulty: 'Easy',
    label: '',
  },
  122: {
    cnName: '股票买卖的最佳时机 II',
    enName: 'Best Time to Buy and Sell Stock II',
    difficulty: 'Medium',
    label: '',
  },
  125: {
    cnName: '验证回文串',
    enName: 'Is Palindrome',
    difficulty: 'Easy',
    label: '',
  },
  128: {
    cnName: '最长连续序列',
    enName: 'Longest Consecutive Sequence',
    difficulty: 'Medium	',
    label: '',
  },
  129: {
    cnName: '求根到叶子节点数字之和',
    enName: 'Sum Root to Leaf Numbers',
    difficulty: 'Medium',
    label: '',
  },
  136: {
    cnName: '只出现一次的数字',
    enName: 'Single Number',
    difficulty: 'Easy',
    label: '',
  },
  137: {
    cnName: '只出现一次的数字 II',
    enName: 'Single Number II',
    difficulty: 'Medium',
    label: '',
  },
  141: {
    cnName: '环形链表',
    enName: 'Linked List Cycle',
    difficulty: 'Easy',
    label: '',
  },
  155: {
    cnName: '最小栈',
    enName: 'Min Stack',
    difficulty: 'Easy',
    label: '',
  },
  165: {
    cnName: '比较版本号',
    enName: 'Compare Version Numbers',
    difficulty: 'Easy',
    label: '',
  },
  167: {
    cnName: '两数之和 II',
    enName: 'Two Sum II',
    difficulty: 'Easy',
    label: '',
  },
  169: {
    cnName: '求众数',
    enName: 'Majority Element',
    difficulty: 'Easy',
    label: '',
  },
  171: {
    cnName: '表列序号',
    enName: 'Excel Sheet Column Number Excel',
    difficulty: 'Easy',
    label: '',
  },
  172: {
    cnName: '阶乘后的零',
    enName: 'Factorial Trailing Zeroes',
    difficulty: 'Easy',
    label: '',
  },
  189: {
    cnName: '旋转数组',
    enName: 'Rotate Array',
    difficulty: 'Easy',
    label: '',
  },
  190: {
    cnName: '颠倒二进制位',
    enName: 'Reverse Bits',
    difficulty: 'Easy',
    label: '',
  },
  191: {
    cnName: '位 1 的个数',
    enName: 'Number of 1 Bits',
    difficulty: 'Easy',
    label: '',
  },
  198: {
    cnName: '打家劫舍',
    enName: 'House Robber ',
    difficulty: 'Easy',
    label: '',
  },
  199: {
    cnName: '二叉树的右视图',
    enName: 'Binary Tree Right Side View',
    difficulty: 'Medium',
    label: '',
  },
  202: {
    cnName: '快乐数',
    enName: 'Happy Number',
    difficulty: 'Easy',
    label: '',
  },
  203: {
    cnName: '删除链表中的元素',
    enName: 'Remove Linked List Elements',
    difficulty: 'Easy',
    label: '',
  },
  204: {
    cnName: '计数质数',
    enName: 'Count Primes',
    difficulty: 'Easy',
    label: '',
  },
  205: {
    cnName: '同构字符串',
    enName: 'Isomorphic Strings',
    difficulty: 'Easy',
    label: '',
  },
  206: {
    cnName: '反转链表',
    enName: 'Reverse Linked List',
    difficulty: 'Easy',
    label: '',
  },
  217: {
    cnName: '存在重复元素',
    enName: 'Contains Duplicate',
    difficulty: 'Easy',
    label: '',
  },
  219: {
    cnName: '存在重复元素 II',
    enName: 'Contains Nearby Duplicate',
    difficulty: 'Easy',
    label: '',
  },
  225: {
    cnName: '用队列实现栈',
    enName: 'Implement Stack using Queues',
    difficulty: 'Easy',
    label: '',
  },
  231: {
    cnName: '2 的幂',
    enName: 'Power of Two',
    difficulty: 'Easy',
    label: '',
  },
  232: {
    cnName: '用栈实现队列',
    enName: 'Implement Queue using Stacks',
    difficulty: 'Easy',
    label: '',
  },
  233: {
    cnName: '数字 1 的个数',
    enName: 'Number of Digit One',
    difficulty: 'Hard',
    label: '',
  },
  236: {
    cnName: '二叉树的最近公共祖先',
    enName: 'Lowest Common Ancestor of a Binary Tree',
    difficulty: 'Medium',
    label: '',
  },
  238: {
    cnName: '除自身以外数组的乘积',
    enName: 'Product of Array Except Self',
    difficulty: 'Medium',
    label: '',
  },
  242: {
    cnName: '有效的字母异位词',
    enName: 'Valid Anagram',
    difficulty: 'Easy',
    label: '',
  },
  257: {
    cnName: '二叉树的所有路径',
    enName: 'Binary Tree Paths',
    difficulty: 'Easy',
    label: '',
  },
  258: {
    cnName: '各位相加',
    enName: 'Add Digits',
    difficulty: 'Easy',
    label: '',
  },
  260: {
    cnName: '只出现一次的数字 III',
    enName: 'Single Number III',
    difficulty: 'Medium',
    label: '',
  },
  263: {
    cnName: '丑数',
    enName: 'Ugly Number',
    difficulty: 'Easy',
    label: '',
  },
  268: {
    cnName: '缺失数字',
    enName: 'Missing Number',
    difficulty: 'Easy',
    label: '',
  },
  274: {
    cnName: 'H 指数',
    enName: 'H-Index',
    difficulty: 'Medium',
    label: '',
  },
  278: {
    cnName: '第一个错误的版本',
    enName: 'First Bad Version',
    difficulty: 'Easy',
    label: '',
  },
  283: {
    cnName: '移动零',
    enName: 'Move Zeroes',
    difficulty: 'Easy',
    label: '',
  },
  287: {
    cnName: '寻找重复数',
    enName: 'Find the Duplicate Number',
    difficulty: 'Medium',
    label: '',
  },
  290: {
    cnName: '单词规律',
    enName: 'Word Pattern',
    difficulty: 'Easy',
    label: '',
  },
  295: {
    cnName: '数据流的中位数',
    enName: 'Find Median from Data Stream',
    difficulty: 'Hard',
    label: '',
  },
  297: {
    cnName: '二叉树的序列化与反序列化',
    enName: 'Serialize and Deserialize Binary Tree',
    difficulty: 'Hard',
    label: '',
  },
  300: {
    cnName: '最长上升子序列',
    enName: 'Longest Increasing Subsequence',
    difficulty: 'Medium',
    label: '',
  },
  303: {
    cnName: '区域和检索-数组不可变',
    enName: 'Range Sum Query-Immutable',
    difficulty: 'Easy',
    label: '',
  },
  326: {
    cnName: '3 的幂',
    enName: 'Power of Three',
    difficulty: 'Easy',
    label: '',
  },
  338: {
    cnName: '比特位计数',
    enName: 'Counting Bits',
    difficulty: 'Easy',
    label: '',
  },
  342: {
    cnName: '4 的幂',
    enName: 'Power of Four',
    difficulty: 'Easy',
    label: '',
  },
  343: {
    cnName: '整数拆分',
    enName: 'Integer Break',
    difficulty: 'Medium',
    label: '',
  },
  344: {
    cnName: '反转字符串',
    enName: 'Reverse String',
    difficulty: 'Easy',
    label: '',
  },
  349: {
    cnName: '两个数组的交集',
    enName: 'Intersection of Two Arrays',
    difficulty: 'Easy',
    label: '',
  },
  350: {
    cnName: '两个数组的交集 II',
    enName: 'Intersection of Two Arrays II',
    difficulty: 'Easy',
    label: '',
  },
  371: {
    cnName: '两个整数相加',
    enName: 'Sum of Two Integers',
    difficulty: 'Easy',
    label: '',
  },
  373: {
    cnName: '查找和最小的 K 对数字',
    enName: 'Find K Pairs with Smallest Sums',
    difficulty: 'Medium',
    label: '',
  },
  377: {
    cnName: '组合总和 Ⅳ',
    enName: 'Combination Sum IV',
    difficulty: 'Medium',
    label: '',
  },
  383: {
    cnName: '赎金信',
    enName: 'Ransom Note',
    difficulty: 'Easy',
    label: '',
  },
  387: {
    cnName: '字符串中的第一个唯一字符',
    enName: 'First Unique Character in a String',
    difficulty: 'Easy',
    label: '',
  },
  389: {
    cnName: '找不同',
    enName: 'Find The Difference',
    difficulty: 'Easy',
    label: '',
  },
  392: {
    cnName: '判断子序列',
    enName: 'Is Subsequence',
    difficulty: 'Easy',
    label: '',
  },
  394: {
    cnName: '字符串解码',
    enName: 'Decode String',
    difficulty: 'Medium',
    label: '',
  },
  400: {
    cnName: '第 N 个数字',
    enName: 'Find Nth Digit',
    difficulty: 'Medium',
    label: '',
  },
  405: {
    cnName: '转 16 进制',
    enName: 'Convert a Number to Hexadecimal',
    difficulty: 'Easy',
    label: '',
  },
  409: {
    cnName: '最长回文串',
    enName: 'Longest Palindrome',
    difficulty: '',
    label: '',
  },
  414: {
    cnName: '第三大的数',
    enName: 'Third Maximum Number',
    difficulty: 'Easy',
    label: '',
  },
  438: {
    cnName: '找到字符串中所有字母异位词',
    enName: 'Find All Anagrams in a String',
    difficulty: 'Medium',
    label: '',
  },
  448: {
    cnName: '找到所有数组中消失的数字',
    enName: 'Find All Numbers Disappeared in an Array',
    difficulty: 'Easy',
    label: '',
  },
  455: {
    cnName: '分发饼干',
    enName: 'Assign Cookies',
    difficulty: 'Easy',
    label: '',
  },
  458: {
    cnName: '可怜的小猪',
    enName: 'Poor Pigs',
    difficulty: 'Hard',
    label: '',
  },
  459: {
    cnName: '重复的子字符串',
    enName: 'Repeated Substring Pattern',
    difficulty: 'Easy',
    label: '',
  },
  464: {
    cnName: '我能赢吗',
    enName: 'Can I Win',
    difficulty: 'Easy',
    label: '',
  },
  485: {
    cnName: '最大连续 1 的个数',
    enName: 'Find Max Consecutive Ones',
    difficulty: 'Easy',
    label: '',
  },
  509: {
    cnName: '斐波那契数',
    enName: 'Fibonacci',
    difficulty: 'Easy',
    label: '',
  },
  529: {
    cnName: '扫雷游戏',
    enName: 'Minesweeper',
    difficulty: 'Medium',
    label: '',
  },
  541: {
    cnName: '反转字符串 II',
    enName: 'Reverse String II',
    difficulty: 'Easy',
    label: '',
  },
  551: {
    cnName: '学生出勤记录 I',
    enName: 'Student Attendance Record I',
    difficulty: 'Easy',
    label: '',
  },
  552: {
    cnName: '学生出勤记录 II',
    enName: 'Student Attendance Record II',
    difficulty: 'Hard',
    label: '',
  },
  560: {
    cnName: '和为 k 的子数组',
    enName: 'Subarray Sum Equals K',
    difficulty: 'Medium',
    label: '',
  },
  561: {
    cnName: '数组拆分',
    enName: 'Array Partition',
    difficulty: 'Easy',
    label: '',
  },
  581: {
    cnName: '最短无序连续子数组',
    enName: 'Shortest Unsorted Continuous Subarray',
    difficulty: 'Easy',
    label: '',
  },
  606: {
    cnName: '根据二叉树创建字符串',
    enName: 'Construct String from Binary Tree',
    difficulty: 'Easy',
    label: '',
  },
  628: {
    cnName: '三个数的最大乘积',
    enName: 'Maximum Product of Three Numbers',
    difficulty: 'Easy',
    label: '',
  },
  642: {
    cnName: '设计搜索自动补全系统',
    enName: 'Palindromic Substrings',
    difficulty: 'Medium',
    label: '',
  },
  643: {
    cnName: '子数组最大平均数 I',
    enName: 'Maximum Average Subarray I',
    difficulty: 'Easy',
    label: '',
  },
  653: {
    cnName: '两数之和 IV-输入 BST',
    enName: 'Two Sum IV - Input is a BST',
    difficulty: 'Easy',
    label: '',
  },
  665: {
    cnName: '非递减数列',
    enName: 'Non-decreasing Array',
    difficulty: 'Easy',
    label: '',
  },
  668: {
    cnName: '乘法表中的第 K 小的数',
    enName: 'Kth Smallest Number in Multiplication Table',
    difficulty: 'Hard',
    label: '',
  },
  680: {
    cnName: '验证回文串 II',
    enName: 'Valid Palindrome II',
    difficulty: 'Easy',
    label: '',
  },
  703: {
    cnName: '数据流中的第 K 大元素',
    enName: 'Kth Largest Element in a Stream',
    difficulty: 'Easy',
    label: '',
  },
  704: {
    cnName: '二分查找',
    enName: 'Binary Search',
    difficulty: 'Easy',
    label: '',
  },
  709: {
    cnName: '转换成小写字母',
    enName: 'To Lower Case',
    difficulty: 'Easy',
    label: '',
  },
  720: {
    cnName: '词典中最长的单词',
    enName: 'Longest Word in Dictionary',
    difficulty: 'Easy',
    label: '',
  },
  724: {
    cnName: '寻找数组的中心索引',
    enName: 'Find Pivot Index',
    difficulty: 'Easy',
    label: '',
  },
  746: {
    cnName: '使用最小花费爬楼梯',
    enName: 'Min Cost Climbing Stairs',
    difficulty: 'Easy',
    label: '',
  },
  747: {
    cnName: '至少是其他数字两倍的最大数',
    enName: 'Largest Number At Least Twice of Others',
    difficulty: 'Easy',
    label: '',
  },
  778: {
    cnName: '水位上升的泳池中游泳',
    enName: 'Swim In Rising Water',
    difficulty: 'Hard',
    label: '',
  },
  784: {
    cnName: '字母大小写全排列',
    enName: 'Letter Case Permutation',
    difficulty: 'Medium',
    label: '',
  },
  814: {
    cnName: '二叉树剪枝',
    enName: 'Binary Tree Pruning',
    difficulty: 'Medium',
    label: '',
  },
  905: {
    cnName: '按奇偶排序数组',
    enName: 'Sort Array By Parity',
    difficulty: 'Easy',
    label: '',
  },
  929: {
    cnName: '独特的电子邮件地址',
    enName: 'Num Unique Emails',
    difficulty: 'Easy',
    label: '',
  },
  933: {
    cnName: '最近的请求次数',
    enName: 'Number of Recent Calls',
    difficulty: 'Easy',
    label: '',
  },
  942: {
    cnName: '增减字符串匹配',
    enName: 'DI String Match',
    difficulty: 'Easy',
    label: '',
  },
  946: {
    cnName: '验证栈序列',
    enName: 'Validate Stack Sequences',
    difficulty: 'Medium',
    label: '',
  },
  953: {
    cnName: '验证外星语词典',
    enName: 'Verifying an Alien Dictionary',
    difficulty: 'Easy',
    label: '',
  },
  965: {
    cnName: '单值二叉树',
    enName: 'Univalued Binary Tree',
    difficulty: 'Easy',
    label: '',
  },
  974: {
    cnName: '和可被 K 整除的子数组',
    enName: 'Subarray Sums Divisible by K',
    difficulty: 'Medium',
    label: '',
  },
  977: {
    cnName: '有序数组的平方',
    enName: 'Squares of a Sorted Array',
    difficulty: 'Easy',
    label: '',
  },
  989: {
    cnName: '数组形式的整数加法',
    enName: 'Add to Array-Form of Integer',
    difficulty: 'Easy',
    label: '',
  },
  994: {
    cnName: '腐烂的橘子',
    enName: 'Rotting Oranges',
    difficulty: 'Medium',
    label: '',
  },
  1002: {
    cnName: '查找常用字符',
    enName: 'Find Common Characters',
    difficulty: 'Easy',
    label: '',
  },
  1021: {
    cnName: '删除最外层的括号',
    enName: 'Remove Outer Parentheses',
    difficulty: 'Easy',
    label: '',
  },
  1022: {
    cnName: '从根到叶的二进制数之和',
    enName: 'Sum of Root To Leaf Binary Numbers',
    difficulty: 'Easy',
    label: '',
  },
  1108: {
    cnName: 'IP 地址无效化',
    enName: 'Defanging an Ip Address',
    difficulty: 'Easy',
    label: '字符串',
  },
  1122: {
    cnName: '数组的相对排序',
    enName: 'Relative Sort Array',
    difficulty: 'Easy',
    label: '',
  },
  1137: {
    cnName: '第 N 个泰波那契数',
    enName: 'N-th Tribonacci Number',
    difficulty: 'Easy',
    label: '',
  },
  1143: {
    cnName: '最长公共子序列',
    enName: 'Longest Common Subsequence',
    difficulty: 'Medium',
    label: '',
  },
  1200: {
    cnName: '最小绝对差',
    enName: 'Minimum Abs Difference',
    difficulty: 'Easy',
    label: '',
  },
  1217: {
    cnName: '玩筹码',
    enName: 'Minimum Cost to Move Chips to The Same Position',
    difficulty: 'Easy',
    label: '',
  },
  1260: {
    cnName: '二维网格迁移',
    enName: 'Shift 2D Grid',
    difficulty: 'Easy',
    label: '',
  },
  1289: {
    cnName: '下降路径最小和 II',
    enName: 'Minimum Falling Path Sum II',
    difficulty: 'Hard',
    label: '',
  },
  1365: {
    cnName: '有多少小于当前数字的数字',
    enName: 'How Many Numbers Are Smaller Than the Current Number',
    difficulty: 'Easy',
    label: '',
  },
  1388: {
    cnName: '3n 块披萨',
    enName: 'Pizza With 3n Slices',
    difficulty: 'Hard',
    label: '',
  },
  1413: {
    cnName: '逐步求和得到正数的最小值',
    enName: 'Minimum Value to Get Positive Step by Step Sum',
    difficulty: 'Easy',
    label: '',
  },
  1431: {
    cnName: '拥有最多糖果的孩子',
    enName: 'Kids With the Greatest Number of Candies',
    difficulty: 'Easy',
    label: '',
  },
  1572: {
    cnName: '矩阵对角线的元素和',
    enName: 'Matrix Diagonal Sum',
    difficulty: 'Easy',
    label: '',
  },
  1640: {
    cnName: '能否连接成数组',
    enName: 'Check Array Formation Through Concatenation',
    difficulty: 'Easy',
    label: '',
  },
  1823: {
    cnName: '找出游戏的获胜者',
    enName: 'Find The Winner',
    difficulty: 'Medium',
    label: '',
  },
  1945: {
    cnName: '字符串转化后的各位数字之和',
    enName: 'Sum of Digits of String After Convert',
    difficulty: 'Easy',
    label: '',
  },
  2038: {
    cnName: '如果相邻两个颜色均相同则删除当前颜色',
    enName: 'Remove Colored Pieces if Both Neighbors are the Same Color',
    difficulty: 'Medium',
    label: '',
  },
  2512: {
    cnName: '奖励最顶尖的 K 名学生',
    enName: 'Reward Top K Students',
    difficulty: 'Medium',
    label: '',
  },
  2578: {
    cnName: '最小和分割',
    enName: 'Split With Minimum Sum',
    difficulty: 'Easy',
    label: '贪心',
  },
  2652: {
    cnName: '倍数求和',
    enName: 'Sum Multiples',
    difficulty: 'Easy',
    label: '哈希表',
  },
  2732: {
    cnName: '移动机器人',
    enName: 'Movement of Robots',
    difficulty: 'Medium',
    label: '脑筋急转弯',
  },
};

module.exports = nameMap;
