import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "../state/ListSlice";

export const store=configureStore({
    reducer:listReducer
})