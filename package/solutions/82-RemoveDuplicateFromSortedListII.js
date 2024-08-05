var deleteDuplicates = function (head) {
  let pivot = new ListNode(0);
  pivot.next = head;
  let fast = head;
  let slow = pivot;

  while (fast && fast.next) {
    if (fast.val === fast.next.val) {
      let sameValue = fast.val;
      while (fast && fast.val === sameValue) {
        fast = fast.next;
      }
      slow.next = fast;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return pivot.next;
};
