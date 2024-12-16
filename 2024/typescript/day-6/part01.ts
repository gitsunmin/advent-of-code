type Direction = '^' | '>' | '<' | 'v';
type Object = '.' | '#' | 'X' | Direction;

const parseInput = (input: string) =>
  input.split('\n').map((row) => row.split('')) as Array<Object>[];

const DIRECTIONS = {
  UP: {
    x: 0,
    y: -1,
  },
  DOWN: {
    x: 0,
    y: 1,
  },
  RIGHT: {
    x: 1,
    y: 0,
  },
  LEFT: {
    x: -1,
    y: 0,
  },
};

const isObstacle = (text: Object) => text === '#';
const forceCopy = (data: Object[][]) => JSON.parse(JSON.stringify(data));

const go = (x: number, y: number, direction: Direction) => {
  switch (direction) {
    case '^': {
      return [x, y - 1];
    }
    case 'v': {
      return [x, y + 1];
    }
    case '<': {
      return [x - 1, y];
    }
    case '>': {
      return [x + 1, y];
    }
    default:
      return [x, y];
  }
};

const rightFace = (direction: Direction): Direction => {
  switch (direction) {
    case '^':
      return '>';
    case '>':
      return 'v';
    case 'v':
      return '<';
    case '<':
      return '^';
  }
};

const stampingFoot = (data: Object[][], x: number, y: number) => {
  const stemped = forceCopy(data);
  stemped[y][x] = 'X';

  return stemped;
};

const didYouEscape = (data: Object[][], nextX: number, nextY: number) => {
  try {
    return data[nextY][nextX] === undefined;
  } catch (error) {
    return true;
  }
};

const investigate = (data: Object[][], x: number, y: number, direction: Direction): Object[][] => {
  const stempedData = stampingFoot(data, x, y);
  const [nextX, nextY] = go(x, y, direction);

  if (didYouEscape(data, nextX, nextY)) return stempedData;

  const nextDirection = isObstacle(data[nextY][nextX]) ? rightFace(direction) : direction;

  switch (nextDirection) {
    case '^': {
      return investigate(stempedData, x, y - 1, nextDirection);
    }
    case 'v': {
      return investigate(stempedData, x, y + 1, nextDirection);
    }
    case '<': {
      return investigate(stempedData, x - 1, y, nextDirection);
    }
    case '>': {
      return investigate(stempedData, x + 1, y, nextDirection);
    }
  }
};

export const solvePart01 = (input: string): number => {
  const data = parseInput(input);

  const startY = data.findIndex((row) => row.find((col) => col === '^'));
  const startX = data[startY].findIndex((col) => col === '^');

  const direction = data[startY][startX] as Direction;

  return investigate(data, startX, startY, direction).reduce(
    (total, row) => total + row.reduce((rowTotal, col) => (col === 'X' ? ++rowTotal : rowTotal), 0),
    0,
  );
};
