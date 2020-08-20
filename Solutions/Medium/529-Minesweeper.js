/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
	const res = board;
	if (board[click[0]][click[1]] === 'M') {
		res[click[0]][click[1]] = 'X';
		return res;
	}
	const countM = (row, col) => {
		let count = 0;
		for (let i = row - 1; i < row + 2; i++) {
			for (let j = col - 1; j < col + 2; j++) {
				if (board[i] && board[i][j]) {
					if (board[i][j] === 'M') {
						count += 1;
					}
				}
			}
		}
		return count;
	};
	const showInfo = (row, col) => {
		const num = countM(row, col);
		if (num === 0) {
			res[row][col] = 'B';
			for (let i = row - 1; i < row + 2; i++) {
				for (let j = col - 1; j < col + 2; j++) {
					// i，j在board里存在
					// 不是当前的ij
					// 已经展示过的就不再展示了
					if (board[i] && board[i][j] && !(i === row && j === col) && res[i][j] == 'E') {
						showInfo(i, j);
					}
				}
			}
		} else {
			res[row][col] = `${num}`;
		}
	};
	showInfo(click[0], click[1]);
	return res;
};
