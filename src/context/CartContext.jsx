import { createContext, useState, useEffect } from "react";
import { pizzaCart } from "../pizzas";
import axios from "axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        try {
            const respuesta = await axios.get("http://localhost:5000/api/pizzas");
            setPizzas(respuesta.data);
            console.log(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    useEffect(() => {
        setCart(pizzaCart);
    }, []);

    const addToCart = (pizza) => {
        const findIndex = cart.findIndex((item) => item.id === pizza.id);
        const product = {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            count: 1,
            desc: pizza.desc,
            img: pizza.img,
        };
        if (findIndex >= 0) {
            cart[findIndex].count++;
            setCart([...cart]);
        } else {
            setCart([...cart, product]);
        }
    };

    const increment = (i) => {
        const newCart = [...cart];
        newCart[i].count++;
        setCart(newCart);
    };

    const decrement = (i) => {
        const newCart = [...cart];
        newCart[i].count--;
        if (newCart[i].count === 0) {
            newCart.splice(i, 1);
        }
        setCart(newCart);
    };

    const numFormat = (value) => {
        return value.toLocaleString("de-DE");
    };

    let totalUf = cart.reduce((acc, el) => acc + el.price * el.count, 0);
    const total = numFormat(totalUf);

    const CartProviderValues = {
        cart,
        setCart,
        increment,
        decrement,
        total,
        pizzas,
        addToCart
    };

    return <CartContext.Provider value={CartProviderValues}>{children}</CartContext.Provider>;
    // return (
    //   <CartContext.Provider value={ CartProviderValues}>
    //     {children}
    //   </CartContext.Provider>
    // );
};
export default CartProvider;
