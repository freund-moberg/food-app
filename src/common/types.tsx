export enum Category {
    ALL,
    BURGER,
    SALAD,
    PIZZA,
    DRINK,
    DESERT,
}

export enum Tabs{
    STORE,
    PROFILE
}

export interface CategoryState {
    selected: Category;
}

export interface CartItem {
    name: string;
    amount: number;
    price: number;
}

export interface Item {
    name: string;
    amount: number;
    price: number;
    image: string;
}

export interface CartState {
    cartOpen: boolean;
    items: CartItem[];
}

export interface AppProps {
    name?: string;
    key?: string;
    amount?: number;
    className?: string;
    imageFilename?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; //function pointer
    children?: JSX.Element | JSX.Element[];
}
