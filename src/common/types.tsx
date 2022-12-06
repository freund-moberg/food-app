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
    className?: string;
    name?: string;
    key?: string;
    amount?: number;
    title?: string;
    message?: string;
    buttonType?: "button" | "submit" | "reset" | undefined;
    imageFilename?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; //function pointer
    onUnfocus?: React.MouseEventHandler<HTMLDivElement>;
    children?: JSX.Element | JSX.Element[];
}

export interface Account {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    creditCard: string;
}

export interface ModalType {
    active: boolean;
    title: string;
    message: string;
}
