const fs = require('fs');
const path = require('path');
const nameMap = require('./name.js');

rename = () => {
  const result = [];
  const list = Reflect.ownKeys(nameMap).filter((item) => !nameMap[item].checked);
  list.map((item) => {
    const object = nameMap[item];
    const fileName = `${item}-${object.enName.split(' ').join('')}`;
    const name = object.difficulty + '/' + fileName;
    const solutionSource = path.join(__dirname, '../Solutions/' + name + '.js');
    const thinkingSource = path.join(__dirname, '../Thinkings/' + name + '.md');
    const solutionExist = fs.existsSync(solutionSource);
    const thinkingsExist = fs.existsSync(thinkingSource);
    // console.log(item, `thinkingsExist:` + thinkingsExist, 'solutionExist:' + solutionExist);
    if (solutionExist && !thinkingsExist) {
      result.push(item);
    }
  });
  console.log(result.length);
};

rename();
