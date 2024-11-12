// import axios from "axios";
import Header from "../components/home/header/Header";
import CardPizza from "../components/home/cardpizza/CardPizza";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Home() {
    const { pizzas } = useContext(CartContext);
    return (
        <>
            <Header />
            <div className="container">
            {pizzas && (
                <div className="row">
                    {pizzas.map((pizza) => (
                        <CardPizza pizza={pizza} key={pizza.id} />
                    ))}
                </div>
            )}
            </div>
        </>
    );
}
