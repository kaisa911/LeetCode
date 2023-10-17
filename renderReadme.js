const fs = require('fs');
const path = require('path');
const nameMap = require('./name.js');

const result = {};
const solution = fs.readdirSync(path.join(__dirname, './Solutions'), {
  withFileTypes: true,
});
const thinking = fs.readdirSync(path.join(__dirname, './Thinkings'), {
  withFileTypes: true,
});

for (let i = 0; i < solution.length; i++) {
  result[solution[i].name] = fs.readdirSync(
    path.join(__dirname, `./Solutions/${solution[i].name}`)
  );
}

for (let i = 0; i < thinking.length; i++) {
  const list = fs.readdirSync(
    path.join(__dirname, `./Thinkings/${thinking[i].name}`)
  );
  for (let j = 0; j < list.length; j++) {
    const index = result[thinking[i].name].findIndex(
      (item) => item.split('-')[0] === list[j].split('-')[0]
    );
    if (index !== -1) {
      result[thinking[i].name][index] = list[j];
    }
  }
}

const sortTable = [];
const offerTable = [];

Object.keys(result).map((key) => {
  if (key === '剑指Offer') {
    result[key].forEach((item) => {
      offerTable.push({
        index: item.split('-')[0],
        name: item,
        difficulty: '剑指Offer',
        label: '',
      });
    });
  } else {
    result[key].forEach((item) => {
      sortTable.push({
        index: item.split('-')[0],
        name: item,
        difficulty: key,
        label: '',
      });
    });
  }
});

sortTable.sort((a, b) => a.index - b.index);
offerTable.sort((a, b) => a.index - b.index);

const tableHeader = `| Number | Name | Difficulty | label |
|----|:--:|:------:|:-------:| `;
const tableBody = sortTable.map((item) => {
  const { index, name, difficulty } = item;
  const temp = name.split('-')[1];
  const showName = temp
    .split('.')[0]
    .split(/(?=[A-Z])/)
    .join(' ');
  const flag = temp.split('.')[1];
  return `| ${index} | [${showName} ${
    nameMap[index] || ''
  }](https://github.com/kaisa911/LeetCode/blob/master/${
    flag === 'md' ? 'Thinkings' : 'Solutions'
  }/${difficulty}/${name}) | ${difficulty} | |`;
});

const tableBody2 = offerTable.map((item) => {
  const { index, name, difficulty } = item;
  const temp = name.split('-')[1];
  const showName = temp.split('.')[0].split('~');
  const flag = temp.split('.')[1];
  return `| ${index} | [${
    showName[0]
  }](https://github.com/kaisa911/LeetCode/blob/master/${
    flag === 'md' ? 'Thinkings' : 'Solutions'
  }/${difficulty}/${name}) | ${showName[1]} | |`;
});

const content = (result) => `
# 刷题记录

some exercises of leetcode

- leetcode：简单：${result.solution.Easy}，中等：${
  result.solution.Medium
}，困难：${result.solution.Hard}，剑指Offer：${result.solution['剑指Offer']},
- 总计：${result.sum}

\`\`\`mermaid
pie title 已完成的题目
    "简单" : ${result.solution.Easy}
    "中等" : ${result.solution.Medium}
    "困难" : ${result.solution.Hard}
    "剑指Offer：" : ${result.solution['剑指Offer']}

\`\`\`

${tableHeader}
${tableBody.join('\n')}

**剑指offer**

${tableHeader}
${tableBody2.join('\n')}
`;

const renderReadme = (result) => {
  fs.writeFileSync('README.md', content(result), { flag: 'w+' }, (error) => {
    console.log(error);
  });
};

module.exports = renderReadme;
