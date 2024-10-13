import { useState } from "react";
import { pizzaCart } from "../../pizzas";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

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

    const numberFormat = (value) => {
        return value.toLocaleString("de-DE");
    };

    const total = cart.reduce((acc, el) => acc + el.price * el.count, 0);

    return (
        <main className="container">
            <div className="p-5">
                <h5>Carrito de compra: </h5>
                <div>
                    {cart.map((item, i) => (
                        <div key={i} className="d-flex justify-content-end py-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <img src={item.img} width="50" alt="" />
                                <h6 className="text-capitalize p-2">{item.name}</h6>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <h6 className="pe-3">${ numberFormat( item.price * item.count )}</h6>
                                <button className="btn btn-danger" onClick={() => decrement(i)}>
                                    -
                                </button>
                                <b className="px-3">{item.count}</b>
                                <button className="btn btn-primary" onClick={() => increment(i)}>
                                    +
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="d-flex justify-content-end py-2">
                        <h2 className="my-4">Total: ${numberFormat(total)}</h2>
                    </div>
                    <div className="d-flex justify-content-end py-2">
                        <button className="btn btn-dark" disabled={!cart.length}> Pagar </button>
                    </div>

                </div>
            </div>
        </main>
    );
};
export default Cart;
