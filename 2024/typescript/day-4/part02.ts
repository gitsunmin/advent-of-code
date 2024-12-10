type Direction = '↘️' | '↖' | '↗️' | '↙️';

const xmasArr = ['M', 'A', 'S'] as const;

const parseInput = (input: string) => input.split('\n').map((splited) => splited.split(''));

export const solvePart02 = (input: string): number => {
  const data = parseInput(input);

  const maxX = data.length;
  const maxY = data[0].length;

  const didYouOut = (x: number, y: number) => x < 0 || x >= maxX || y < 0 || y >= maxY;

  const diagonalDirections: Record<
    Direction,
    { direction: [number, number]; diagonal: [number, number, number, number][] }
  > = {
    '↘️': {
      direction: [1, 1], // ↘️
      diagonal: [
        [1, -1, 0, 2], // ↗️
        [-1, 1, 2, 0], // ↙️
      ],
    },
    '↖': {
      direction: [-1, -1], // ↖
      diagonal: [
        [1, -1, -2, 0], // ↗️
        [-1, 1, 0, -2], // ↙️
      ],
    },
    '↗️': {
      direction: [1, -1], // ↗️
      diagonal: [
        [1, 1, 0, -2], // ↘️
        [-1, -1, 2, 0], // ↖
      ],
    },
    '↙️': {
      direction: [-1, 1], // ↙️
      diagonal: [
        [1, 1, -2, 0], // ↘️
        [-1, -1, 0, 2], // ↖
      ],
    },
  };

  const countedCenters = new Set<string>();

  const r = data.reduce((totalCount, row, i) => {
    return (
      totalCount +
      row.reduce((lineCount, col, j) => {
        if (col === xmasArr[0]) {
          return (
            lineCount +
            Object.keys(diagonalDirections).reduce((acc, cur) => {
              const { direction, diagonal } = diagonalDirections[cur as Direction];
              const [x, y] = direction;

              // 첫 번째 XMAS 찾기
              const findedMas = xmasArr.some((word, index) => {
                const xx = i + index * x;
                const yy = j + index * y;

                return didYouOut(yy, xx) || data[yy][xx] !== word;
              });

              if (!findedMas) {
                return diagonal.some(([x, y, a, b]) => {
                  return !xmasArr.some((word, index) => {
                    const xx = i + index * x + a;
                    const yy = j + index * y + b;
                    return didYouOut(yy, xx) || data?.[yy]?.[xx] !== word;
                  });
                })
                  ? ++acc
                  : acc;
              } else return acc;
            }, 0)
          );
        }
        return lineCount;
      }, 0)
    );
  }, 0);
  return r;
};
