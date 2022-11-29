import { createSlice } from "@reduxjs/toolkit";
import { Category, CategoryState } from "../common/types";

const initialState: CategoryState = { value: Category.ALL };

export const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
