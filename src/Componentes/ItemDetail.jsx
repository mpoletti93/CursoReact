import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetails = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);

    const onAdd = (counter) => {
        setCounter(counter); 
        addItem(item, counter);
    }

    return (
        <div className="row mb-5">
            <div className="col-md-6 offset-md-3 text-center color_marron">
                <img src={"../images/" + item.img} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/cart"} className="btn fondo_naranja">Finalizar mi Compra</Link>}
            </div>
        </div>
    )
}

export default ItemDetails;