var minWindow = function (s, t) {
  let recordMap = new Map(),
    wordCount = 0;
  for (let i = 0; i < t.length; i++) {
    let val = recordMap.get(t[i]);
    if (val) {
      recordMap.set(t[i], val + 1);
    } else {
      recordMap.set(t[i], 1);
      wordCount += 1;
    }
  }
  let left = 0,
    right = 0,
    result = '',
    tempResult = '';

  while (right <= s.length) {
    if (wordCount > 0) {
      tempResult = tempResult + s[right];
      let temp = recordMap.get(s[right]);
      if (temp !== undefined) {
        recordMap.set(s[right], temp - 1);
        if (temp - 1 === 0) {
          wordCount -= 1;
        }
      }
      right++;
    } else {
      if (result === '' || tempResult.length < result.length) {
        result = tempResult;
      }
      let temp = recordMap.get(s[left]);
      if (temp !== undefined) {
        recordMap.set(s[left], temp + 1);
        if (temp === 0) {
          wordCount += 1;
        }
      }
      tempResult = tempResult.slice(1);
      left++;
    }
  }
  return result;
};
