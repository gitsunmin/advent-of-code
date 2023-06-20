import { flow, S, A, N, F } from "@mobily/ts-belt";
import { P, match } from "ts-pattern";

export type OpponentHandShapeType = "A" | "B" | "C";

export type MyHandShapeType = "X" | "Y" | "Z";

export type InputTupleType = [OpponentHandShapeType, MyHandShapeType];

const Scores = {
  WINNER: 6 as const,

  DRAW: 3 as const,

  LOSER: 0 as const,

  fromHandShape: (handShape: MyHandShapeType) =>
    match(handShape)
      .with("X", F.always(1))
      .with("Y", F.always(2))
      .with("Z", F.always(3))
      .exhaustive(),
};

const win = flow(Scores.fromHandShape, N.add(Scores.WINNER));

const draw = flow(Scores.fromHandShape, N.add(Scores.DRAW));

const lose = flow(Scores.fromHandShape, N.add(Scores.LOSER));

const resultWhenRock = (input: InputTupleType) =>
  match(input)
    .with(["A", P.select()], draw)
    .with(["B", P.select()], lose)
    .with(["C", P.select()], win)
    .exhaustive();

const resultWhenPaper = (input: InputTupleType) =>
  match(input)
    .with(["A", P.select()], win)
    .with(["B", P.select()], draw)
    .with(["C", P.select()], lose)
    .exhaustive();

const resultWhenScissors = (input: InputTupleType) =>
  match(input)
    .with(["A", P.select()], lose)
    .with(["B", P.select()], win)
    .with(["C", P.select()], draw)
    .exhaustive();

export const parseInput = flow(
  S.split("\n"),
  A.filter(S.isNotEmpty),
  A.map(S.split(" "))
) as (input: string) => Array<InputTupleType>;

export const handleInput = (input: InputTupleType) =>
  match(input)
    .with([P._, "X"], resultWhenRock)
    .with([P._, "Y"], resultWhenPaper)
    .with([P._, "Z"], resultWhenScissors)
    .exhaustive();

export const sum = A.reduce(0, N.add);
