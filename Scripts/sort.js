const path = require('path');
const fs = require('fs');
const nameMap = require('./name.js');

const helper = () => {
  const result = {
    Easy: [],
    Medium: [],
    Hard: [],
    剑指Offer: [],
  };

  const thinking = fs
    .readdirSync(path.join(__dirname, '../Thinkings'), {
      withFileTypes: true,
    })
    .filter((item) => item.isDirectory());

  for (let i = 0; i < thinking.length; i++) {
    const list = fs.readdirSync(path.join(__dirname, `../Thinkings/${thinking[i].name}`));
    for (let j = 0; j < list.length; j++) {
      result[thinking[i].name] = fs.readdirSync(
        path.join(__dirname, `../Thinkings/${thinking[i].name}`)
      );
    }
  }

  const indexMap = {};

  Object.keys(result).forEach((item) => {
    indexMap[item] = [];
    for (let i = 0; i < result[item].length; i++) {
      indexMap[item].push(result[item][i].split('-')[0]);
    }
  });

  return indexMap;
};

const sort = () => {
  const indexMap = helper();
  const infos = Object.keys(nameMap).sort((a, b) => a - b);
  let inner = '';
  for (let i = 0; i < infos.length; i++) {
    inner += `  ${infos[i]}: {
    cnName: '${nameMap[infos[i]].cnName || ''}',
    enName: '${nameMap[infos[i]].enName || ''}',
    difficulty: '${nameMap[infos[i]].difficulty || ''}',
    label: '${nameMap[infos[i]].label || ''}',
    hasThinkings: ${
      !nameMap[infos[i]].checked
        ? (indexMap[nameMap[infos[i]].difficulty] || []).includes(`${infos[i]}`)
        : true
    },
    checked: ${nameMap[infos[i]].checked || false},
  },\n`;
  }

  const content = `const nameMap = {
${inner.slice(0, inner.length - 1)}
};

module.exports = nameMap;
`;

  fs.writeFileSync('./Scripts/name.js', content, { flag: 'w+' }, (error) => {
    console.log(error);
  });
};

module.exports = sort;
