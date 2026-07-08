import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"
import modeReducer from "../features/ModeSclice"

const store = configureStore({

    reducer  : {
        counter : counterReducer,
        mode : modeReducer 

    }
})

export default store;