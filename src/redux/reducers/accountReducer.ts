import { createSlice } from "@reduxjs/toolkit";
import { AccountState } from "../stateModels";

const initialState: AccountState = {
    loggedIn: true,
    current: {
        firstName: "Mark",
        lastName: "Smith",
        email: "msmith@gmail.com",
        address: "11 London Road",
        creditCard: "5678 9101 1121 1234",
    },
};

const emptyState: AccountState = {
    loggedIn: false,
    current: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        creditCard: "",
    },
};

export const accountSlice = createSlice({
    name: "account",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.current = action.payload;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.current = emptyState.current;
            state.loggedIn = false;
        }
    },
});

export const { login, logout } = accountSlice.actions;
export default accountSlice.reducer;
