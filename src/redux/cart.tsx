import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../common/types";

const initialState: CartState = { value: [] };

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            let found = false;
            for (let element of state.value) {
                if (element.name === action.payload.name) {
                    found = true;
                    element.amount++;
                }
            }
            if (!found) {
                state.value.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            for (let element of state.value) {
                if (element.name === action.payload.name) {
                    element.amount--;
                    if (element.amount === 0) {
                        state.value.splice(state.value.indexOf(element), 1);
                    }
                }
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
