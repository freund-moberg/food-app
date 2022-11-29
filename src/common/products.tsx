import { Category } from "./types";

const products = [
    { name: "Cheeseburger", image: "cheeseburger.png", type: Category.BURGER },
    { name: "Big Mac", image: "big-mac.png", type: Category.BURGER },
    { name: "Royale Burger", image: "royale-burger.png", type: Category.BURGER },
    { name: "Vegan Burger", image: "vegan-burger.png", type: Category.BURGER },
    { name: "Chicken Burger", image: "chicken-burger.png", type: Category.BURGER },
    { name: "Mozzarella Salad", image: "mozzarella-salad.png", type: Category.SALAD },
    { name: "Greek Salad", image: "greek-salad.png", type: Category.SALAD },
    { name: "Chicken Salad", image: "chicken-salad.png", type: Category.SALAD },
    { name: "Pizza Italiana", image: "italian-pizza.png", type: Category.PIZZA },
    { name: "Pizza Capricciosa", image: "capricciosa.png", type: Category.PIZZA },
    { name: "Pizza Diavola", image: "diavola.png", type: Category.PIZZA },
    { name: "Pizza Quattro Formaggi", image: "quattro-formaggi.png", type: Category.PIZZA },
    { name: "Coca-Cola", image: "coca-cola.png", type: Category.DRINK },
    { name: "Fanta", image: "fanta.png", type: Category.DRINK },
    { name: "Sprite", image: "sprite.png", type: Category.DRINK },
];

export default products;
