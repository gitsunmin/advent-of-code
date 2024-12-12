const parseInput = (input: string) => {
  const [rules_, updateList_] = input.split('\n\n');

  return {
    rules: rules_.split('\n').map((r) => r.split('|').map(Number)),
    updateList: updateList_.split('\n').map((u) => u.split(',').map(Number)),
  };
};

export const solvePart02 = (input: string): number => {
  const { rules, updateList } = parseInput(input);

  return updateList.reduce((total, list) => {
    const sorted = list.toSorted((a, b) =>
      rules.find(([rule1, rule2]) => rule1 === b && rule2 === a) ? 1 : -1,
    );

    if (list.toString() !== sorted.toString()) {
      const centerIndex = Number.parseInt(`${sorted.length / 2}`);
      return total + sorted[centerIndex];
    }

    return total;
  }, 0);
};
