import { pipe, A, flow } from "@mobily/ts-belt";
import { P, match } from "ts-pattern";

import {
  handleInput,
  parseInput,
  sum,
  type InputTupleType,
  type MyHandShapeType,
} from "./common";

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

const makeAndHandleInput = A.map(
  flow(
    (hands: InputTupleType) =>
      [A.head(hands), makeMyHand(hands)] as InputTupleType,
    handleInput
  )
);

const output = pipe(input, parseInput, makeAndHandleInput, sum);

console.log("output:", output); // 12
