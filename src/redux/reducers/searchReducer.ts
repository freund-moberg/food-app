import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../stateModels";

const initialState: SearchState = { value: "" };

export const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        updateQuery: (state, action) => {
            state.value = action.payload;
            console.log(action.payload);
        },
    },
});

export const { updateQuery } = searchSlice.actions;
export default searchSlice.reducer;