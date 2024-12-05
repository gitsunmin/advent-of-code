const parseInput = (text: string) =>
  (text.match(/mul\(\d+,\d+\)/g)?.map((matched) => matched.match(/\d+/g)?.map(Number)) ?? []) as [
    number,
    number,
  ][];

export const solvePart01 = (input: string): number => {
  const data = parseInput(input);

  return data.reduce((acc, cur) => acc + cur[0] * cur[1], 0);
};
