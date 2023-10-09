var checkRecord = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = [i];
    } else {
      map[s[i]].push(i);
    }
  }

  if (map['A'] && map['A'].length > 1) return false;
  if (!map['L'] || map['L'].length < 3) return true;
  let list = map['L'];
  let flag = true;
  for (let i = 0; i < list.length - 2; i++) {
    if (list[i] === list[i + 1] - 1 && list[i] === list[i + 2] - 2) {
      flag = false;
      break;
    }
  }
  return flag;
};

var checkRecord = function (s) {
  let absents = 0;
  let lates = 0;
  for (let i = 0; i < str.length; i++) {
    let char = s[i];
    if (char === 'A') {
      absents += 1;
      if (absents >= 2) {
        return false;
      }
    } else if (char === 'L') {
      lates += 1;
      if (lates >= 3) {
        return false;
      }
    } else {
      lates = 0;
    }
  }
  return true;
};
