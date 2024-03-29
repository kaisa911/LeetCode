const fs = require('fs');
const nameMap = require('./name.js');
const { execSync } = require('child_process');

const createHelper = (num, flag = true) => {
  const info = nameMap[num];
  const { enName, difficulty } = info;
  const showName = enName.split(' ').join('');
  const name = `${num}-${showName}.${flag ? 'js' : 'md'}`;
  const path = `./${flag ? 'Solutions' : 'Thinkings'}/${difficulty}/${name}`;

  fs.stat(path, (error, stat) => {
    if (stat?.isFile()) return;
    if (error) {
      fs.writeFileSync(path, '', { flag: 'w+' }, (error) => {
        console.log(error);
      });
      execSync(`code ${path}`);
      console.log(
        `创建${num}成功，请在/${
          flag ? 'Solutions' : 'Thinkings'
        }/${difficulty}/目录下查看`
      );
    }
  });
};

const create = () => {
  if (process.argv[2] === '-c') {
    if (process.argv[3]) {
      createHelper(+process.argv[3]);
    }
  }
  if (process.argv[2] === '-t') {
    if (process.argv[3]) {
      createHelper(+process.argv[3], false);
    }
  }
};

module.exports = create;
