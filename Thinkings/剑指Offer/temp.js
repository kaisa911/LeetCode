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
// 18
const deleteNode = (head, val) => {
  if (!head) return null;
  if (head.val === val) return head.next;

  const res = head;
  while (head && head.val) {
    if (head.val !== val) {
      head = head.next;
    } else {
      head = head.next.next;
    }
  }
  return res;
};
// 20
const isNumber = (s) => {
  let i,
    len,
    numFlag = false,
    dotFlag = false,
    eFlag = false;
  s = s.trim(); // 去掉首尾空格
  len = s.length; // 去掉后再重新计算长度
  for (i = 0; i < len; i++) {
    // 如果是数字，那么直接将 numFlag 变为 true 即可
    if (s[i] >= '0' && s[i] <= '9') {
      numFlag = true;
    } else if (s[i] === '.' && !dotFlag && !eFlag) {
      // 如果是 .  那必须前面还出现过 .  且前面没出现过 e/E，因为如果前面出现过 e/E 再出现. 说明 e/E 后面跟着小数，不符合题意
      dotFlag = true;
    } else if ((s[i] === 'e' || s[i] === 'E') && !eFlag && numFlag) {
      // 如果是 e 或 E，那必须前面没出现过 e/E，且前面出现过数字
      eFlag = true;
      numFlag = false; // 这一步很重要，将是否出现过数字的 Flag 置为 false，防止出现 123E 这种情况，即出现 e/E 后，后面没数字了
    } else if ((s[i] === '+' || s[i] === '-') && (i === 0 || s[i - 1] === 'e' || s[i - 1] === 'E')) {
      // 如果是 +/- 那必须是在第一位，或是在 e/E 的后面
    } else {
      // 上面情况都不满足，直接返回 false 即可，提前剪枝
      return false;
    }
  }
  return numFlag;
};

// 21
const exchange = (nums) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    while (left < right && nums[left] % 2 === 1) {
      left += 1;
    }
    while (right > left && nums[right] % 2 === 0) {
      right -= 1;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
};
// 22
const getKthFromEnd = (head, k) => {
  const origin = head;
  while (k > 0) {
    head = head.next;
    k -= 1;
  }
  while (head) {
    head = head.next;
    origin = origin.next;
  }
  return origin;
};
// 24
const reverseList = (head) => {
  let pre = null,
    cur = head,
    next = null;

  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};
// 25
const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) return null;
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;

  let res = new ListNode(-1);
  let cur = res.next;

  while (l1 && l2) {
    if (l1.val >= l2.val) {
      cur.val = l1.val;
      l1 = l1.next;
    } else {
      cur.val = l2.val;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 === null ? l2 : l1;
  return res.next;
};
// 26
const isSubStructure = (A, B) => {
  if (!A || !B) return false;
  const dfs = (A, B) => {
    if (!B) return true;
    if (!A) return false;
    return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right);
  };
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
// 27
const mirrorTree = (root) => {
  if (!node) return null;
  const tempNode = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(tempNode);
  return root;
};
// 28
const isSymmetric = (root) => {
  if (root === null) return true;
  const helper = (a, b) => {
    if (a === null || b === null) return a === b;
    if (a.val !== b.val) return false;
    return helper(a.left, b.right) && helper(a.right, b.left);
  };

  return helper(root.left, root.right);
};
// 29
const spiralOrder = (matrix) => {
  if (!matrix.length || !matrix[0].length) return [];
  const res = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const sum = rows * cols - 1;
  let left = 0,
    right = cols - 1,
    top = 0,
    bottom = rows - 1;

  while (res.length < sum) {
    for (let col = 0; col <= right; col++) {
      res.push(matrix[top][col]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[right][row]);
    }

    if (left < right && top < bottom) {
      for (let col = right - 1; col >= left; col--) {
        res.push(matrix[bottom][col]);
      }
      for (let row = bottom; row > top; row--) {
        res.push(matrix[left][row]);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return res;
};
// 31
const validateStackSequences = (pushed, popped) => {
  const stack = [];
  const n = pushed.length;
  for (let i = 0, j = 0; i < n; i++) {
    stack.push(pushed[i]);
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }
  return stack.length === 0;
};
