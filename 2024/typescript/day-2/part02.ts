export const solvePart02 = (input: number[][]): number => {
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

  const isSafeWithDampener = (report: number[]): boolean => {
    if (isSafe(report)) return true;

    for (let i = 0; i < report.length; i++) {
      const reducedReport = report.slice(0, i).concat(report.slice(i + 1));
      if (isSafe(reducedReport)) return true;
    }

    return false;
  };

  return input.filter(isSafeWithDampener).length;
};
