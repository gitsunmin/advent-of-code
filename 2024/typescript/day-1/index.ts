import { getInput } from '../../../utils/typescript/input';
import { solve2024Part01 } from './part01';
import { solve2024Part02 } from './part02';

const parseInput = (text: string) => text.split('\n').map((data) => data.split('   ')) as [string, string][];

const main = async () => {
    const data = parseInput(await getInput('2024/typescript/day-1/input'));

    console.log('The Solution of 2024 part 1 problem:', solve2024Part01(data));
    console.log('The Solution of 2024 part 2 problem:', solve2024Part02(data));
}

main();
