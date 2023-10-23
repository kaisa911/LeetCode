const fs = require('fs');
const path = require('path');
const nameMap = require('./name.js');

const result = {};
const solution = fs.readdirSync(path.join(__dirname, '../Solutions'), {
  withFileTypes: true,
});
const thinking = fs.readdirSync(path.join(__dirname, '../Thinkings'), {
  withFileTypes: true,
});

for (let i = 0; i < solution.length; i++) {
  result[solution[i].name] = fs.readdirSync(
    path.join(__dirname, `../Solutions/${solution[i].name}`)
  );
}

for (let i = 0; i < thinking.length; i++) {
  const list = fs.readdirSync(
    path.join(__dirname, `../Thinkings/${thinking[i].name}`)
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
let noSolutionList = Object.keys(nameMap);
console.log(`name总数：${noSolutionList.length}`);
const noNameList = [...noSolutionList].filter(
  (item) => nameMap[item].enName === ''
);
const difficultyList = [];
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

  if (nameMap[index]) {
    noSolutionList = noSolutionList.filter((item) => item !== index);
  }
  if (
    nameMap[index]?.difficulty &&
    nameMap[index]?.difficulty !== undefined &&
    nameMap[index]?.difficulty !== difficulty
  ) {
    difficultyList.push({
      index,
      difficulty: nameMap[index]?.difficulty,
      difficulty2: difficulty,
    });
  }
  return `| ${index} | [${nameMap[index]?.enName || showName} ${
    nameMap[index]?.cnName || ''
  }](https://github.com/kaisa911/LeetCode/blob/master/${
    flag === 'md' ? 'Thinkings' : 'Solutions'
  }/${difficulty}/${name}) | ${nameMap[index]?.difficulty || difficulty} | ${
    nameMap[index]?.label || ''
  }|`;
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
  }/剑指Offer/${name}) | ${showName[1].split('##')[0]} | ${
    showName[1].split('##')[1] || ''
  } |`;
});

const content = (result) => `
# 刷题记录

some exercises of leetcode

- Leetcode: 简单: ${result.solution.Easy}, 中等: ${
  result.solution.Medium
}, 困难: ${result.solution.Hard}, 剑指Offer: ${result.solution['剑指Offer']},
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


const hasNameNoSolution = [...noSolutionList].filter(
  (item) => nameMap[item].cnName !== ''
);
const top5Question = [...hasNameNoSolution];


while (top5Question.length > 5) {
  top5Question.splice(top5Question.length - 1, 1);
}

const renderReadme = (result) => {
  fs.writeFileSync('README.md', content(result), { flag: 'w+' }, (error) => {
    console.log(error);
  });

  fs.writeFileSync(
    'RECORD.md',
    `没有名称的题目：${noNameList} \n没有名称的题目数: ${noNameList.length} \n难度出错的题目：${difficultyList} \n没有解答的题目数：${noSolutionList.length} \n有名称没有解答的题目数：${hasNameNoSolution.length} \n没有解答的题目TOP5：${top5Question}`,
    { flag: 'w+' },
    (error) => {
      console.log(error);
    }
  );
  console.log(`next 5 question: ${top5Question}`);
  console.log(result);
};

module.exports = renderReadme;
