import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { maxProfit } from "./profitUtil";
import * as O from "fp-ts/lib/Option";

interface ProfitState {
  id: O.Option<string>;
  profit: O.Option<number>;
}

const initialState: ProfitState = {
  id: O.none,
  profit: O.none
};

export const profitSlice = createSlice({
  name: "profit",
  initialState,
  reducers: {
    setProfit: (state, action: PayloadAction<ProfitState>) => action.payload
  }
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchProfit = (id: string): AppThunk => dispatch => {
  maxProfit(id)
    .then(profit =>
      dispatch(
        setProfit({
          id: O.some(id),
          profit
        })
      )
    )
    .catch(console.error);
};

export const { setProfit } = profitSlice.actions;
export default profitSlice.reducer;
