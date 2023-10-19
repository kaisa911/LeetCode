var reverseWords = function (s) {
  let list = s.trim().split(/\s+/);
  let left = 0,
    right = list.length - 1;

  for (; left <= right; left++, right--) {
    [list[left], list[right]] = [list[right], list[left]];
  }

  return list.join(' ');
};
