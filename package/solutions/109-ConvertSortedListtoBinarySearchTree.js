function sortedListToBST(head) {
  if (!head) return null;

  // 找到链表的长度
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  // 定义递归函数
  function convert(start, end) {
    if (start === end) return new TreeNode(head.val);

    const mid = start + (end - start) / 2;
    const prev = start;
    while (prev !== mid) {
      prev = prev.next;
    }

    const node = new TreeNode(prev.next.val);
    node.left = convert(start, mid);
    node.right = convert(mid + 1, end);
    prev.next = null; // 切断链表，避免循环引用

    return node;
  }

  return convert(0, length - 1);
}
