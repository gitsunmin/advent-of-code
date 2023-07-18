import { A, O, S, pipe, flow } from '@mobily/ts-belt';

const input = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const isNotEmpty = flow(S.trim, S.isNotEmpty);

const sliceForStack = flow(S.indexOf('1'), O.fromNullable, O.flatMap((position) => S.slice(input, 0, position)))

const sliceForCommand = flow(
    S.indexOf('move'),
    O.fromNullable,
    O.flatMap((position) => S.sliceToEnd(input, position))
)

const makeStack = flow(S.split('\n'), A.filter(isNotEmpty), A.map(S.removeAll('   ')), A.map(S.split(' '))) 

const extractStacks = (input: string) => pipe(
    input,
    sliceForStack,
    O.map(makeStack)
);

const makeCommand = (command: string) => pipe(command, S.split('\n'), A.map(flow(S.split(' '), A.filter(flow(Number, (token) => !isNaN(token))), A.map(Number))))

const extractCommands = (input: string) => pipe(
    input,
    sliceForCommand,
    O.map(makeCommand),
)

const parseInput = (input: string) => {
    const stacks = extractStacks(input);
    const commands = extractCommands(input);
    return [stacks, commands]
}

const output = pipe(input, parseInput);

console.log('output:', output);
