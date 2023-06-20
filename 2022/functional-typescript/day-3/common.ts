import { A, D, N, pipe } from "@mobily/ts-belt";

const LOWER_CASE_ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const;

const UPPER_CASE_ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;

export type Alphabet =
  | (typeof LOWER_CASE_ALPHABET)[number]
  | (typeof UPPER_CASE_ALPHABET)[number];

export const alphabetAndNumberMap: Record<Alphabet, number> = pipe(
  A.concat(LOWER_CASE_ALPHABET, UPPER_CASE_ALPHABET),
  A.mapWithIndex<Alphabet, [Alphabet, number]>((index, alphabet) => [
    alphabet,
    N.add(index, 1),
  ]),
  D.fromPairs
);

export const getNumberFromAlphabet = (alphabet: string) =>
  alphabetAndNumberMap[alphabet as Alphabet] ?? 0;
