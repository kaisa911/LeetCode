const path = require('path');
const fs = require('fs');
const renderReadme = require('./renderReadme.js');
const create = require('./create.js');
const sort = require('./sort.js');

const result = { solution: {}, thinking: {} };
const solution = fs.readdirSync(path.join(__dirname, '../Solutions'), {
  withFileTypes: true,
});
const thinking = fs.readdirSync(path.join(__dirname, '../Thinkings'), {
  withFileTypes: true,
});

for (let i = 0; i < solution.length; i++) {
  result.solution[solution[i].name] = fs.readdirSync(
    path.join(__dirname, `../Solutions/${solution[i].name}`)
  ).length;
}
for (let i = 0; i < thinking.length; i++) {
  result.thinking[thinking[i].name] = fs.readdirSync(
    path.join(__dirname, `../Thinkings/${solution[i].name}`)
  ).length;
}

const sum = Object.values(result.solution).reduce(
  (sum, solution) => (sum += solution),
  0
);
const thinkSum = Object.values(result.thinking).reduce(
  (sum, solution) => (sum += solution),
  0
);

result.sum = sum;
result.thinkSum = thinkSum;
renderReadme(result);

if (process.argv[2] === '-c') {
  if (process.argv[3]) {
    create(+process.argv[3]);
  }
}

sort();
