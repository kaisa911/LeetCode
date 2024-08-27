const fs = require('fs');
const path = require('path');
const nameMap = require('./name.js');

const result = {};
const solution = fs
  .readdirSync(path.join(__dirname, '../Solutions'), {
    withFileTypes: true,
  })
  .filter((item) => item.isDirectory());
const thinking = fs
  .readdirSync(path.join(__dirname, '../Thinkings'), {
    withFileTypes: true,
  })
  .filter((item) => item.isDirectory());
for (let i = 0; i < solution.length; i++) {
  result[solution[i].name] = fs.readdirSync(
    path.join(__dirname, `../Solutions/${solution[i].name}`)
  );
}

for (let i = 0; i < thinking.length; i++) {
  const list = fs.readdirSync(path.join(__dirname, `../Thinkings/${thinking[i].name}`));
  for (let j = 0; j < list.length; j++) {
    const index = result[thinking[i].name].findIndex(
      (item) => item.split('-')[0] === list[j].split('-')[0]
    );
    if (index !== -1) {
      result[thinking[i].name][index] = list[j];
    }
  }
}

const sortTable = Object.keys(nameMap);
const offerTable = [];
const indexList = [...result.Easy, ...result.Medium, ...result.Hard].map(
  (item) => item.split('-')[0]
);
let noSolutionList = Object.keys(nameMap).filter((item) => {
  if (nameMap[item].checked) return false;
  if (nameMap[item].hasThinkings) return false;
  if (indexList.includes(item)) return false;
  return true;
});

const difficultyList = [];

const hasNameNoSolution = [...noSolutionList].filter((item) => nameMap[item]?.cnName !== '');
const top5Question = [...hasNameNoSolution];

while (top5Question.length > 5) {
  top5Question.splice(top5Question.length - 1, 1);
}

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
  }
});

sortTable.sort((a, b) => a.index - b.index);
offerTable.sort((a, b) => a.index - b.index);

const tableHeader = `| Number | Name | Difficulty | label |
|----|:--:|:------:|:-------:| `;
const tableBody = sortTable.map((item) => {
  const { cnName, enName, difficulty, checked, label, hasThinkings } = nameMap[item];

  const fileName = `${item}-${enName.split(' ').join('')}`;
  const route =
    checked !== true
      ? `https://github.com/kaisa911/LeetCode/blob/master/${
          hasThinkings ? 'Thinkings' : 'Solutions'
        }/${difficulty}/${fileName}${!hasThinkings ? '.js' : '.md'}`
      : `https://github.com/kaisa911/LeetCode/blob/master/package/${
          hasThinkings ? 'thinkings' : 'solutions'
        }/${fileName}.md`;

  return `| ${item} | [${enName} ${cnName}](${route}) | ${difficulty} | ${label} |`;
});

const tableBody2 = offerTable.map((item) => {
  const { index, name } = item;
  const temp = name.split('-')[1];
  const showName = temp.split('.')[0].split('~');
  const flag = temp.split('.')[1];
  return `| ${index} | [${showName[0]}](https://github.com/kaisa911/LeetCode/blob/master/${
    flag === 'md' ? 'Thinkings' : 'Solutions'
  }/剑指Offer/${name}) | ${showName[1].split('##')[0]} | ${showName[1].split('##')[1] || ''} |`;
});

const content = (result) => `
# 刷题记录

some exercises of leetcode

- Leetcode: 简单: ${result.solution.Easy}, 中等: ${result.solution.Medium}, 困难: ${
  result.solution.Hard
}, 剑指Offer: ${result.solution['剑指Offer']},
- 总计：${result.sum}

\`\`\`mermaid
pie title 已完成的题目
    "简单" : ${result.solution.Easy}
    "中等" : ${result.solution.Medium}
    "困难" : ${result.solution.Hard}
    "剑指Offer" : ${result.solution['剑指Offer']}
\`\`\`

${tableHeader}
${tableBody.join('\n')}

**剑指offer**

${tableHeader}
${tableBody2.join('\n')}
`;

const renderReadme = () => {
  const result = {
    solution: { Easy: 0, Medium: 0, Hard: 0, 剑指Offer: 73 },
    thinking: { Easy: 0, Medium: 0, Hard: 0, 剑指Offer: 73 },
  };

  Object.keys(nameMap).map((key) => {
    if (nameMap[key].difficulty === 'Easy') {
      result.solution.Easy += 1;
      if (nameMap[key].hasThinkings) {
        result.thinking.Easy += 1;
      }
    }
    if (nameMap[key].difficulty === 'Medium') {
      result.solution.Medium += 1;
      if (nameMap[key].hasThinkings) {
        result.thinking.Medium += 1;
      }
    }
    if (nameMap[key].difficulty === 'Hard') {
      result.solution.Hard += 1;
      if (nameMap[key].hasThinkings) {
        result.thinking.Hard += 1;
      }
    }
  });

  const sum = Object.values(result.solution).reduce((sum, solution) => (sum += solution), 0);
  const thinkSum = Object.values(result.thinking).reduce((sum, solution) => (sum += solution), 0);

  result.sum = sum;
  result.thinkSum = thinkSum;
  fs.writeFileSync('README.md', content(result), { flag: 'w+' }, (error) => {
    console.log(error);
  });
  fs.writeFileSync(
    'RECORD.md',
    `难度出错的题目：${difficultyList} \n没有解答的题目数：${noSolutionList.length} \n没有解答的题目TOP5：${top5Question}`,
    { flag: 'w+' },
    (error) => {
      console.log(error);
    }
  );
  console.log('设置完成');
};

module.exports = renderReadme;
