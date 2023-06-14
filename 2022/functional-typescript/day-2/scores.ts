import { F } from '@mobily/ts-belt';
import { match } from "ts-pattern";

import type { MyHandShapeType } from "./handType";

const WINNER = 6 as const;

const DRAW = 3 as const;

const LOSER = 0 as const;

const fromHandShape = (handShape: MyHandShapeType) =>
  match(handShape)
    .with("X", F.always(1))
    .with("Y", F.always(2))
    .with("Z", F.always(3))
    .exhaustive();

export default {
  WINNER,
  LOSER,
  DRAW,
  fromHandShape,
};