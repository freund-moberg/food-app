import { Account, CartItem, Category, Settings } from "common/types";

export interface CartState {
    cartOpen: boolean;
    items: CartItem[];
}

export interface CategoryState {
    selected: Category;
}

export interface SearchState {
    value: string;
}

export interface AccountState {
    loggedIn: boolean;
    current: Account;
    settings: Settings;
}
