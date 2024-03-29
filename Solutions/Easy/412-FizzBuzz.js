var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    const sb = [];
    if (i % 3 === 0) {
      sb.push('Fizz');
    }
    if (i % 5 === 0) {
      sb.push('Buzz');
    }
    if (sb.length === 0) {
      sb.push(i);
    }
    answer.push(sb.join(''));
  }
  return answer;
};
