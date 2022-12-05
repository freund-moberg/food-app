export enum Category {
    ALL,
    BURGER,
    SALAD,
    PIZZA,
    DRINK,
    DESERT,
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

export interface AppProps {
    name?: string;
    key?: string;
    amount?: number;
    className?: string;
    imageFilename?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; //function pointer
    children?: JSX.Element | JSX.Element[];
}
