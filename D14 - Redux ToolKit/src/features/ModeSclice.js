import { createSlice } from "@reduxjs/toolkit";

const modeSclice = createSlice({
    name : "mode",
    initialState : {vMode:"light"},
    reducers : {
        changeMode : (state) => {
            state.vMode = state.vMode === "light" ? "dark" : "light";
        }
    }
})

export const {changeMode} = modeSclice.actions;

export default modeSclice.reducer;