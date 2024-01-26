import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./features/valueSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        // reducer 1,2,3
        valueReducer:valueReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;