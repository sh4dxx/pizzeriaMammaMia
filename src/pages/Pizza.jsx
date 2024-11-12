
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

export default function Pizza() {
    
    const { id } = useParams();
    const { pizzas, addToCart, numFormat } = useContext(CartContext);
    const pizza = pizzas.find(pizza => pizza.id === id);

    return (
        <>
            <article className="col-12 col-sm-12 col-md- col-lg-4 col-xl-4 my-4">
            {pizza && (
                <div className="card mx-2" key={pizza.id}>
                    <img src={pizza.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Pizza {pizza.name} </h5>
                        <hr />
                        <p className="card-text h6 fw-light">4 Ingredientes:</p>
                        <p>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li className="fw-light" key={index}>
                                    🍕{ingredient + " "} 
                                </li>
                            ))}
                        </p>
                        <p className="fw-light">{pizza.desc}</p>
                        <hr />
                        <p className="h4 text-center">Precio: ${numFormat(pizza.price)}</p>
                        <div className="mt-3 d-flex justify-content-center">
                            <button className="btn btn-dark btn-bdark" onClick={() => addToCart(pizza)} >Añadir al carrito 🛒</button>
                        </div>
                    </div>
                </div>
                )}
            </article>
        </>
    );
}
