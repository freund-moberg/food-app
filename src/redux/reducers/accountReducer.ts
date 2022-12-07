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
    settings: {
        darkTheme: true,
        showCC: false
    }
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
    settings: {
        darkTheme: false,
        showCC: false
    }
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
        },
        setTheme: (state, action) => {
            state.settings.darkTheme = action.payload
        },
        setCCInfo: (state, action) => {
            state.settings.showCC = action.payload
        }
    },
});

export const { login, logout, setTheme, setCCInfo } = accountSlice.actions;
export default accountSlice.reducer;
