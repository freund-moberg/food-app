import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../stateModels";

const initialState: CartState = { cartOpen: false, items: []  };

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(
                (item) => item.name === action.payload.name
            );
            item ? item.amount++ : state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items
                .filter((item) => item.name === action.payload.name)
                .forEach((item) => item.amount--);
            state.items = state.items.filter((item) => item.amount > 0);
        },
        toggleCart: (state) => {
            state.cartOpen = !state.cartOpen;
        },
    },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
