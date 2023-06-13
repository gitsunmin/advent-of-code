import { flow, S, A, N } from "@mobily/ts-belt";

export const parseAndConvertToNumbers = flow(
  S.split("\n\n"),
  A.map(flow(S.split("\n"), A.map(Number)))
);

export const sumNestedArrays = flow(A.map(A.reduce(0, N.add)));

export const sortDescendingOrder = flow(A.sort(N.subtract), A.reverse);
