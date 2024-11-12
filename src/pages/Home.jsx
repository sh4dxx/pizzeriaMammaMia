// import axios from "axios";
import Header from "../components/home/header/Header";
import CardPizza from "../components/home/cardpizza/CardPizza";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Home() {
    const { pizzas } = useContext(CartContext);

    // const [pizzas, setPizzas] = useState([]);
    // const getPizzas = async () => {
    //     try {
    //         const respuesta = await axios.get("http://localhost:5000/api/pizzas");
    //         setPizzas(respuesta.data);
    //         // console.log(respuesta.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // useEffect(() => {
    //     getPizzas();
    // }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <CardPizza pizza={pizza} key={pizza.id} />
                    ))}
                </div>
            </div>
        </>
    );
}
