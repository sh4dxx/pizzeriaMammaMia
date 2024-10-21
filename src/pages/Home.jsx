import axios from "axios";
import Header from "../components/home/header/Header";
import CardPizza from "../components/home/cardpizza/CardPizza";
import { useState, useEffect } from "react";

export default function Home() {
    const [pizzas, setPizzas] = useState([]);
    const getPizzas = async () => {
        try {
            const respuesta = await axios.get("http://localhost:5000/api/pizzas");
            setPizzas(respuesta.data);
            // console.log(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} />
                    ))}
                </div>
            </div>
        </>
    );
}
