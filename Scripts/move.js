const fs = require('fs');
const path = require('path');
const nameMap = require('./name.js');

const move = () => {
  const list = Reflect.ownKeys(nameMap).filter((item) => nameMap[item].checked);

  const solutionDestination = path.join(__dirname, '../package/solutions/');
  const thinkingDestination = path.join(__dirname, '../package/thinkings/');

  list.map((item) => {
    const object = nameMap[item];
    const fileName = `${item}-${object.enName.split(' ').join('')}`;
    const name = object.difficulty + '/' + fileName;
    const solutionSource = path.join(__dirname, '../Solutions/' + name + '.js');
    const thinkingSource = path.join(__dirname, '../Thinkings/' + name + '.md');
    const solutionExist = fs.existsSync(solutionSource);
    const thinkingsExist = fs.existsSync(thinkingSource);

    if (solutionExist) {
      fs.rename(solutionSource, solutionDestination + fileName + '.js', (err) => {
        if (err) {
          console.log(err);
          if (err.code === 'ENOENT') {
            console.log(solutionSource + '文件不存在');
          } else {
            console.error('文件移动失败:', err);
          }
        } else {
          console.log('文件移动成功');
        }
      });
    }
    if (thinkingsExist) {
      fs.rename(thinkingSource, thinkingDestination + fileName + '.md', (err) => {
        if (err) {
          if (err.code === 'ENOENT') {
            console.log(thinkingSource + '文件不存在');
          } else {
            console.error('文件移动失败:', err);
          }
        } else {
          console.log('文件移动成功');
        }
      });
    }
  });
};

module.exports = move;
