
import React from 'react';
import ItemCount from './ItemCount';
import { CartContext } from "./CartContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"

const ItemDetail = (props) => {
    const [countDesaparece, setCountDesaparece] = useState(true);
    const [unidadesCompradas, setUnidadesCompradas] = useState(0);
    const useCartContext = useContext(CartContext);
    const { addToCart } = useCartContext;
    const onAdd = (activeCounter) => {
        if (activeCounter !== undefined) {
            setUnidadesCompradas(activeCounter);
            setCountDesaparece(false);
    }
}
const handlePurchase = () => {
    addToCart(props.object, unidadesCompradas);
}
return (
        <div className="containerProductDetailed">
            <div>
                <img className="productImg" src= {props.object.img} alt=""/>
            </div>
            <div className="productBody">
                <p className="productName"> {props.object.nombre}</p><br/>
                <p className="productDescription">{props.object.descripcion}</p>
                <p className="productPrice">  {"$" + props.object.precio}</p><br/>
                <p> Stock: {props.object.stock}</p>
                <ItemCount initial={1} stock={props.object.stock} onAdd={onAdd} />
                    {countDesaparece ? null : <Link to="/cart/"><button className="Btn" onClick={handlePurchase}>Comprar</button></Link>}
                </div>
            </div>

    )
}
export default ItemDetail;