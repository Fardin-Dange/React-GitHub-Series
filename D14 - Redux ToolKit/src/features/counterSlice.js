// import {createSlice} from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";

const counterSclice = createSlice({
    name : 'counter',
    initialState : {value : 0},
    reducers : {

        increment : (state) => {
            state.value = state.value + 1;
        },
        decrement : (state) => {
            state.value = state.value - 1;
        }
    }
})

export const {increment, decrement} = counterSclice.actions;

export default counterSclice.reducer