import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContext } from "../../../context/CartContext";

export default function CardPizza({pizza}) {

    // console.log(pizza)
    let priceFormat = pizza.price.toLocaleString("de-DE")
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
                <div className="card mx-2">
                    <img src={pizza.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Pizza {pizza.name}</h5>
                        <hr />
                        <p className="card-text h5 fw-light">Ingredientes:</p>
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li className="fw-light" key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <hr />
                        <p className="h4 text-center">Precio: ${priceFormat}</p>
                        <div className="mt-3 d-flex justify-content-between">
                            <Link to="/pizza/p001" className="btn btn-light btn-bdark">Ver mas 👀</Link>
                            <button className="btn btn-dark btn-bdark" onClick={() => addToCart(pizza)} >Añadir 🛒</button>
                        </div>                        
                    </div>
                </div>
            </article>
        </>
    );
}
