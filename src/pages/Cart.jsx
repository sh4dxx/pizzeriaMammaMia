import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
    const { cart, increment, decrement, total, numFormat } = useContext(CartContext);
    const { userToken } = useContext(UserContext);

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
                                <h6 className="pe-3">${numFormat(item.price * item.count)}</h6>
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
                        <h2 className="my-4">Total: ${total}</h2>
                    </div>
                    <div className="d-flex justify-content-end py-2">
                        <button className="btn btn-dark" disabled={!cart.length || !userToken}>
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Cart;
