
const SEPERATOR = '⭐️';

export const solve2024Part02 = (input: [string, string][]) => {
    const flattenRight = `${SEPERATOR}${input.map(([,right]) => right).join(SEPERATOR)}`;

    return input
        .map(
            ([left]) => Number(left) * (flattenRight.match(RegExp(`${SEPERATOR}${left}`, 'g'))?.length ?? 0)
        )
        .reduce((acc, e) => acc + e, 0);
};