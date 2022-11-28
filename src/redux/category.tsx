import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: { value: { selectedCategory: "" } },
    reducers: {
        selectCategory: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default categorySlice.reducer;