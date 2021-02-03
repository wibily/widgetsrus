import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import profitReducer from "../features/profit/profitSlice";

export const store = configureStore({
  reducer: {
    profit: profitReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
