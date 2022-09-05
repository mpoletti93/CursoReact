/*
import React from "react"


const ItemList = (props) => {
        return (
            <div className="cardBody">
                <img className="imgCard" src= {producto.img} alt=""/>
                <p className="nameCard">Nombre producto</p><br/>
                <p className="priceCard"> $ {producto.precio}</p><br/>
                <img className="imgCard" src= {props.producto.img} alt=""/>
                <p className="nameCard"> {props.producto.nombre}</p><br/>
                <p className="priceCard"> $ {props.producto.precio}</p><br/>
                <button className="btnCard">Ver más</button>
            </div>
        )}

export default ItemList; ¨
*/

import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-md-4 py-3">
                    <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio} />
                </div>)
            )}
        </div>
    )
}

export default ItemList;