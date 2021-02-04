import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import * as O from "fp-ts/lib/Option";
import { constant, constNull, pipe, identity } from "fp-ts/lib/function";

const Profit = () => {
  const id = useSelector((state: RootState) => state.profit.id);
  const profit = useSelector((state: RootState) => state.profit.profit);

  return (
    <div>
      <h2>{pipe(id, O.fold(constNull, identity))}</h2>
      <h3>
        PROFIT!!:
        {pipe(
          profit,
          O.fold(constant("0"), profit => profit.toString())
        )}
      </h3>
    </div>
  );
};

export default Profit;
