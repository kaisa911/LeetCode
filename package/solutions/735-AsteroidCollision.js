var asteroidCollision = function (asteroids) {
  const stack = [];
  for (const aster of asteroids) {
    while (
      stack.length &&
      aster < 0 &&
      stack[stack.length - 1] > 0 &&
      stack[stack.length - 1] < -aster
    ) {
      stack.pop();
    }
    if (stack.length === 0 || aster > 0 || (aster < 0 && stack[stack.length - 1] < 0)) {
      stack.push(aster);
    } else if (aster < 0 && stack[stack.length - 1] === -aster) {
      stack.pop();
    }
  }
  return stack;
};
