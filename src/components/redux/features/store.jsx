import { configureStore } from "@reduxjs/toolkit";
import daysReducer from './daySlice'
import hoursReducer from "./hoursSlice";

export const store = configureStore({
    reducer: {
        days: daysReducer,
        hours: hoursReducer
    },

})