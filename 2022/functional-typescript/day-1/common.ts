import { flow, S, A, N } from "@mobily/ts-belt";

export const perpareInput = flow(
  S.split("\n\n"),
  A.map(flow(S.split("\n"), A.map(Number)))
);

export const mergeInput = flow(A.map(A.reduce(0, N.add)));

export const sortDescendingOrder = flow(A.sort(N.subtract), A.reverse);
