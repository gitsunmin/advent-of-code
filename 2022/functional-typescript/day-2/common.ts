import { flow, S, A, N } from "@mobily/ts-belt";
import { P, match } from "ts-pattern";

import type { InputTupleType } from "./handType";
import Scores from "./scores";

const win = flow(Scores.fromHandShape, N.add(Scores.WINNER));

const draw = flow(Scores.fromHandShape, N.add(Scores.DRAW));

const lose = flow(Scores.fromHandShape, N.add(Scores.LOSER));

export const parseInput = flow(
  S.split("\n"),
  A.filter(S.isNotEmpty),
  A.map(S.split(" "))
) as (input: string) => Array<InputTupleType>;

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

export const handleInput = (input: InputTupleType) =>
  match(input)
    .with([P._, "X"], resultWhenRock)
    .with([P._, "Y"], resultWhenPaper)
    .with([P._, "Z"], resultWhenScissors)
    .exhaustive();
