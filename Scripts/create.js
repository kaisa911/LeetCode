const fs = require('fs');
const path = require('path');
const nameMap = require('./name.js');

const create = (num, content) => {
  const info = nameMap[num];
  const { enName, difficulty } = info;
  const showName = enName.split(' ').join('');
  const name = `${num}-${showName}.js`;
  const path = `./Solutions/${difficulty}/${name}`;

  fs.stat(path, (error, stat) => {
    if (stat?.isFile()) return;
    if (error) {
      fs.writeFileSync(path, content || '', { flag: 'w+' }, (error) => {
        console.log(error);
      });
      console.log(`创建${num}成功，请在/Solutions/${difficulty}/目录下查看`);
    }
  });
};

module.exports = create;
