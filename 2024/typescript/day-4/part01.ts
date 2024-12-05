const xmasArr = ['X', 'M', 'A', 'S'];

const parseInput = (input: string) => input.split('\n').map((splited) => splited.split(''));

export const solvePart01 = (input: string): number => {
  const data = parseInput(input);

  const maxX = data.length;
  const maxY = data[0].length;

  const didYouOut = (x: number, y: number) => x < 0 || x > maxX - 1 || y < 0 || y > maxY - 1;

  const directions = [
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
    [1, 0], // 아래
    [-1, 0], // 위
    [1, 1], // 오른쪽 아래 대각선
    [1, -1], // 왼쪽 아래 대각선
    [-1, 1], // 오른쪽 위 대각선
    [-1, -1], // 왼쪽 위 대각선
  ];

  return data.reduce((totalCount, row, i) => {
    return (
      totalCount +
      row.reduce((lineCount, col, j) => {
        if (col === xmasArr[0]) {
          return (
            lineCount +
            directions.reduce(
              (acc, [x, y]) =>
                xmasArr.some((word, index) => {
                  const xx = i + index * x;
                  const yy = j + index * y;

                  return didYouOut(xx, yy) || data[xx][yy] !== word;
                })
                  ? acc
                  : ++acc,
              0,
            )
          );
        }
        return lineCount;
      }, 0)
    );
  }, 0);
};
