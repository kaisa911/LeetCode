const path = require("path");
const fs = require("fs");

const result = { solution: {}, thinking: {} };
const solution = fs.readdirSync(path.join(__dirname, "./Solutions"), {
  withFileTypes: true,
});
const thinking = fs.readdirSync(path.join(__dirname, "./Thinkings"), {
  withFileTypes: true,
});

for (let i = 0; i < solution.length; i++) {
  result.solution[solution[i].name] = fs.readdirSync(
    path.join(__dirname, `./Solutions/${solution[i].name}`)
  ).length;
}
for (let i = 0; i < thinking.length; i++) {
  result.thinking[thinking[i].name] = fs.readdirSync(
    path.join(__dirname, `./Thinkings/${solution[i].name}`)
  ).length;
}

console.log(result);
