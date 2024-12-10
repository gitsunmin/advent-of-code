import { getInput } from '../../../utils/typescript/input';
import { solvePart01 } from './part01.ts';
import { solvePart02 } from './part02.ts';

const main = async () => {
  const data = await getInput('2024/typescript/day-4/input');

  console.log('The Solution of 2024 part 1 problem:', solvePart01(data));
  console.log('The Solution of 2024 part 2 problem:', solvePart02(data));
};

main();
