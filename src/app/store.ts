import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contacts from "../features/contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
