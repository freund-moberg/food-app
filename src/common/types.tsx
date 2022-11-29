export enum Category {
    ALL,
    BURGER,
    SALAD,
    PIZZA,
    DRINK,
}

export interface CategoryState {
    value: Category;
}

export interface CartItem {
    name: string;
    amount: number;
}
export interface CartState {
    value: CartItem[];
}
