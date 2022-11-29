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
    value: {
        cartOpen: boolean;
        items: CartItem[];
    }
}

export interface AppProps {
    className?: string;
    imageFilename?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; //function pointer
    children?: JSX.Element | JSX.Element[];
}
