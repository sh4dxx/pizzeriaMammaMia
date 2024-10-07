import CardPizza from "./cardpizza/CardPizza";
import Header from "./header/Header";
import { pizzas } from "./../../pizzas";

export default function Home() {
    
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">

                    {pizzas.map((pizza) => (
                        <CardPizza 
                            key={pizza.id} 
                            name={pizza.name} 
                            price={pizza.price} 
                            ingredients={pizza.ingredients} 
                            img={pizza.img} 
                            />
                    ))}
            
                </div>
            </div>
        </>
    );
}
