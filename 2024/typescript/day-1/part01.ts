
export const solve2024Part01 = (input: [string, string][]) => {
    const left = input.map(([left]) => left);
    const right = input.map(([,right]) => right);

    const sortedLeft = left.toSorted();
    const sortedRight = right.toSorted();

    return sortedLeft
        .map((left,index) => Math.abs(Number(left) - Number(sortedRight[index])))
        .reduce((acc, e) => acc + e, 0);

};