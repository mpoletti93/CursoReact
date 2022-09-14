//import React from "react";
//import { useState } from "react";
/*
const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial); //1
    const [itemStock, setItemStock] = useState(stock); //5
    const [itemAdd, setItemAdd] = useState(onAdd); //0

    const decrementarCantidad = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarProductos = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);//4
            setItemAdd(itemAdd + cantidad);//0+1=1
        }   
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <p className="text-center">Pantalon</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => {decrementarCantidad(cantidad - 1)}} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => {}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => {incrementarCantidad(cantidad + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <input type="button" className="btn btn-secondary" value="Agregar" onClick={() => {agregarProductos()}} />       
                    </div>
                    <p>Productos Seleccionados: {itemAdd}</p>
                </div>
            </div>            
        </div>   
    )
};

export default ItemCount;
*/
import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > initial && setCount(count - 1);
    };

    return (
        <div className="container-counter">
            <div className="container-btn">
                <button className="btn-counter" onClick={sumar}>
                    +
                </button>
                <p style={{ fontSize: '24px' }}>{count} </p>
                <button className="btn-counter" onClick={restar}>
                    -
                </button>
            </div>
            <button className="btn-add">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;