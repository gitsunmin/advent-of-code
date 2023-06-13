import { pipe, A, N } from "@mobily/ts-belt";

import { parseAndConvertToNumbers, sumNestedArrays, sortDescendingOrder } from './common';

const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

const output = pipe(
  input,
  parseAndConvertToNumbers,
  sumNestedArrays,
  sortDescendingOrder,
  A.filterWithIndex(N.lte(2)),
  A.reduce(0, N.add)
);

console.log("output", output);
