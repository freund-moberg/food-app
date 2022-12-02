import { createSlice } from "@reduxjs/toolkit";
import { Tabs } from "../../common/types";

const initialState = { displayedTab: Tabs.STORE };

export const tabSlice = createSlice({
    name: "tab",
    initialState: initialState,
    reducers: {
        setTab: (state, action) => {
            state.displayedTab = action.payload;
        },
    },
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;
