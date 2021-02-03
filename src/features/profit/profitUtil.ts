import { pricing, inventory, legal } from "../../api";
import { constant, pipe } from "fp-ts/lib/function";

import * as O from "fp-ts/lib/Option";
import * as T from "fp-ts/lib/Task";
import { getApplicativeComposition } from "fp-ts/lib/Applicative";

//string -> Task<Option<number>>>
const getInventory = (id: string): T.Task<O.Option<number>> => () =>
  inventory(id).then(value => O.fromNullable(value?.units), constant(O.none));

const isLTZero = (n: number): O.Option<number> => (n > 0 ? O.some(n) : O.none);

// string -> Task<Option<number>>>
const getPricing = (id: string): T.Task<O.Option<number>> => () =>
  pricing(id).then(
    value => pipe(O.fromNullable(value?.pricing), O.chain(isLTZero)),
    constant(O.none)
  );

// Monoid returning the left-most non-None value
const M = O.getFirstMonoid<boolean>();

// string -> Task<Option<boolean>>>
const isIllegal = (id: string): T.Task<O.Option<boolean>> => () =>
  legal(id).then(
    value => M.concat(O.fromNullable(value?.isIllegal), O.some(false)),
    constant(O.some(false))
  );

const calculate = (isIllegal: boolean) => (price: number) => (qty: number) =>
  isIllegal ? 0 : price * qty;

// (Applicative f, Applicative g) => Applicative (Compose f g)
const A = getApplicativeComposition(T.task, O.option);

// f <$> fa <*> fb <*> fc
export const maxProfit = (id: string) =>
  A.ap(
    A.ap(A.map(isIllegal(id), calculate), getPricing(id)),
    getInventory(id)
  )();
