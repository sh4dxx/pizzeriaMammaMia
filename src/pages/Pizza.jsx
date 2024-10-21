
import axios from "axios";
import { useState, useEffect } from "react";

export default function Pizza() {
    const [pizza, setPizza] = useState([]);
    const getPizza = async () => {
        try {
            const respuesta = await axios.get("http://localhost:5000/api/pizzas/p001");
            setPizza(respuesta.data);
            //console.log(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPizza();
    }, []);

     //let priceFormat = pizza.price.toLocaleString("de-DE");
    //let quantityIngre = pizza.ingredients.length;

    return (
        <>
            <article className="col-12 col-sm-12 col-md- col-lg-4 col-xl-4 my-4">
                <div className="card mx-2" key={pizza.id}>
                    <img src={pizza.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Pizza {pizza.name} </h5>
                        <hr />
                        {/* <p className="card-text h6 fw-light">{quantityIngre} Ingredientes:</p> */}
                        <p className="card-text h6 fw-light">4 Ingredientes:</p>
                        <p>
                            {/* {pizza.ingredients.map((ingredient, index) => (
                                <spam className="fw-light" key={index}>
                                    🍕{ingredient + " "} 
                                </spam>
                            ))} */}
                        </p>
                        <p className="fw-light">{pizza.desc}</p>
                        <hr />
                        <p className="h4 text-center">Precio: ${pizza.price}</p>
                        <div className="mt-3 d-flex justify-content-center">
                            <button className="btn btn-dark btn-bdark">Añadir al carrito 🛒</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
