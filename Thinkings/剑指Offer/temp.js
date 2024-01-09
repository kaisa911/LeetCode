// 03
const findRepeatNumber = (nums) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      continue;
    } else {
      return nums[i];
    }
  }
};
// 04
const findNumberIn2DArray = (matrix, target) => {
  if (!matrix.length || (matrix.length && !matrix[0].length)) {
    return false;
  }
  const row = matrix.length - 1;
  const col = 0;

  while (row >= 0 && col < matrix[0].length - 1) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      col++;
    } else {
      row--;
    }
  }
  return false;
};
// 05
const replaceSpace = (s) => {
  const res = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      res.push('%20');
    } else {
      res.push(s[i]);
    }
  }
  return res.join('');
};
// 06
const reversePrint = (head) => {
  if (head === null) return [];
  const res = [];
  while (head !== null) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
};
// 07
const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null;
  const tree = new TreeNode(preorder.shift());
  const index = inorder.findIndex((item) => item === tree.val);
  const left = inorder.slice(0, index);
  const right = inorder.slice(index + 1);
  tree.left = buildTree(preorder, left);
  tree.right = buildTree(preorder, right);
  return tree;
};

// 09
class cQueue {
  stack1 = [];
  stack2 = [];

  appendTail(val) {
    this.stack1.push(val);
  }
  deleteHead() {
    if (!this.stack2.length) {
      if (!this.stack1.length) return null;

      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    } else {
      return this.stack2.pop();
    }
  }
}

// 10(1)
const fib = (n) => {
  const res = [0, 1, 1];
  if (res > 2) {
    for (let i = 2; i <= n; i++) {
      res[i] = res[i - 1] + res[i - 2];
    }
  }

  return res[n];
};

// 10(2)
const numWays = (n) => {
  const res = [1, 1, 2];
  if (n > 2) {
    for (let i = 2; i <= n; i++) {
      res[i] = res[i - 1] + res[i - 2];
    }
  }
  return res[n];
};

// 11
var minArray = (numbers) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const pivot = Math.floor((left + right) / 2);

    if (numbers[pivot] < numbers[right]) {
      right = pivot;
    } else if (numbers[pivot] > numbers[right]) {
      left = pivot + 1;
    } else {
      right -= 1;
    }
  }
  return numbers[left];
};

// 12
const exist = (board, word) => {
  if (!board.length || !board[0].length || !word.length) return false;
  let res = false;
  const row = board.length;
  const col = board[0].length;

  const dfs = (i, j, word) => {
    if (res) return;
    if (word === '') {
      res = true;
      return;
    }
    if (board[i][j] !== word) return;
    if (i < 0 || i > row - 1 || j < 0 || j > col - 1) return;

    const temp = board[i][j];
    board[i][j] = '';
    const newWord = word.slice(1);
    dfs(i + 1, j, newWord);
    dfs(i - 1, j, newWord);
    dfs(i, j + 1, newWord);
    dfs(i, j - 1, newWord);
    board[i][j] = temp;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, word);
      }
    }
  }
  return res;
};

// 13
const movingCount = (m, n, k) => {
  if (m <= 0 || n <= 0 || k < 0) return -1;
  const getNum = (num) => {
    return [...String(num)].reduce((a, b) => +a + +b, 0);
  };

  const res = 0;
  const memo = [];

  const dfs = (i, j) => {
    if (memo[i][j]) return;
    if (i >= m || j >= n) return;
    if (getNum(i) + getNum(j) > k) {
      memo[i][j] = true;
      return;
    }
    memo[i][j] = true;
    res += 1;
    dfs(i, j + 1);
    dfs(i + 1, j);
  };

  dfs(0, 0);
  return res;
};

// 14(1)
const cuttingRope = (n) => {
  if (n === 1 || n === 2) return 1;
  if (n === 3) return 2;
  let res = 1;

  while (n > 4) {
    res *= 3;
    n = n - 3;
  }
  return res * n;
};

// 15
const hammingWeight = (n) => {
  return n.toString(2).split('1').length - 1;
};

// 16
const myPow = (x, n) => {
  let res = 1.0;
  const t = n;
  while (n) {
    if (n & 1) res * x;
    x *= x;
    n >>> 1;
  }
  return t > 0 ? res : 1.0 / res;
};

// 17
const printNumbers = (n) => {
  const max = Math.pow(10, n) - 1;
  const res = [];
  for (let i = 0; i < max; i++) {
    res[i] = i + 1;
  }
  return res;
};
