export default function CardPizza(props) {
    let ingredientes = "";
    props.ingredients.forEach((i) => {
        ingredientes += i + ", ";
    });

    let priceFormat =props.price.toLocaleString("de-DE")

    return (
        <>
            <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
                <div className="card mx-2">
                    <img src={props.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Pizza {props.name}</h5>
                        <hr />
                        <p className="card-text h4 text-center fw-light">Ingredientes:</p>
                        <p className="fw-light text-center">🍕 {ingredientes.slice(0, -2)}</p>
                        <hr />
                        <p className="h4 text-center">Precio: ${priceFormat}</p>
                        <div className="mt-3 d-flex justify-content-between">
                            <button className="btn btn-light btn-bdark">Ver mas 👀</button>
                            <button className="btn btn-dark btn-bdark">Añadir 🛒</button>
                        </div>                        
                    </div>
                </div>
            </article>
        </>
    );
}
