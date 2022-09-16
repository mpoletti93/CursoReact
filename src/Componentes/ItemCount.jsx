import { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(0);
    const restarCantidad = () => {
        setCount(previousCount => previousCount - 1);
    }
    const sumarCantidad = () => {
        setCount(previousCount => previousCount + 1);
    }
    const agregarProducto = () => {
        if (props.stock < count) {
        
        } else {
            agregar();
        }
    }
    const agregar = () => {
    }
    return (
        <>
            <div className="contador">
                <button onClick={restarCantidad} disabled={count === 0}>-</button>
                <p>{count}</p>
                <button onClick={sumarCantidad} disabled={count === props.stock}>+</button>
            </div>   
            <button className="productBtn" onClick={agregarProducto} disabled={count === 0}>Comprar</button>
        </>
    )
}
export default ItemCount;