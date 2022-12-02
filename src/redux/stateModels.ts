import { CartItem, Category } from "../common/types";

export interface CartState {
    cartOpen: boolean;
    items: CartItem[];
}

export interface CategoryState {
    selected: Category;
}

export interface searchState {
    value: string;
}