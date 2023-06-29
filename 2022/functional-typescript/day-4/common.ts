import { A, S, flow } from "@mobily/ts-belt";

export const parseInput = flow(
  S.split("\n"),
  A.map(flow(S.split(","), A.map(flow(S.split("-"), A.map(Number)))))
) as (str: string) => Array<[[number, number], [number, number]]>;

export const fullyInclusion = ([elf1, elf2]: [
  [number, number],
  [number, number]
]) => {
  const [elf1Start, elf1End] = elf1;
  const [elf2Start, elf2End] = elf2;

  return (
    (elf1Start >= elf2Start && elf1End <= elf2End) ||
    (elf1Start <= elf2Start && elf1End >= elf2End)
  );
};

export const overlap = (elfs: [[number, number], [number, number]]) => {
  const [elf1, elf2] = elfs;
  const [elf1Start, elf1End] = elf1;
  const [elf2Start, elf2End] = elf2;
  return elf1End >= elf2Start && elf2End >= elf1Start;
};
