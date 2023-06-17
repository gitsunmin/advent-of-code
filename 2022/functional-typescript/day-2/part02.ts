import { pipe, A, N, flow } from "@mobily/ts-belt";
import { P, match } from "ts-pattern";

import type { InputTupleType, MyHandShapeType } from "./handType";
import { handleInput, parseInput } from "./common";
/**
 * X: you need to lose
 * Y: you need to draw
 * Z: you need to win
 */

const input = `A Y
B X
C Z`;

const winHand = (input: InputTupleType) =>
  match(input)
    .returnType<MyHandShapeType>()
    .with(["A", P._], () => "Y")
    .with(["B", P._], () => "Z")
    .with(["C", P._], () => "X")
    .exhaustive();

const drawHand = (input: InputTupleType) =>
  match(input)
    .returnType<MyHandShapeType>()
    .with(["A", P._], () => "X")
    .with(["B", P._], () => "Y")
    .with(["C", P._], () => "Z")
    .exhaustive();

const loseHand = (input: InputTupleType) =>
  match(input)
    .returnType<MyHandShapeType>()
    .with(["A", P._], () => "Z")
    .with(["B", P._], () => "X")
    .with(["C", P._], () => "Y")
    .exhaustive();

const makeMyHand = (input: InputTupleType) =>
  match(input)
    .returnType<MyHandShapeType>()
    .with([P._, "X"], loseHand)
    .with([P._, "Y"], drawHand)
    .with([P._, "Z"], winHand)
    .exhaustive();

const makeAndHandleInput = flow(
  (hands: InputTupleType) =>
    [A.head(hands), makeMyHand(hands)] as InputTupleType,
  handleInput
);

const output = pipe(
  input,
  parseInput,
  A.map(makeAndHandleInput),
  A.reduce(0, N.add)
);

console.log("output:", output);
