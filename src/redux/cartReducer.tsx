import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../common/types";

const initialState: CartState = { value: { cartOpen: false, items: [] } };

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const items = state.value.items;
            let found = false;
            for (let element of items) {
                if (element.name === action.payload.name) {
                    found = true;
                    element.amount++;
                }
            }
            if (!found) {
                items.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const items = state.value.items;
            for (let element of items) {
                if (element.name === action.payload.name) {
                    element.amount--;
                    if (element.amount === 0) {
                        items.splice(items.indexOf(element), 1);
                    }
                }
            }
        },
        toggleCart: (state) => {
            state.value.cartOpen = !state.value.cartOpen;
        },
    },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
