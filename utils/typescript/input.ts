
export const getInput = (path: string) => {
    return Bun.file(path).text();
}
