import { A, D, F, N, O, S, flow, pipe } from "@mobily/ts-belt";
import { match } from "ts-pattern";

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

export const ALPHABETS = A.concat(LOWER_CASE_ALPHABET, UPPER_CASE_ALPHABET);

const getNumberFromAlphabet = (alphabet: Alphabet) =>
  pipe(
    ALPHABETS,
    A.mapWithIndex<Alphabet, [Alphabet, number]>((index, alphabet) => [
      alphabet,
      N.add(index, 1),
    ]),
    D.fromPairs<number, Alphabet>,
    D.get(alphabet)
  );

export const slice = flow((str: string) =>
  S.splitAt(str, N.divide(S.length(str), 2))
);

export const find = flow((compartments: readonly string[]) =>
  match(compartments)
    .when(A.isNotEmpty, () =>
      pipe(
        compartments,
        A.head,
        S.split("") as (str: O.Option<string>) => readonly Alphabet[],
        A.filter<Alphabet>((str: Alphabet) =>
          A.every(A.tailOrEmpty(compartments), S.includes(str))
        ),
        A.take(1)
      )
    )
    .otherwise(F.always([]))
);

export const parseInput = flow(S.split("\n"), A.filter(S.isNotEmpty));

export const sumNumber = flow(
  A.map(getNumberFromAlphabet),
  A.filterMap(O.toNullable),
  A.reduce(0, N.add)
);
