const parseInput = (text: string) =>
  text.match(/mul\(\d+,\d+\)|don\'t\(\)|do\(\)/g)?.map((matched) => {
    switch (matched) {
      case 'do()':
        return true;
      case `don't()`:
        return false;
      default:
        return matched.match(/\d+/g)?.map(Number);
    }
  }) as ([number, number] | boolean)[];

export const solvePart02 = (input: string): number => {
  const data = parseInput(input);

  const [result] = data.reduce(
    (acc, cur) => {
      if (typeof cur === 'boolean') return [acc[0], cur];
      else if (acc[1]) return [acc[0] + cur[0] * cur[1], acc[1]];
      return acc;
    },
    [0, true],
  );
  return result;
};
