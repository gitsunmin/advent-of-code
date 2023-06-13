import { pipe, A } from "@mobily/ts-belt";

import { perpareInput, mergeInput, sortDescendingOrder } from './common';

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
  perpareInput,
  mergeInput,
  sortDescendingOrder,
  A.head
);

console.log("output", output);
