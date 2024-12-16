import { getInput } from '../../../utils/typescript/input';
import { solvePart01 } from './part01.ts';

const main = async () => {
  const data = await getInput('2024/typescript/day-6/input');

  console.log('The Solution of 2024 part 1 problem:', solvePart01(data));
};

main();
