var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  // Step 1: Find the middle of the linked list
  let slow = head,
    fast = head,
    prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let secondHalf = reverse(slow);
  let firstHalf = head;

  // Step 3: Compare the first half and the reversed second half
  let isPalindrome = true;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      isPalindrome = false;
      break;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  // Restore the original linked list
  slow = prev ? prev.next : head;
  reverse(slow);

  return isPalindrome;
};

function reverse(head) {
  let prev = null,
    curr = head;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
