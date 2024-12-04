export const solvePart01 = (input: number[][]): number => {
  const isSafe = (report: number[]): boolean => {
    const direction = report[0] > report[1] ? 'DOWN' : 'UP';

    return !report.some((_, index) => {
      if (index === report.length - 1) return false;
      const diff = Math.abs(report[index] - report[index + 1]);

      if (diff === 0 || diff > 3) return true;
      if (direction === 'DOWN' && report[index] <= report[index + 1]) return true;
      if (direction === 'UP' && report[index] >= report[index + 1]) return true;

      return false;
    });
  };

  return input.filter(isSafe).length;
};
