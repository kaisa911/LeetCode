const path = require('path');
const fs = require('fs');
const nameMap = require('./name.js');

const sort = () => {
  const infos = Object.keys(nameMap).sort((a, b) => a - b);
  let inner = '';
  for (let i = 0; i < infos.length; i++) {
    inner += `  ${infos[i]}: {
    cnName: '${nameMap[infos[i]].cnName || ''}',
    enName: '${nameMap[infos[i]].enName || ''}',
    difficulty: '${nameMap[infos[i]].difficulty || ''}',
    label: '${nameMap[infos[i]].label || ''}',
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
